import MarketReviewsPage from '@/components/route/market-reviews/MarketReviewsPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const MarketReviews = () => {
  return (
    <>
      <SeoTags
        metaTitle="Market reviews"
        metaDescription="Boost your brand perception by showing off online reviews to your prospective customers. Widgets, social sharing, video reviews - we have everything you need."
      />
      <MarketReviewsPage />
    </>
  );
};

export default MarketReviews;
