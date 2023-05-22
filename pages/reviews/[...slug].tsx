import React from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';
import CompanyProfileLayout from '@/components/layout/CompanyProfileLayout';
import {
  ReviewsResType,
  SummaryResType,
  CompetitorsResType,
  WordCloudResType,
} from '@/types/companies';
import { CompaniesProvider } from '@/providers/CompaniesProvider';
import redis from '@/lib/redis';
import { requestSummary, requestCompetitors, requestWordCloud, requestReview } from '@/api/api';

export type CompanyProfilePageProps = {
  reviews: ReviewsResType[];
  summaries: SummaryResType[];
  competitors: CompetitorsResType[];
  wordCloud: WordCloudResType[];
};

const CompanyProfilePage = ({
  reviews,
  summaries,
  competitors,
  wordCloud,
}: CompanyProfilePageProps) => {
  return (
    <CompaniesProvider
      reviews={reviews}
      summaries={summaries}
      competitors={competitors}
      wordCloud={wordCloud}
    >
      <CompanyProfileLayout />
    </CompaniesProvider>
  );
};

export async function getServerSideProps({ query }: NextPageContext) {
  const companySlugs = Array.isArray(query.slug)
    ? query.slug.filter((slugItem) => slugItem !== 'vs')
    : [query.slug || ''];

  if (companySlugs.length > 3) {
    return { notFound: true };
  }

  try {
    if (typeof query['gmv-flush'] !== 'undefined' && query['gmv-flush'] === 'true') {
      await Promise.all([
        await redis.del(`reviews/${companySlugs[0]}`),
        await redis.del(`summary/${companySlugs[0]}`),
        await redis.del(`competitors/${companySlugs[0]}`),
        await redis.del(`wordCloud/${companySlugs[0]}`),
      ]);
    }

    const getDataSingleCompany = async (slugs: string[]) => {
      return await Promise.all([
        await requestSummary(slugs[0]),
        await requestCompetitors(slugs[0]),
        await requestWordCloud(slugs[0]),
      ]);
    };

    const getDataTwoCompanies = async (slugs: string[]) => {
      return await Promise.all([
        await requestSummary(slugs[0]),
        await requestCompetitors(slugs[0]),
        await requestWordCloud(slugs[0]),
        await requestSummary(slugs[1]),
        await requestCompetitors(slugs[1]),
        await requestWordCloud(slugs[1]),
      ]);
    };

    const getDataThreeCompanies = async (slugs: string[]) => {
      return await Promise.all([
        await requestSummary(slugs[0]),
        await requestCompetitors(slugs[0]),
        await requestWordCloud(slugs[0]),
        await requestSummary(slugs[1]),
        await requestCompetitors(slugs[1]),
        await requestWordCloud(slugs[1]),
        await requestSummary(slugs[2]),
        await requestCompetitors(slugs[2]),
        await requestWordCloud(slugs[2]),
      ]);
    };

    const getReviewsSingleCompany = async (slugs: string[], hasTimeseries: boolean[]) => {
      return await requestReview(slugs[0], hasTimeseries[0]);
    };

    const getReviewsTwoCompanies = async (slugs: string[], hasTimeseries: boolean[]) => {
      return await Promise.all([
        await requestReview(slugs[0], hasTimeseries[0]),
        await requestReview(slugs[1], hasTimeseries[1]),
      ]);
    };

    const getReviewsThreeCompanies = async (slugs: string[], hasTimeseries: boolean[]) => {
      return await Promise.all([
        await requestReview(slugs[0], hasTimeseries[0]),
        await requestReview(slugs[1], hasTimeseries[1]),
        await requestReview(slugs[2], hasTimeseries[2]),
      ]);
    };

    const getData = async (companySlugs: string[]) => {
      if (companySlugs.length === 2) {
        return await getDataTwoCompanies(companySlugs);
      } else if (companySlugs.length === 3) {
        return await getDataThreeCompanies(companySlugs);
      }
      return await getDataSingleCompany(companySlugs);
    };

    const fetchedData = await getData(companySlugs);

    const summariesData = fetchedData.filter((_, index) =>
      [0, 3, 6].includes(index)
    ) as SummaryResType[];

    const getReviewsData = async (companySlugs: string[], summariesData: SummaryResType[]) => {
      if (companySlugs.length === 2) {
        return await getReviewsTwoCompanies(companySlugs, [
          summariesData[0].has_timeseries || false,
          summariesData[1].has_timeseries || false,
        ]);
      } else if (companySlugs.length === 3) {
        return await getReviewsThreeCompanies(companySlugs, [
          summariesData[0].has_timeseries || false,
          summariesData[1].has_timeseries || false,
          summariesData[2].has_timeseries || false,
        ]);
      }
      return await getReviewsSingleCompany(companySlugs, [
        summariesData[0].has_timeseries || false,
      ]);
    };

    const fetchedReviewsData = await getReviewsData(companySlugs, summariesData);

    return {
      props: {
        reviews: Array.isArray(fetchedReviewsData) ? fetchedReviewsData : [fetchedReviewsData],
        summaries: summariesData,
        competitors: fetchedData.filter((_, index) => [1, 4, 7].includes(index)),
        wordCloud: fetchedData.filter((_, index) => [2, 5, 8].includes(index)),
        isCompanyReviewsPage: true
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      return { notFound: true };
    }

    return { error: true };
  }
}

export default CompanyProfilePage;
