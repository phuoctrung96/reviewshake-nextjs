import AnalyzeReviewsPage from '@/components/route/analyze-reviews/AnalyzeReviewsPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const AnalyzeReviews = () => {
  return (
    <>
      <SeoTags
        metaTitle="Analyze reviews"
        metaDescription="You've seen and read the reviews about your business. Now you can go one step further: see trends over time, compare with competitors, see results by platform."
      />
      <AnalyzeReviewsPage />
    </>
  );
};

export default AnalyzeReviews;
