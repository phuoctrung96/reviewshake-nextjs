import InboxPage from '@/components/route/inbox/InboxPage';
import SeoTags from '@/components/reusable/seo-tags/SeoTags';

const Inbox = () => {
  return (
    <>
      <SeoTags
        metaTitle="Inbox"
        metaDescription="Using our new Inbox feature, you can see all the communications between you and your customers: review request, private feedback and SMS replies."
      />
      <InboxPage />
    </>
  );
};

export default Inbox;
