import ContentTitle from '@/components/reusable/content/ContentTitle';
import ContentText from '@/components/reusable/content/ContentText';
import ContentImage from '@/components/reusable/content/ContentImage';

const ComparisonContentPodium = () => {
  return (
    <>
      <ContentTitle as={'h1'}>Reviewshake vs Podium</ContentTitle>
      <ContentText>Let’s see how Reviewshake compares to Podium.</ContentText>
      <ContentText>
        Podium is a review generation and management platform that requests reviews from your
        customers through SMS. Both platforms offer strong features. However, from my testing, they
        have different focuses. Podium focuses on customer communication, whereas Reviewshake is
        focused on being a comprehensive reputation management platform.
      </ContentText>
      <ContentText>
        Podium is ideal for local businesses with 1 to 15 locations. However, Reviewshake has a
        cater-to-all approach with different plans to suit any size business or agency.
      </ContentText>
      <ContentTitle as={'h2'}>Pricing</ContentTitle>
      <ContentText>
        First, let’s look at pricing plans for Reviewshake and Podium. The pricing structure for
        each platform is quite different since they offer different features that target different
        users. Podium targets local businesses, and its plans start from $249 per month.
      </ContentText>
      <ContentText>
        Reviewshake targets a range of businesses. It offers plans suitable for small businesses,
        enterprises, and agencies. Plans with Reviewshake start from as little as $31 per month.
      </ContentText>
      <ContentTitle as={'h2'}>Podium</ContentTitle>
      <ContentText>
        Podium is a comprehensive CRM that focuses on growth, communication, and payments.
      </ContentText>
      <ContentText>
        In terms of growth, Podium offers a simple review generation through SMS. It sends customers
        a text to request a review. It also offers website chat and a payment solution to make the
        customer experience seamless.
      </ContentText>
      <ContentText>
        Podium also offers an inbox to ease communication with clients where you can manage your
        customer messages all in one place. It also offers video chat so you can communicate with
        your customers face-to-face.
      </ContentText>
      <ContentImage
        src="/assets/images/comparison/podium/podium1-242d7cb057e0c86f647715f78288dc510c8bc331d2f3440c34f72376289612a9.png"
        width={934}
        height={484}
        alt="Podium messenger"
      />
      <ContentText>
        Podium also offers a solution to easily collect payments from customers. You can text your
        customer when you’re ready to collect their payment and send them their receipt once paid.
      </ContentText>
      <ContentTitle as={'h2'}>Reviewshake</ContentTitle>
      <ContentText>
        Reviewshake focuses more on review management. So if you’re looking for a platform that
        automatically manages, generates, analyzes, and markets reviews all in one place,
        Reviewshake is the perfect platform for you.
      </ContentText>
      <ContentTitle as={'h2'}>Manage Reviews</ContentTitle>
      <ContentText>
        Reviewshake manages reviews from 85+ websites. Plus, its white-label feature allows you to
        resell its software to your clients.
      </ContentText>
      <ContentText>
        It also segments your positive and negative reviews so you can pinpoint the area you need to
        improve on. With Reviewshake, you can also reply to reviews on Google and Facebook directly
        from the platform, so it’s easy to manage your reviews in one space.
      </ContentText>
      <ContentText>
        Like Podium, Reviewshake also has a two-way SMS inbox that lets you easily communicate
        directly with customers.
      </ContentText>
      <ContentTitle as={'h2'}>Generate Reviews</ContentTitle>
      <ContentText>
        Reviewshake offers a simple solution to generate text and video reviews. It automatically
        reminds customers who haven’t left a review yet, so you don’t need to manually text your
        customers to remind them.
      </ContentText>
      <ContentTitle as={'h2'}>Analyze Reviews</ContentTitle>
      <ContentText>
        Reviewshake’s analytical features are a step above the rest. Reviewshake creates reports
        that look at your business locations or competitors side-by-side. This way, you can easily
        view where you’re lacking in certain locations or compare to your competitors so you can
        focus your energy where you really need to.
      </ContentText>
      <ContentImage
        src="/assets/images/comparison/testimonial/testimonial2-44a5de8f3565480ba37ebed44a8c9ae20da8f8ee8ca825e1ffcf902cd57c4bad.png"
        width={931}
        height={771}
        alt="Reviewshake analytics overview"
      />
      <ContentTitle as={'h2'}>Market Reviews</ContentTitle>
      <ContentText>
        With Reviewshake, you can share your best reviews automatically to your social media to help
        you gain new leads. Plus, you can showcase your reviews on your website landing page to
        immediately build trust with your customers.
      </ContentText>
      <ContentText>
        Podium doesn’t offer the same level of marketing features. While it does offer text
        marketing campaigns, you cannot market to new leads through social media without manually
        sharing your reviews.
      </ContentText>
      <ContentTitle as={'h2'}>Final thoughts</ContentTitle>
      <ContentText>
        In terms of review generation and management, Reviewshake surpasses Podium in a few ways. It
        allows you to generate text and video reviews and you can easily manage your reviews by
        viewing positive and negative reviews separately. Reviewshake also markets your reviews
        automatically and creates detailed reports.
      </ContentText>
      <ContentText>Reviewshake reduces your workload by managing your reviews for you.</ContentText>
    </>
  );
};

export default ComparisonContentPodium;
