import ContentTitle from '@/components/reusable/content/ContentTitle';
import ContentText from '@/components/reusable/content/ContentText';
import ContentImage from '@/components/reusable/content/ContentImage';

const ComparisonContentGradeUs = () => {
  return (
    <>
      <ContentTitle as={'h1'}>Reviewshake vs Grade.us</ContentTitle>
      <ContentText>Let’s see how Reviewshake compares to Grade.us.</ContentText>
      <ContentText>
        Having used and tested both platforms, Reviewshake is easier to use and offers a broader
        range of features than Grade.us.
      </ContentText>
      <ContentText>
        Grade.us is a solid platform that offers white label review and marketing management. While
        it offers some strong features, it is surpassed by Reviewshake, especially with its features
        for generating and analyzing reviews.
      </ContentText>
      <ContentTitle as={'h2'}>Price</ContentTitle>
      <ContentText>
        Both Reviewshake and Grade.us offer different price plans depending on the size of your
        business and how many users you want. In general, Reviewshake plans are more affordable than
        Grade.us. Reviewshake’s 1-user plans start from only $31 per month, whereas the same plan
        from Grade.us is more expensive at $110 per month.
      </ContentText>
      <ContentText>
        Both platforms offer a 14-day trial to test it out before you buy. Grade.us has also
        increased its prices a lot in the last year.
      </ContentText>
      <ContentImage
        src="/assets/images/comparison/gradeus/gradeus1-cd3258afd241a0351e8a1b7671d643859e13c5a9d2a57d33bdae15b888f63b93.png"
        width={1572}
        height={866}
        alt="Grade.us pricing table"
      />
      <ContentTitle as={'h2'}>Managing Reviews</ContentTitle>
      <ContentText>
        With Reviewshake and Grade.us, you can monitor 85+ review sites for new reviews. However,
        while both platforms offer a white label client dashboard with your own branding and domain,
        Reviewshake also has a feature that allows agencies to resell the software to other clients.
      </ContentText>
      <ContentImage
        src="/assets/images/small-business/hero.png"
        width={1876}
        height={1144}
        alt="Reviewshake dashboard"
      />
      <ContentText>
        Larger companies can also manage different brands in one dashboard and switch between them
        with a single click.
      </ContentText>
      <ContentTitle as={'h2'}>Generating Reviews</ContentTitle>
      <ContentText>
        Both platforms give a simple solution to request and manage reviews. However, unlike
        Reviewshake, Grade.us doesn&aspo;t let customers leave video reviews, nor does it filter
        customers to re-engage those who meet the criteria. Reviewshake also gives you an overview
        of each customer&aspo;s timeline to easily manage your relationship with your customers.
      </ContentText>
      <ContentTitle as={'h2'}>Marketing Reviews</ContentTitle>
      <ContentText>
        Both Reviewshake and Grade.us have good review marketing features. Both platforms
        automatically share reviews on social media and also show your reviews on your website’s
        landing page.
      </ContentText>
      <ContentTitle as={'h2'}>Analyzing Reviews</ContentTitle>
      <ContentText>
        Reviewshake overtakes Grade.us because of its ability to analyze your reviews. While both
        platforms offer data aggregation, per-location reports, and send scheduled white label
        performance reports to clients, Reviewshake also creates reports that look at business
        locations or competitors side-by-side.
      </ContentText>
      <ContentImage
        src="/assets/images/comparison/gradeus/review-engine-3@2x-5534706011cc3eb2a6c660a71c61dbf3717ec1944ac65a34ea9b30618322450a.png"
        width={1428}
        height={1088}
        alt="Reviews analytics"
      />
      <ContentTitle as={'h2'}>Usability</ContentTitle>
      <ContentText last>
        After using both platforms, Reviewshake was a lot easier to use. The dashboard was
        intuitive, and it was easy to find what I was looking for. Plus, it offers in-depth guides
        that are easy to follow. Grade.us has a little more of a learning curve, and it wasn&aspo;t
        always simple to find the features.
      </ContentText>
    </>
  );
};

export default ComparisonContentGradeUs;
