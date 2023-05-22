import { NextPageContext } from 'next';
import { comparisonContents } from '@/pages/[comparisonSlug]';

const Sitemap = () => null;

export const getServerSideProps = async ({ res }: NextPageContext) => {
  const staticPages = [
    '',
    'about-us',
    'analyze-reviews',
    'generate-reviews',
    'inbox',
    'manage-reviews',
    'market-reviews',
    'pricing',
    'pricing/agency',
    'pricing/small-business',
    'platform/agencies',
    'platform/small-business',
  ];

  if (res) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((page) => {
            return `
<url>
  <loc>${process.env.NEXT_PUBLIC_FETCH_URL}${page}</loc>
</url>`;
          })
          .join('')}
          ${Object.keys(comparisonContents)
            .map((key) => {
              return `
<url>
  <loc>${process.env.NEXT_PUBLIC_FETCH_URL}${key}</loc>
</url>`;
            })
            .join('')}
</urlset>`);
    res.end();
  }

  return {
    props: {},
  };
};

export default Sitemap;
