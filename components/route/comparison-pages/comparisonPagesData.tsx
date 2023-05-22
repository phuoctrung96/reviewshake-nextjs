import { ImageType } from '@/types/general';

export type ComparisonPageType = {
  slug: string;
  companyName: string;
  title: string;
  comparedCompanyLogo: ImageType;
  reviewshakePros: string[];
  reviewshakeCons: string[];
  comparedCompanyPros: string[];
  comparedCompanyCons: string[];
  reviewshakeStartingPlanPrice: number;
  comparedCompanyStartingPlanPrice: number | string;
  reviewshakeComparisonFeatures: ComparisonFeaturesType;
  comparedCompanyComparisonFeatures: ComparisonFeaturesType;
};

export type ComparisonFeaturesType = {
  'Manage reviews': SingleComparisonType[];
  'Generate reviews': SingleComparisonType[];
  'Market reviews': SingleComparisonType[];
  'Analyze reviews': SingleComparisonType[];
};

type SingleComparisonType = {
  title: string;
  value: boolean | string;
};

const companyStartingPlanPrice = {
  reviewshakeStartingPlanPrice: 31,
  gradeUsStartingPlanPrice: 110,
  testimonialStartingPlanPrice: 50,
  podiumStartingPlanPrice: 249,
  gatherUpStartingPlanPrice: 99,
  localClarityStartingPlanPrice: 10,
  repusoStartingPlanPrice: 9,
  proveSourceStartingPlanPrice: 'Free plans for businesses with <1,000 visitors',
};

const reviewshakePros = [
  'Easy to use',
  'Comprehensive reputation-management features',
  'Monitors, markets, and analyzes customer reviews',
  'Affordable plans',
  'Easy-to-follow guides for its features',
];

const reviewshakeCons = ['Advanced features could be overwhelming for beginners'];

export const COMPARISON_PAGES: ComparisonPageType[] = [
  {
    slug: `reviewshake-vs-gradeus`,
    companyName: 'Grade.us',
    title: 'Reviewshake vs Grade.us',
    comparedCompanyLogo: {
      src: 'grade-us.png',
      width: 158,
      height: 40,
      alt: 'Grade.us Logo',
    },
    reviewshakePros,
    reviewshakeCons,
    comparedCompanyPros: [
      'Good review marketing features',
      'Strong reputation-management features',
    ],
    comparedCompanyCons: ['No video reviews', 'Expensive plans', 'Less review analyzing features'],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.gradeUsStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        { title: 'Multiple spaces in one account', value: true },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        { title: 'User accounts for staff and/or client access', value: true },
        { title: 'Ability to respond to reviews for Google and Facebook', value: true },
        { title: '100% white label platform to sell to clients', value: true },
        { title: 'White label dashboard with your own brand and custom domain', value: true },
        { title: 'Inbox to let you communicate with customers via two-way SMS', value: true },
        { title: 'Inbox that lets you communicate with customers via two-way SMS', value: true },
        { title: 'Fully fledged API for programmatic management', value: true },
        { title: 'Get notifications for new reviews', value: true },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Upload campaign recipients in bulk via CSV', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Set per-client email and text message limits', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Display your latest reviews to your website', value: true },
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Create aggregate and per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Generate custom reports by accessing data via API', value: true },
        { title: 'Send scheduled white label performance reports to clients', value: true },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: false,
        },
        { title: 'Multiple spaces in one account', value: true },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        { title: 'User accounts for staff and/or client access', value: true },
        { title: 'Ability to respond to reviews for Google and Facebook', value: true },
        { title: '100% white label platform to sell to clients', value: false },
        { title: 'White label dashboard with your own brand and custom domain', value: true },
        { title: 'Inbox to let you communicate with customers via two-way SMS', value: true },
        { title: 'Inbox that lets you communicate with customers via two-way SMS', value: false },
        { title: 'Fully fledged API for programmatic management', value: true },
        { title: 'Get notifications for new reviews', value: true },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: false },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Upload campaign recipients in bulk via CSV', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Set per-client email and text message limits', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Display your latest reviews to your website', value: true },
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: false },
        { title: 'Create aggregate and per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Generate custom reports by accessing data via API', value: true },
        { title: 'Send scheduled white label performance reports to clients', value: true },
      ],
    },
  },
  {
    slug: `reviewshake-vs-testimonial`,
    companyName: 'Testimonial',
    title: 'Reviewshake vs Testimonial',
    comparedCompanyLogo: {
      src: 'testimonial.svg',
      width: 487,
      height: 120,
      alt: "Testimonial's logo",
    },
    reviewshakePros,
    reviewshakeCons,
    comparedCompanyPros: ['Easy to use', 'Simple solution to getting testimonials from clients'],
    comparedCompanyCons: [
      'No reputation management features',
      'Cheaper plans are very limited',
      'Requires more manual work to manage reviews',
    ],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.testimonialStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Video reviews/testimonials',
          value: true,
        },
        {
          title: 'Written reviews/testimonials',
          value: true,
        },
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        { title: 'Multiple spaces in one account', value: true },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        { title: 'User accounts for staff and/or client access', value: true },
        { title: 'Ability to respond to reviews for Google and Facebook', value: true },
        { title: '100% white label platform to sell to clients', value: true },
        { title: 'White label dashboard with your own brand and custom domain', value: true },
        { title: 'Inbox to let you communicate with customers via two-way SMS', value: true },
      ],
      'Generate reviews': [
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Video reviews/testimonials',
          value: true,
        },
        {
          title: 'Written reviews/testimonials',
          value: true,
        },
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: false,
        },
        { title: 'Multiple spaces in one account', value: true },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: false,
        },
        { title: 'User accounts for staff and/or client access', value: true },
        { title: 'Ability to respond to reviews for Google and Facebook', value: false },
        { title: '100% white label platform to sell to clients', value: false },
        { title: 'White label dashboard with your own brand and custom domain', value: true },
        { title: 'Inbox to let you communicate with customers via two-way SMS', value: false },
      ],
      'Generate reviews': [
        { title: 'Generates reviews from 85+ websites', value: false },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: false },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Automatically share positive reviews to social media', value: false },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: false },
        { title: 'Compare side-by-side to competitors', value: false },
      ],
    },
  },
  {
    slug: `reviewshake-vs-birdeye`,
    companyName: 'Birdeye',
    title: 'Reviewshake vs Birdeye',
    comparedCompanyLogo: {
      src: 'birdeye.svg',
      width: 400,
      height: 98,
      alt: "Birdeye's logo",
    },
    reviewshakePros,
    reviewshakeCons,
    comparedCompanyPros: ['Lots of features to market reviews', 'Good review analyzing reports'],
    comparedCompanyCons: ['Cannot generate video reviews', 'Expensive plans'],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: 'Plan price not provided',
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'View positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'User accounts for staff and/or client access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'Drip campaigns to remind customers to leave a review',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox that lets you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Text reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Set per-client email and text message limits', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Display your best reviews on your website', value: true },
        { title: 'Star ratings in Google search results', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Generate custom reports by accessing data via API', value: true },
        { title: 'Send white label performance reports to clients', value: true },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'View positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'User accounts for staff and/or client access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'Drip campaigns to remind customers to leave a review',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox that lets you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: false },
        { title: 'Text reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Set per-client email and text message limits', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Display your best reviews on your website', value: true },
        { title: 'Star ratings in Google search results', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Generate custom reports by accessing data via API', value: true },
        { title: 'Send white label performance reports to clients', value: true },
      ],
    },
  },
  {
    slug: `reviewshake-vs-podium`,
    companyName: 'Podium',
    title: 'Reviewshake vs Podium',
    comparedCompanyLogo: {
      src: 'podium.svg',
      width: 3257,
      height: 699,
      alt: "Podium's logo",
    },
    reviewshakePros: [
      'In-depth tutorials to help you understand features',
      'Can generate text and video reviews',
      'Monitors, markets, and analyzes customer',
      'Affordable plans',
    ],
    reviewshakeCons: [
      'A lot of tools that require learning for beginners in reputation management',
    ],
    comparedCompanyPros: ['Comprehensive CRM platform', 'Easy to communicate with customers'],
    comparedCompanyCons: ['Few marketing and analytical tools', 'Expensive plans'],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.podiumStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'Customer complaint tracking',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Create aggregate and per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        { title: 'Send scheduled white label performance reports to clients', value: true },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Performance metrics', value: true },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: false,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: false,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: false,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'Customer complaint tracking',
          value: false,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: false },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: false },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: false },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: false },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: false },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: false },
        { title: 'Compare side-by-side to competitors', value: false },
        { title: 'Create aggregate and per-location reports for large businesses', value: false },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: false,
        },
        { title: 'Send scheduled white label performance reports to clients', value: false },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: false,
        },
        { title: 'Performance metrics', value: false },
      ],
    },
  },
  {
    slug: `reviewshake-vs-gatherup`,
    companyName: 'GatherUp',
    title: 'Reviewshake vs GatherUp',
    comparedCompanyLogo: {
      src: 'gatherup.svg',
      width: 683,
      height: 157,
      alt: "GatherUp's logo",
    },
    reviewshakePros: [
      'In-depth tutorials to help you understand features',
      'Can generate text and video reviews',
      'Monitors, markets, and analyzes customer',
      'Affordable plans',
    ],
    reviewshakeCons: [
      'A lot of tools that require learning for beginners in reputation management',
    ],
    comparedCompanyPros: ['Lots of features to market reviews', 'Good review analyzing reports'],
    comparedCompanyCons: ['Cannot generate video reviews', 'Expensive plans'],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.gatherUpStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Split up positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'User accounts for staff and/or client access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'Drip campaigns to automatically remind customers to leave a review',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox that lets you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Set per-client email and text message limits', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Display your latest reviews to your website', value: true },
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Generate custom reports by accessing data via API', value: true },
        { title: 'Send white label performance reports to clients', value: true },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Split up positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'User accounts for staff and/or client access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'Drip campaigns to automatically remind customers to leave a review',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox that lets you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: false },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Add customers from 1,300+ apps via Zapier (and API)', value: true },
        { title: 'Collect reviews via optimized review generation landing pages', value: true },
        { title: 'Provide access to simple forms for customer opt-in', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        { title: 'Set per-client email and text message limits', value: true },
        { title: 'Create default campaigns to scale easily', value: true },
      ],
      'Market reviews': [
        { title: 'Display your latest reviews to your website', value: true },
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: false },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title:
            'Analyze reviewer clicks, click-throughs and conversions through the review funnel',
          value: true,
        },
        { title: 'Generate custom reports by accessing data via API', value: true },
        { title: 'Send white label performance reports to clients', value: true },
      ],
    },
  },
  {
    slug: `reviewshake-vs-local-clarity`,
    companyName: 'Local Clarity',
    title: 'Reviewshake vs Local Clarity',
    comparedCompanyLogo: {
      src: 'localclarity.svg',
      width: 1336,
      height: 239,
      alt: "Local Clarity's logo",
    },
    reviewshakePros: [
      'In-depth tutorials to help you understand features',
      'Can generate text and video reviews',
      'Monitors, markets, and analyzes customer',
    ],
    reviewshakeCons: [
      'A lot of tools that require learning for beginners in reputation management',
    ],
    comparedCompanyPros: [
      'Comprehensive review analyzing tools',
      'Good features for managing your reviews',
    ],
    comparedCompanyCons: [
      'Very few review generation tools',
      "Doesn't market your reviews outside of Google",
      'White label platform only for agencies with 20+ client locations',
    ],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.localClarityStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: 'White label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'Customer complaint tracking',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title: 'Send scheduled white label performance reports to clients',
          value: true,
        },
        {
          title: 'Analyze reviewer clicks, click-throughs and conversions',
          value: true,
        },
        {
          title: 'Performance metrics',
          value: true,
        },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: false,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: 'White label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: 'Only for agencies with 20+ client locations',
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'Customer complaint tracking',
          value: false,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: false },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Personalized sender email address and templates', value: false },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: false },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: false },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: false },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title: 'Send scheduled white label performance reports to clients',
          value: true,
        },
        {
          title: 'Analyze reviewer clicks, click-throughs and conversions',
          value: true,
        },
        {
          title: 'Performance metrics',
          value: true,
        },
      ],
    },
  },
  {
    slug: `reviewshake-vs-repuso`,
    companyName: 'Repuso',
    title: 'Reviewshake vs Repuso',
    comparedCompanyLogo: {
      src: 'repuso.png',
      width: 960,
      height: 420,
      alt: "Repuso's logo",
    },
    reviewshakePros: [
      'Organizes your reviews for simple reputation management',
      'Shares positive reviews on social media and your website',
      'Detailed review reports',
    ],
    reviewshakeCons: [
      'A lot of tools that require learning for beginners in reputation management',
    ],
    comparedCompanyPros: [
      'Collects all reviews from social media',
      'Easy solution to showcase and market your reviews on your website',
    ],
    comparedCompanyCons: [
      'Cheap plans are very basic and require you to buy add-ons',
      'No review analyzing tools',
      'Limited reputation management tools',
    ],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.repusoStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'Customer complaint tracking',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title: 'Send scheduled white label performance reports to clients',
          value: true,
        },
        {
          title: 'Analyze reviewer clicks, click-throughs and conversions',
          value: true,
        },
        {
          title: 'Performance metrics',
          value: true,
        },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: false,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: false,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: false,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: false,
        },
        {
          title: 'Customer complaint tracking',
          value: false,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Personalized sender email address and templates', value: false },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: false },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: false },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: false },
        { title: 'Compare side-by-side to competitors', value: false },
        { title: 'Compare side-by-side per-location reports for large businesses', value: false },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: false,
        },
        {
          title: 'Send scheduled white label performance reports to clients',
          value: false,
        },
        {
          title: 'Analyze reviewer clicks, click-throughs and conversions',
          value: false,
        },
        {
          title: 'Performance metrics',
          value: false,
        },
      ],
    },
  },
  {
    slug: `reviewshake-vs-provesource`,
    companyName: 'ProveSource',
    title: 'Reviewshake vs ProveSource',
    comparedCompanyLogo: {
      src: 'prove-source.svg',
      width: 1938,
      height: 520,
      alt: "ProveSource's logo",
    },
    reviewshakePros: [
      'In-depth tutorials to help you understand features',
      'Can generate text and video reviews',
      'Monitors, markets, and analyzes customer',
      'Affordable plans',
    ],
    reviewshakeCons: [
      'A lot of tools that require learning for beginners in reputation management',
    ],
    comparedCompanyPros: [
      'Great for marketing through social proof',
      'Easy integration',
      'Affordable plans',
    ],
    comparedCompanyCons: [
      "Can't communicate directly with customers",
      "Doesn't help you generate and monitor reviews",
    ],
    reviewshakeStartingPlanPrice: companyStartingPlanPrice.reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice: companyStartingPlanPrice.proveSourceStartingPlanPrice,
    reviewshakeComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: true,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: true,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: true,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: true,
        },
        {
          title: 'Customisable widgets',
          value: true,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: true,
        },
        {
          title: 'Customer complaint tracking',
          value: true,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: true },
        { title: 'Written reviews', value: true },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: true },
        { title: 'Personalized sender email address and templates', value: true },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: true,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: true },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: true },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: true },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: true },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: true },
        { title: 'Compare side-by-side to competitors', value: true },
        { title: 'Compare side-by-side per-location reports for large businesses', value: true },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: true,
        },
        {
          title: 'Send scheduled white label performance reports to clients',
          value: true,
        },
        {
          title: 'Analyze reviewer clicks, click-throughs and conversions',
          value: true,
        },
        {
          title: 'Performance metrics',
          value: true,
        },
      ],
    },
    comparedCompanyComparisonFeatures: {
      'Manage reviews': [
        {
          title: 'Segment positive and negative feedback to pre-empt negative reviews',
          value: false,
        },
        {
          title: 'Multiple spaces in one account',
          value: true,
        },
        {
          title: "Drip campaigns to automatically remind customers who haven't left a review",
          value: false,
        },
        {
          title: 'User accounts for staff access',
          value: true,
        },
        {
          title: 'Ability to respond to reviews for Google and Facebook',
          value: false,
        },
        {
          title: '100% white label platform to sell to clients',
          value: true,
        },
        {
          title: 'White label dashboard with your own brand and custom domain',
          value: true,
        },
        {
          title: 'Inbox to let you communicate with customers via two-way SMS',
          value: false,
        },
        {
          title: 'Customisable widgets',
          value: false,
        },
        {
          title: 'Fully fledged API for programmatic management',
          value: true,
        },
        {
          title: 'Get notifications for new reviews',
          value: false,
        },
        {
          title: 'Customer complaint tracking',
          value: false,
        },
      ],
      'Generate reviews': [
        { title: 'Video reviews', value: false },
        { title: 'Written reviews', value: false },
        { title: 'Generates reviews from 85+ websites', value: true },
        { title: 'Filter customers to re-engage those likely to return', value: false },
        { title: 'Personalized sender email address and templates', value: false },
        {
          title: 'Customer timeline to give you an overview of events for each customer',
          value: false,
        },
        { title: 'Measure performance throughout the funnel with tracking', value: false },
      ],
      'Market reviews': [
        { title: 'Show star ratings in Google search results', value: false },
        { title: 'Show off your latest reviews to your website', value: true },
        { title: 'Add a review generation snippet to your email signature', value: true },
        { title: 'Automatically share positive reviews to social media', value: false },
        { title: 'Enable SEO-friendly rich-snippet to show stars in search results', value: false },
      ],
      'Analyze reviews': [
        { title: 'Advanced reporting across 85+ review sites', value: false },
        { title: 'Compare side-by-side to competitors', value: false },
        { title: 'Compare side-by-side per-location reports for large businesses', value: false },
        {
          title: 'Track star ratings, review count, invitations and sentiment over time',
          value: false,
        },
        {
          title: 'Send scheduled white label performance reports to clients',
          value: true,
        },
        {
          title: 'Analyze reviewer clicks, click-throughs and conversions',
          value: true,
        },
        {
          title: 'Performance metrics',
          value: true,
        },
      ],
    },
  },
];
