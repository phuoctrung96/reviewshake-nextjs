import ManageReviewsPage from '@/components/route/manage-reviews/ManageReviewsPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const ManageReviews = () => {
  return (
    <>
      <SeoTags
        metaTitle="Manage reviews"
        metaDescription="Knowing the online perception about your brand, products or services allows you to take the right steps to improve your reputation and get more business."
      />
      <ManageReviewsPage />
    </>
  );
};

export default ManageReviews;
