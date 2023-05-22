import { capitalizeFirstLetter } from './formatString';

const getSitesText = (sites: string[], type: 'longer' | 'normal' = 'normal') => {
  if (sites.length === 0) return 'internet';

  const sitesData = type === 'normal' ? sites.slice(0, 3) : sites.slice(0, 5);

  let sitesText = '';

  if (sitesData.length === 1) return capitalizeFirstLetter(sitesData[0]);

  sitesData.map((site, index) => {
    if (index === sitesData.length - 1) {
      return (sitesText +=
        type === 'normal'
          ? capitalizeFirstLetter(site) + ''
          : `and ${capitalizeFirstLetter(site)}`);
    }

    if (index === sitesData.length - 2 && type === 'longer') {
      return (sitesText += `${capitalizeFirstLetter(site)} `);
    }

    return (sitesText += capitalizeFirstLetter(site) + ', ');
  });

  return type === 'longer'
    ? `${sitesText}, and compare to the competition`
    : `${sitesText} and more`;
};

const getTwoCompaniesMetaDescription = (
  companyNames: string[],
  reviewsCount: number | string,
  profileWebsites: string[],
  profilesCount: number | string
) => {
  return `Analyze ${reviewsCount} aggregated reviews for ${companyNames[0]} as compared to ${
    companyNames[1]
  }, from ${profilesCount} review profiles from ${getSitesText(profileWebsites)}.`;
};

const getThreeCompaniesMetaDescription = (
  companyNames: string[],
  reviewsCount: number | string,
  profileWebsites: string[],
  profilesCount: number | string
) => {
  return `Analyze ${reviewsCount} aggregated reviews for ${companyNames[0]} compared to ${
    companyNames[1]
  } and ${companyNames[2]}, from ${profilesCount} review profiles from ${getSitesText(
    profileWebsites
  )}.`;
};

const getSingleCompanyMetaDescription = (
  companyNames: string[],
  reviewsCount: number | string,
  profileWebsites: string[],
  profilesCount: number | string
) => {
  return `Analyze ${reviewsCount} aggregated reviews for ${
    companyNames[0]
  } from ${profilesCount} profiles on ${getSitesText(profileWebsites, 'longer')}.`;
};

export const getMetaTitle = (
  countOfComparedCompanies: 1 | 2 | 3,
  companyNames: string[],
  profilesCount: number | string
) => {
  if (countOfComparedCompanies === 3) {
    return `${companyNames[0]} vs ${companyNames[1]} vs ${companyNames[2]} Reviews | Compare Customer Reviews of ${companyNames[0]} vs ${companyNames[1]} vs ${companyNames[2]}`;
  } else if (countOfComparedCompanies === 2) {
    return `${companyNames[0]} vs ${companyNames[1]} Reviews | Compare Customer Reviews of ${companyNames[0]} vs ${companyNames[1]}
      `;
  }

  return `${companyNames[0]} Reviews | Analyze Customer Reviews of ${companyNames[0]} from ${profilesCount} profiles`;
};

export const getMetaDescription = (
  countOfComparedCompanies: 1 | 2 | 3,
  companyNames: string[],
  reviewsCount: number | string,
  profileWebsites: string[],
  profilesCount: number | string
) => {
  if (countOfComparedCompanies === 2) {
    return getTwoCompaniesMetaDescription(
      companyNames,
      reviewsCount,
      profileWebsites,
      profilesCount
    );
  } else if (countOfComparedCompanies === 3) {
    return getThreeCompaniesMetaDescription(
      companyNames,
      reviewsCount,
      profileWebsites,
      profilesCount
    );
  }

  return getSingleCompanyMetaDescription(
    companyNames,
    reviewsCount,
    profileWebsites,
    profilesCount
  );
};
