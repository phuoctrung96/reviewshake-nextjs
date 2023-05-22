import SmallBusiness from '@/components/reusable/icons/SmallBusiness';
import Agency from '@/components/reusable/icons/Agency';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Text from '@/components/reusable/text/Text';
import { SectionBackgroundColorsType } from '@/components/reusable/section/Section';
import theme from '@/styled/theme.styles';

export type PricingDataType = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  color: keyof typeof theme.colors;
  bgColor: keyof typeof theme.colors;
  monthlyPrice: number;
  monthlyPriceYearlyPayment: number;
  yearlyPrice: number;
  keyFeatures: string[];
  tryFreeLink: string;
};

export type PricingSelectOptionValues = 'smallBusiness' | 'agency';

const prices = {
  smallBusiness: {
    small: {
      monthlyPrice: 39,
      monthlyPriceYearlyPayment: 31,
      yearlyPrice: 374,
    },
    medium: {
      monthlyPrice: 79,
      monthlyPriceYearlyPayment: 63,
      yearlyPrice: 758,
    },
    large: {
      monthlyPrice: 99,
      monthlyPriceYearlyPayment: 79,
      yearlyPrice: 950,
    },
  },
  agency: {
    monthlyPrice: 199,
    monthlyPriceYearlyPayment: 159,
    yearlyPrice: 1910,
  },
  enterprise: {
    monthlyPrice: 899,
    monthlyPriceYearlyPayment: 719,
    yearlyPrice: 8630,
  },
};

export const pricingMainOptions = [
  { id: 'small-business', title: 'Small Business', icon: <SmallBusiness /> },
  { id: 'agency', title: 'Agency', icon: <Agency /> },
];

export const pricingData: PricingDataType[] = [
  {
    id: 'smallBusiness',
    title: 'Small Business',
    shortTitle: 'Small',
    description: 'Ideal for getting started',
    color: 'red',
    bgColor: 'redBg',
    ...prices.smallBusiness.small,
    keyFeatures: [
      '5 review profiles',
      '1 business location',
      '300 email & 30 SMS invites',
      '1 user',
      '5 video reviews',
    ],
    tryFreeLink: 'https://app.reviewshake.com/signup?plan=small',
  },
  {
    id: 'mediumBusiness',
    title: 'Medium Business',
    shortTitle: 'Medium',
    description: 'Ideal for growing companies',
    color: 'orange',
    bgColor: 'orangeBg',
    ...prices.smallBusiness.medium,
    keyFeatures: [
      'Unlimited review profiles',
      '1 business location',
      '1,000 email & 100 SMS invites',
      '3 users',
      '10 video reviews',
    ],
    tryFreeLink: 'https://app.reviewshake.com/signup?plan=medium',
  },
  {
    id: 'largeBusiness',
    title: 'Large Business',
    shortTitle: 'Large',
    description: 'Ideal for larger teams',
    color: 'blue',
    bgColor: 'blueBg',
    ...prices.smallBusiness.large,
    keyFeatures: [
      'Unlimited review profiles',
      '5 business locations',
      '5,000 email & SMS invites',
      '5 users',
      '20 video reviews',
    ],
    tryFreeLink: 'https://app.reviewshake.com/signup?plan=large',
  },
];

export const pricingAgencyData = {
  description: 'IDEAL FOR DIGITAL AGENCIES',
  ...prices.agency,
  keyFeatures: [
    '10 clients',
    '25 locations',
    '15 users',
    '30,000 email/month',
    '1,000 US SMS/month',
    'Video reviews',
    '100% white label',
  ],
  agencyFeatures: {
    'Review management': {
      'Monthly price': '$199',
      'Manage multiple clients and/or locations': true,
      'Resell to other agencies with white label': true,
      'Monitor 85+ review sites for new reviews': true,
      'Get notifications for new reviews': true,
      'Respond to Facebook and Google reviews from one dashboard': true,
      'White label client dashboard with you own brand and domain': true,
      'User accounts for staff and/or client access': true,
      'Fully fledged API for programmatic management': true,
    },
    'Review generation': {
      'Generate reviews on 85+ sites': true,
      'Video reviews': true,
      'Collect reviews via optimized review generation landing pages': true,
      'Segment positive and negative feedback to pre-empt negative reviews': true,
      'Setup custom drip campaigns with email and text messages': true,
      "Automatically remind customers who haven't left a review": true,
      'Customer timeline gives you an overview of events for each customer': true,
      'Filter customers to re-engage customers who meet criteria': true,
      'Personalized sender email address and templates': true,
      'Upload campaign recipients in bulk via CSV': true,
      'Provide access to simple forms for customer opt-in': true,
      'Measure performance throughout the funnel with tracking': true,
      'Set per-client email and text message limits': true,
      'Create default campaigns to scale easily': true,
      'Add customers from 1,300+ apps via Zapier (and API)': true,
    },
    'Review marketing': {
      'Automatically share positive reviews to social media': true,
      'Show off your latest reviews to your website': true,
      'Add a review generation snippet to your email signature': true,
      'Enable SEO-friendly rich-snippet to show stars in search results': true,
      'White label widgets and plugins completely': true,
    },
    'Review analysis & reporting': {
      'Create aggregate and per-location reports for large businesses': true,
      'Compare locations and/or competitors with side-by-side reporting': true,
      'Track star rating, review count, invitations and sentiment over time': true,
      'Send scheduled white label performance reports to clients': true,
      'Analyze reviewer clicks, click-throughs and conversions through the review funnel': true,
      'Generate custom reports by accessing data via API': true,
    },
  },
  content: [
    {
      id: 'seatOverages',
      backgroundColor: 'gray' as SectionBackgroundColorsType,
      title: 'Seat overages',
      description:
        'We love seeing our agencies grow their business with us, and are happy to offer volume discounts when this happens. Each seat includes a user account, 1,000 email and 200 US SMS per month.',
      image: {
        src: 'seat-overages.svg',
        alt: 'Pricing per seat overview',
        width: 1181,
        height: 166,
      },
    },
    {
      backgroundColor: 'lightBlueBg' as SectionBackgroundColorsType,
      title: 'Inbox',
      description:
        'Using our newest add-on, Inbox, your clients can engage in 2-way SMS conversations with their customers. Engaging customers early results in boosting customer loyalty, increased reputation and revenue. Each client that has the feature activated will have their own dedicated phone number for sending and receiving SMS.',
      image: {
        src: 'inbox.svg',
        alt: '2-way SMS conversations pricing table',
        width: 1181,
        height: 166,
      },
    },
  ],
  tryFreeLink: 'https://app.reviewshake.com/signup?plan=agency',
};

export const pricingEnterpriseData = {
  description: 'IDEAL FOR ENTERPRISE BUSINESSES',
  ...prices.enterprise,
  keyFeatures: [
    'Customer success manager',
    'Custom-trained ML models',
    'Insights per business area',
    'Customer verbatim analysis',
    'Advanced data visualization',
    'Competitor reporting',
  ],
  tryFreeLink: 'https://calendly.com/reviewshake-product/30min',
};

type ComparePlansDataType = {
  id: PricingSelectOptionValues;
  manageReviews: ManageReviewsType;
  generateReviews: GenerateReviesType;
  marketReviews: MarketReviewsType;
  analyzeReviews: AnalyzeReviewsType;
};

type ManageReviewsType = {
  monthlyPrice: number;
  reviews: string;
  reviewProfiles: string;
  notifications: boolean;
  respond: boolean;
  userAccounts: string;
  videoReviews: string;
  manageMultipleLocations: boolean;
  customDomain: boolean;
  API: boolean;
};

type GenerateReviesType = {
  emailInvites: string;
  smsInvites: string;
  csvCustomerUpload: boolean;
  templateLibrary: boolean;
  landingPages: boolean;
  customerTimeline: boolean;
  advancedFiltering: boolean;
  reminders: boolean;
  personalizedSenderAddress: boolean;
  campaigns: boolean;
  zapierIntegrations: boolean;
};

type MarketReviewsType = {
  embeddableWidgets: boolean;
  emailSignatureWidgets: boolean;
  richSnippets: boolean;
  automatedSocialSharing: boolean;
};

type AnalyzeReviewsType = {
  scheduledReports: boolean;
  analytics: boolean;
  competitorIntelligence: boolean;
  sentimentAnalysis: boolean;
};

export type PricingOptionType = { [key: string]: (string | number | boolean)[] };

export const manageReviewsData: PricingOptionType = {
  'Monthly pricing': [
    `$${prices.smallBusiness.small.monthlyPrice}`,
    `$${prices.smallBusiness.medium.monthlyPrice}`,
    `$${prices.smallBusiness.large.monthlyPrice}`,
  ],
  Reviews: ['Unlimited', 'Unlimited', 'Unlimited'],
  'Review profiles': ['5', 'Unlimited', 'Unlimited'],
  Notifications: [true, true, true],
  Respond: [true, true, true],
  'User accounts': ['1', '3', '5'],
  'Video reviews': ['5', '10', '20'],
  'Manage multiple locations': [false, false, '5'],
  'Custom domain': [false, false, true],
  API: [false, false, true],
};

export const generateReviewsData: PricingOptionType = {
  'Email invites': ['300', '1,000', '5,000'],
  'SMS invites': ['30', '100', '500'],
  'CSV customer upload': [true, true, true],
  'Template library': [true, true, true],
  'Landing pages': [true, true, true],
  'Customer timeline': [true, true, true],
  'Advanced filtering': [false, true, true],
  Reminders: [false, true, true],
  'Personalized sender address': [false, true, true],
  Campaigns: [false, true, true],
  'Zapier integrations': [false, true, true],
};

export const marketReviewsData: PricingOptionType = {
  'Embeddable widgets': [true, true, true],
  'Email signature widgets': [true, true, true],
  'Rich snippets': [false, true, true],
  'Automated social sharing': [false, true, true],
};

export const analyzeReviewsData: PricingOptionType = {
  'Scheduled reports': [true, true, true],
  Analytics: [false, true, true],
  'Competitor intelligence': [false, true, true],
  'Sentiment analysis': [false, false, true],
};

export const comparePlansData = [
  {
    id: 'smallBusiness',
    shortTitle: 'Small',
    tryFreeLink: 'https://app.reviewshake.com/signup?plan=small',
  },
  {
    id: 'agency',
    shortTitle: 'Medium',
    tryFreeLink: 'https://app.reviewshake.com/signup?plan=medium',
  },
  {
    id: 'enterprise',
    shortTitle: 'Large',
    tryFreeLink: 'https://app.reviewshake.com/signup?plan=large',
  },
];

export const faqSmallBusinessData = [
  {
    title: 'Which review sites do you work with?',
    content: (
      <Text fontSize="1.8rem" lineHeight="2.8rem">
        We currently work with{' '}
        <BaseLink
          href="https://help.reviewshake.com/en/article/which-review-sites-do-you-support-1nu2a0/"
          external
          viewType="text"
        >
          80+ review sites
        </BaseLink>
        .
      </Text>
    ),
  },
  {
    title: 'Can I buy additional email and SMS credits?',
    content:
      'Yes! Email credits are available at $3 per thousand credits, and SMS credits are $15 per thousand credits (US/Canada). Get in touch for pricing in other countries.',
  },
  {
    title: 'Can I add more locations and users to my plan?',
    content:
      'You can manage reviews for 5 locations on the Large plan - beyond that, we charge $15/month per location and can offer volume discounts.<br />Similarly, you can add more users for $10/month per user.',
  },
  {
    title: 'What is the time commitment?',
    content:
      "We don't believe in lock-ins, and thus have no setup fees, our contracts are all month-to-month and you can cancel at any time. With that said, you do have the option to pay yearly to get a 20% discount.",
  },
  {
    title: 'Do you support SMS in my country?',
    content: 'We support SMS globally, please get in touch to inquire about your specific case.',
  },
  {
    title: 'What kind of support can I expect?',
    content:
      'We have a 100% satisfaction rating on our support from the past 3 months, with replies within 24 hours during week days.',
  },
];

export const faqAgencyDataPricing = [
  {
    title: 'Is there a fee for the white label?',
    content: `We do not charge fees for the white label (it's ${new Date().getFullYear()} after all). That is included in the package.`,
  },
  {
    title: 'What happens if my account grows?',
    content: (
      <Text fontSize="1.8rem" lineHeight="2.8rem">
        Our agency overage fees are available in the seat overages section above.
      </Text>
    ),
  },
  {
    title: 'Which review sites do you work with?',
    content: (
      <Text fontSize="1.8rem" lineHeight="2.8rem">
        We currently work with{' '}
        <BaseLink
          href="https://help.reviewshake.com/en/article/which-review-sites-do-you-support-1nu2a0/"
          external
          viewType="text"
        >
          85+ review sites
        </BaseLink>{' '}
        .
      </Text>
    ),
  },
  {
    title: 'What do you have planned product-wise?',
    content: (
      <Text fontSize="1.8rem" lineHeight="2.8rem">
        We constantly improve Reviewshake, and future releases are highly influenced by our{' '}
        <BaseLink href="https://feedback.reviewshake.com/" external viewType="text">
          community feedback
        </BaseLink>{' '}
        .
      </Text>
    ),
  },
  {
    title: 'What is the time commitment?',
    content:
      "We don't have setup fees, our contracts are all month-to-month and you can cancel at any time.",
  },
  {
    title: 'Do you support SMS in my country?',
    content: 'We support SMS globally, please get in touch to inquire about your specific case.',
  },
  {
    title: 'What kind of support can I expect?',
    content:
      'We have a 100% satisfaction rating on our support from the past 3 months, with replies within 24 hours during week days.',
  },
];

export const faqAgencyData = [
  ...faqAgencyDataPricing.slice(0, 1),
  {
    title: 'What happens if my account grows?',
    content: (
      <Text fontSize="1.8rem" lineHeight="2.8rem">
        Overage fees are available on the{' '}
        <BaseLink href="/pricing/agency#seatOverages" viewType="text">
          agency pricing
        </BaseLink>{' '}
        page
      </Text>
    ),
  },
  ...faqAgencyDataPricing.slice(2),
];

export const faqEnterpriseData = [
  {
    title: 'Who is the Enterprise plan for?',
    content:
      'The Enterprise plan is perfect for companies with a large amount of reviews - typically this is greater than 50,000 reviews. At this scale, the scale of insights available in the reviews makes the usage of machine learning methodologies a good fit.',
  },
  {
    title: 'How does this work?',
    content:
      'We all know that reviews contain a vast amount of information, yet most companies analyze just the average star rating of those reviews. The Enterprise package goes a step further to analyze the actual contents of a review, to help understand how a business is performing across different business areas based on natural language processing and machine learning.',
  },
  {
    title: 'What industries does this work for?',
    content:
      'Our machine learning models are all trained in-house for each specific use case, and we do not use generic off the shelf models. As such, we can fit most use cases.',
  },
  {
    title: 'What languages do you support?',
    content:
      'We currently support these 20 languages: Arabic, Chinese (Simplified and Traditional), Czech, Dutch, English, French, German, Indonesian, Italian, Japanese, Korean, Polish, Portuguese (Brazilian and Continental), Romanian, Russian, Spanish, Swedish, Turkish and Vietnamese.',
  },
  {
    title: 'How much does this cost?',
    content:
      "While it's difficult to provide an estimate without understanding your use case, our Enterprise pricing starts at $899/month. Get in touch with us to get a specific quote for your needs.",
  },
];
