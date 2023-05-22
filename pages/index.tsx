import HomePage from '@/components/route/home-page/HomePage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const Home = () => {
  return (
    <>
      <SeoTags
        metaTitle="Review Management Platform"
        metaDescription="The all-in-one tool to generate reviews, boost your brand and keep up-to-date with your reputation."
      />
      <HomePage />
    </>
  );
};

export default Home;
