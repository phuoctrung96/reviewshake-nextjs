import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { Skeleton } from '@mui/material';
import Section from '../reusable/section/Section';
import ComparisonDropdown from '../reusable/comparison-dropdown/ComparisonDropdown';
import {
  StyledMainTitleDiv,
  StyledCompanyInfoDiv,
  StyledTagWrDiv,
  StyledReviewSummaryWrCard,
  StyledWorldMapWrCard,
  StyledAboutDataWr,
  StyledSignUpBaseLinkBtn,
  StyledGainDeeperInsightsBtn,
  StyledCompetitorsWr,
  StyledCompanyProfileReviewsWr,
  StyledWordCloudCardWr,
  StyledWordCloudSectionWr,
  StyledCompanyProfileBottomWr,
  StyledCompanyInfoTag,
} from './companyProfileLayout.styles';
import useCompanies from '@/providers/CompaniesProvider';
import Container from '../reusable/container/Container';
import Card, { BorderColor } from '../reusable/card/Card';
import ReviewsSummary from '../reusable/reviews-summary/ReviewsSummary';
import ProfilesSection from '../reusable/profiles-section/ProfilesSection';
import ProfilePageCharts from '../reusable/profile-page-charts/ProfilePageCharts';
import SectionTitle from '../reusable/section-title/SectionTitle';
import CompetitorsList from '../reusable/competitors-list/CompetitorsList';
import CompanyProfileReview from '../reusable/company-profile-review/CompanyProfileReview';
import ReviewRichSnippet from '../reusable/review-rich-snippet/ReviewRichSnippet';
import WordCloud from '../reusable/word-cloud/WordCloud';
import { shortenNumber } from '@/utils/formatNumber';
import { getDaysAgo } from '@/utils/formatDate';
import { getMetaTitle, getMetaDescription } from '@/utils/meta';
import { CompaniesCountType } from '@/types/companies';
import { reviewsDummyData } from '../reusable/review/reviewData';
import { wordCloudSampleData } from '../reusable/word-cloud/wordCloudData';
import SeoTags from '../reusable/seo-tags/SeoTags';

const colors: { '1': BorderColor; '2': BorderColor; '3': BorderColor } = {
  '1': 'blue',
  '2': 'orange',
  '3': 'red',
};

const CompanyProfileLayout = () => {
  const router = useRouter();
  const { summariesData, companyNames, countOfAllLocations, wordCloudData, competitorsData } =
    useCompanies();

  const companyWebsites = summariesData.map((summary) => summary.organization.website || '');

  const metaImage = new URL(`${process.env.NEXT_PUBLIC_OG_IMAGE_FETCH_URL}api/image`);
  companyWebsites.map((website) => metaImage.searchParams.append('companyWebsites', website));
  companyNames.map((companyName) => metaImage.searchParams.append('companyNames', companyName));

  const profilesCount = shortenNumber(
    summariesData.reduce(
      (acc, companySummary) => acc + companySummary.profile_summary.total_profiles,
      0
    ),
    1000
  );

  const reviewsCount = shortenNumber(
    summariesData.reduce((acc, companySummary) => acc + companySummary.review_summary.total, 0),
    1000
  );

  const profileSourceWebsites = summariesData[0].profile_summary.per_source.map(
    (item) => item.source
  );

  const getDaysAgoText = () => {
    const daysAgo = getDaysAgo(summariesData[0].updatedOn);

    if (daysAgo === 0) return 'today';
    if (daysAgo === 1) return 'yesterday';

    return daysAgo + ' days ago';
  };

  return (
    <Section backgroundColor="gray" pt={{ _: 75, md: 75, lg: 75, xl: 83 }}>
      <Head>
        <meta property="og:image" content={metaImage.toString()} />
      </Head>
      <ComparisonDropdown />
      <Container>
        <StyledMainTitleDiv>
          <div>
            <h1>Analyze Online Reviews</h1>
            <p>
              Analyze and compare customer experience using aggregated online reviews, for up to 3
              companies and/or industry benchmarks.
            </p>
          </div>
          <StyledGainDeeperInsightsBtn
            href={`/contact-us?referUrl=${encodeURIComponent(
              process.env.NEXT_PUBLIC_FETCH_URL?.slice(0, -1) + router.asPath
            )}`}
          >
            Gain deeper insights
          </StyledGainDeeperInsightsBtn>
        </StyledMainTitleDiv>
        <StyledCompanyInfoDiv $summariesData={summariesData}>
          {summariesData.map(({ organization }, index) => {
            const tags = [
              organization?.industry,
              organization?.sub_industry,
              organization?.sector,
              organization?.number_of_employees ? organization?.number_of_employees.toString() : '',
            ];

            const tagsWithValues = tags.filter((tag) => tag);

            return (
              <Card
                key={index}
                title={organization?.official_name || ''}
                mainCard
                logo={organization?.website || ''}
                description={organization?.description}
                borderColor={colors[(index + 1).toString() as '1' | '2' | '3']}
                borderTop
                truncateDescription
              >
                {tagsWithValues.length > 0 && (
                  <>
                    <hr />
                    <StyledTagWrDiv>
                      {tags.map((tag, index) => {
                        if (tag) {
                          return <StyledCompanyInfoTag key={index}>{tag}</StyledCompanyInfoTag>;
                        }
                      })}
                    </StyledTagWrDiv>
                  </>
                )}
              </Card>
            );
          })}

          {summariesData.map((companySummary, index) => {
            return (
              <StyledReviewSummaryWrCard
                key={index}
                borderColor={colors[(index + 1).toString() as '1' | '2' | '3']}
                $summariesData={summariesData}
              >
                <ReviewsSummary
                  rating={Math.round(companySummary.review_summary.average_rating * 10) / 10}
                  reviewsTotalCount={companySummary.review_summary.total}
                />
                <hr />
                <ProfilesSection
                  key={index}
                  companyName={companyNames[index]}
                  perSourceSummary={companySummary.profile_summary}
                  profiles={companySummary.sample_profiles}
                />
              </StyledReviewSummaryWrCard>
            );
          })}
        </StyledCompanyInfoDiv>
        <ProfilePageCharts />

        {countOfAllLocations > 0 && (
          <StyledWorldMapWrCard blurred>
            <Image
              src="/assets/images/about-us/world.svg"
              width={344}
              height={148}
              alt="World Map"
            />
          </StyledWorldMapWrCard>
        )}

        <StyledAboutDataWr>
          <div>
            <h2>About this data</h2>
            <p>
              We&apos;re creating a more transparent world by making it easier for anyone to analyze
              and compare companies using their online reviews. This site provides a singular view
              for customer experience, whether it&apos;s a company with 1 to 50k+ locations,
              software businesses, e-commerce players and more.
            </p>
            {typeof summariesData[0].updatedOn !== 'undefined' && (
              <p>
                <em>This data was last updated {getDaysAgoText()}.</em>
              </p>
            )}
            <StyledSignUpBaseLinkBtn
              href={`/contact-us?referUrl=${encodeURIComponent(
                process.env.NEXT_PUBLIC_FETCH_URL?.slice(0, -1) + router.asPath
              )}`}
            >
              Get in touch
            </StyledSignUpBaseLinkBtn>
          </div>
        </StyledAboutDataWr>
      </Container>

      {competitorsData[0].success && (
        <StyledCompetitorsWr>
          <Container>
            <SectionTitle title="Competitors & similar companies" type="Secondary">
              Check out how other companies stack up in customer experience.
            </SectionTitle>
            <CompetitorsList />
          </Container>
        </StyledCompetitorsWr>
      )}

      <StyledWordCloudSectionWr>
        <SectionTitle title="What people are saying" type="Secondary">
          Discover the trending topics driving positive and negative sentiment.
        </SectionTitle>
        <StyledCompanyProfileBottomWr $summariesData={summariesData}>
          {wordCloudData.map((wordCloud, index) => {
            const isWordCloudLoading = !!wordCloud?.loading;
            const isWordCloudNoData = !wordCloud?.success;

            return (
              <StyledWordCloudCardWr
                key={index}
                borderColor={colors[(index + 1) as CompaniesCountType]}
                {...(isWordCloudNoData &&
                  !isWordCloudLoading && {
                    blurred: true,
                    blurValue: 7,
                    blurLinkText: 'Discover topics',
                  })}
              >
                {isWordCloudLoading ? (
                  <>
                    <Skeleton variant="text" width="100%" animation="wave" height={30} />
                    <Skeleton variant="text" width="100%" animation="wave" height={30} />
                    <Skeleton variant="text" width="100%" animation="wave" height={30} />
                    <Skeleton variant="text" width="100%" animation="wave" height={30} />
                  </>
                ) : (
                  <WordCloud
                    title={companyNames[index]}
                    titleColor={colors[(index + 1) as CompaniesCountType]}
                    words={isWordCloudNoData ? wordCloudSampleData[0] : wordCloud}
                  />
                )}
              </StyledWordCloudCardWr>
            );
          })}

          {summariesData.map(({ sample_reviews }, index) => {
            return (
              <StyledCompanyProfileReviewsWr
                key={index}
                $summariesData={summariesData}
                borderColor={colors[(index + 1) as CompaniesCountType]}
                {...(sample_reviews.length === 0 && {
                  blurred: true,
                  blurLinkText: 'See what people are saying',
                })}
              >
                {sample_reviews.length === 0 &&
                  reviewsDummyData.map((review, index) => (
                    <CompanyProfileReview
                      key={index}
                      content={review.content}
                      date={review.date.toString()}
                      rating={review.rating}
                      title={review.reviewer}
                    />
                  ))}
                {sample_reviews.map(({ text, date, rating, reviewer }, index) => {
                  if (index > 5) return null;
                  return (
                    <CompanyProfileReview
                      key={index}
                      content={text || ''}
                      date={date.toString() || ''}
                      rating={rating}
                      title={reviewer || ''}
                    />
                  );
                })}
              </StyledCompanyProfileReviewsWr>
            );
          })}
        </StyledCompanyProfileBottomWr>
      </StyledWordCloudSectionWr>

      <SeoTags
        metaTitle={getMetaTitle(summariesData.length as 1 | 2 | 3, companyNames, profilesCount)}
        metaDescription={getMetaDescription(
          summariesData.length as 1 | 2 | 3,
          companyNames,
          reviewsCount,
          profileSourceWebsites,
          profilesCount
        )}
      />

      <ReviewRichSnippet
        name={summariesData[0].organization.official_name || ''}
        ratingValue={summariesData[0].review_summary.average_rating}
        ratingCount={summariesData[0].review_summary.total}
      />
    </Section>
  );
};

export default CompanyProfileLayout;
