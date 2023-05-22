import AgencyPage from '@/components/route/agency/Agency';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const Agencies = () => {
  return (
    <>
      <SeoTags
        metaTitle="Review Management Platform"
        metaDescription="Let us power the tech while you do the sales. Get our review management platform under your brand and relax while your customers improve their online reputation."
      />
      <AgencyPage />
    </>
  );
};

export default Agencies;
