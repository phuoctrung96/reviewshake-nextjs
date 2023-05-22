import { GetStaticPaths, GetStaticProps } from 'next';
import ComparisonPageLayout from '@/components/route/comparison-pages/ComparisonPageLayout';
import {
  COMPARISON_PAGES,
  ComparisonPageType,
} from '@/components/route/comparison-pages/comparisonPagesData';
import ComparisonContentGradeUs from '@/components/content/ComparisonContentGradeUs';
import { useRouter } from 'next/router';
import ComparisonContentTestimonial from '@/components/content/ComparisonContentTestimonial';
import ComparisonContentBirdeye from '@/components/content/ComparisonContentBirdeye';
import ComparisonContentPodium from '@/components/content/ComparisonContentPodium';
import ComparisonContentGatherUp from '@/components/content/ComparisonContentGatherUp';
import ComparisonContentLocalClarity from '@/components/content/ComparisonContentLocalClarity';
import ComparisonContentRepuso from '@/components/content/ComparisonContentRepuso';
import ComparisonContentProveSource from '@/components/content/ComparisonContentProveSource';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

export const comparisonContents = {
  'reviewshake-vs-gradeus': <ComparisonContentGradeUs />,
  'reviewshake-vs-testimonial': <ComparisonContentTestimonial />,
  'reviewshake-vs-birdeye': <ComparisonContentBirdeye />,
  'reviewshake-vs-podium': <ComparisonContentPodium />,
  'reviewshake-vs-gatherup': <ComparisonContentGatherUp />,
  'reviewshake-vs-local-clarity': <ComparisonContentLocalClarity />,
  'reviewshake-vs-repuso': <ComparisonContentRepuso />,
  'reviewshake-vs-provesource': <ComparisonContentProveSource />,
};

const ComparisonPages = (comparisonPageData: ComparisonPageType) => {
  const router = useRouter();
  const path = router.asPath.split('/')[1] as keyof typeof comparisonContents;
  const activePageContent = path ? comparisonContents[path] : null;

  return (
    <>
      <SeoTags
        metaTitle={comparisonPageData.title}
        metaDescription={`Learn how Reviewshake compares to ${comparisonPageData.companyName}, and make the switch today.`}
      />
      <ComparisonPageLayout comparisonPageData={comparisonPageData} content={activePageContent} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = COMPARISON_PAGES.map((s) => ({
    params: { comparisonSlug: encodeURI(s.slug) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const singleComparisonPage = COMPARISON_PAGES.find(
      (item) => item.slug === params.comparisonSlug
    );

    if (!singleComparisonPage) return { notFound: true };

    const comparisonPage: ComparisonPageType = {
      ...singleComparisonPage,
    };

    return {
      props: { ...comparisonPage },
    };
  }

  return { notFound: true };
};

export default ComparisonPages;
