import AboutUsPage from '@/components/route/about-us/AboutUsPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const AboutUs = () => {
  return (
    <>
      <SeoTags
        metaTitle="About us"
        metaDescription="Our mission is to help businesses grow with online reviews. While we love growth, we don't strive for growth at all costs and are building a company that we can be proud of, and enjoy working for."
      />
      <AboutUsPage />
    </>
  );
};

export default AboutUs;
