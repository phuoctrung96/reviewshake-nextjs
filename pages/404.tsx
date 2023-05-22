import ErrorPage from '../components/route/error-page/ErrorPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const Error404 = () => {
  return (
    <>
      <SeoTags metaTitle="404" />
      <ErrorPage />
    </>
  );
};

export default Error404;
