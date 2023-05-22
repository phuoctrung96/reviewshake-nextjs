import SeoTags from '@/components/reusable/seo-tags/SeoTags';
import BrandAuditPage from '@/components/route/brand-audit/BrandAuditPage';

const AboutUs = () => {
  return (
    <>
      <SeoTags
        metaTitle="Free business review scan"
        metaDescription="Get a free audit of your business reviews"
      />
      <BrandAuditPage />
    </>
  );
};

export default AboutUs;
