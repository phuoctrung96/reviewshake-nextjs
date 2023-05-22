import SmallBusinessPage from '@/components/route/small-business/SmallBusinessPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const SmallBusiness = () => {
  return (
    <>
      <SeoTags
        metaTitle="Review Management Platform"
        metaDescription="One tool to generate, manage, market and analyze online reviews."
      />
      <SmallBusinessPage />
    </>
  );
};

export default SmallBusiness;
