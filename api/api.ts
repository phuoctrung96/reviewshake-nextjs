import { AxiosResponse } from 'axios';
import {
  CompaniesSuggestionsResponseType,
  CompaniesSuggestionsReqType,
} from '@/pages/api/companies';
import {
  CompetitorsResType,
  ReviewsResType,
  SummaryResType,
  WordCloudResType,
  MetadataResType
} from '@/types/companies';
import { newFetch } from '@/utils/fetch';

export const companySearchRequest = async (
  params: CompaniesSuggestionsReqType
): Promise<CompaniesSuggestionsResponseType> => {
  const companySearchRes: AxiosResponse<CompaniesSuggestionsResponseType> = await newFetch(
    'companies/',
    {
      params,
    }
  );

  return companySearchRes.data;
};

export const requestCompetitors = async (slug: string): Promise<CompetitorsResType> => {
  const competitorsRes: AxiosResponse<CompetitorsResType> = await newFetch('/companies/data', {
    params: {
      slug,
      dataType: 'competitors',
    },
  });

  return competitorsRes.data;
};

export const requestReview = async (
  slug: string,
  hasTimeseries: boolean
): Promise<ReviewsResType> => {
  if (!hasTimeseries) {
    return {
      success: true,
      slug,
      timeseries: [],
    };
  }

  const reviewsRes: AxiosResponse<ReviewsResType> = await newFetch('companies/data', {
    params: {
      slug,
      dataType: 'reviews',
    },
  });

  return reviewsRes.data;
};

export const requestSummary = async (slug: string): Promise<SummaryResType> => {
  const summaryRes: AxiosResponse<SummaryResType> = await newFetch('/companies/summary', {
    params: {
      slug,
    },
  });

  return summaryRes.data;
};

export const requestWordCloud = async (slug: string): Promise<WordCloudResType> => {
  const wordCloudRes: AxiosResponse<WordCloudResType> = await newFetch('/companies/data', {
    params: {
      slug,
      dataType: 'wordCloud',
    },
  });

  return wordCloudRes.data;
};

export const requestMetadata = async (slug: string): Promise<MetadataResType> => {
  const metadataRes: AxiosResponse<MetadataResType> = await newFetch('/companies/metadata', {
    params: {
      slug,
    },
  });

  return metadataRes.data;
};
