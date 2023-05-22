export type FooterLinkType = {
  href: string;
  title: string;
  external?: boolean;
};

export const SOLUTIONS_LINKS: FooterLinkType[] = [
  {
    href: '/platform/small-business',
    title: 'Small business',
  },
  {
    href: '/platform/agencies',
    title: 'Agencies',
  },
];

export const RESOURCES_LINKS: FooterLinkType[] = [
  {
    href: '/brand-audit',
    title: 'Free business scan',
  },
  {
    href: 'https://reviewshake.upvoty.com/',
    title: 'Roadmap',
    external: true,
  },
  {
    href: 'https://blog.reviewshake.com',
    title: 'Blog',
    external: true,
  },
];

export const COMPANY_LINKS: FooterLinkType[] = [
  {
    href: '/about-us',
    title: 'About Us',
  },
  {
    href: 'https://help.reviewshake.com/en/article/privacy-policy-7es144/',
    title: 'Privacy Policy',
    external: true,
  },
  {
    href: 'https://feedback.reviewshake.com/',
    title: 'Feedback',
    external: true,
  },
  {
    href: 'https://shake.io/contact-us',
    title: 'Contact us',
    external: true,
  },
];

export const HELP_LINKS: FooterLinkType[] = [
  {
    href: 'https://help.reviewshake.com/',
    title: 'Help',
    external: true,
  },
  {
    href: 'https://documenter.getpostman.com/view/2364352/reviewshake-api-public/7TNfBHp?version=latest',
    title: 'API',
    external: true,
  },
  {
    href: 'https://status.reviewshake.com/',
    title: 'Status',
    external: true,
  },
  {
    href: 'https://help.reviewshake.com/en/category/frequently-asked-questions-f9euhv/',
    title: 'FAQ',
    external: true,
  },
];

export const COMPARISON_LINKS: FooterLinkType[] = [
  {
    href: '/reviewshake-vs-gradeus',
    title: 'Grade.us',
  },
  {
    href: '/reviewshake-vs-testimonial',
    title: 'Testimonial',
  },
  {
    href: '/reviewshake-vs-birdeye',
    title: 'BirdEye',
  },
  {
    href: '/reviewshake-vs-podium',
    title: 'Podium',
  },
  {
    href: '/reviewshake-vs-gatherup',
    title: 'GatherUp',
  },
  {
    href: '/reviewshake-vs-local-clarity',
    title: 'LocalClarity',
  },
  {
    href: '/reviewshake-vs-repuso',
    title: 'Repuso',
  },
  {
    href: '/reviewshake-vs-provesource',
    title: 'ProveSource',
  },
];
