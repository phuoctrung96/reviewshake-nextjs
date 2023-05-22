import PricingPage from '@/components/route/pricing/PricingPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const Agency = () => {
  return (
    <>
      <SeoTags
        metaTitle="Transparent pricing"
        metaDescription="Simple plans that grow with your business. No contracts. No setup fees."
      />
      <PricingPage />
    </>
  );
};

export default Agency;
