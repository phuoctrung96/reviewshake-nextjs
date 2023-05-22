export type DropdownItemsType = {
  id: number;
  name: string;
  description: string;
  link: string;
  external?: boolean;
};

export type MenuItemsType = (
  | {
      id: number;
      title: string;
      className?: string;
      dropdown: DropdownItemsType[];
      href?: never;
      external?: never;
    }
  | {
      id: number;
      title: string;
      className?: string;
      href: string;
      external?: boolean;
      dropdown?: never;
    }
)[];

export const BENEFITS_DROPDOWN_ITEMS: DropdownItemsType[] = [
  {
    id: 1,
    name: 'Generate reviews',
    description: 'Generate, manage, market and analyze online reviews on 85+ review sites.',
    link: '/generate-reviews',
  },
  {
    id: 2,
    name: 'Manage reviews',
    description: 'Stay on top of your reviews from 85+ review sites',
    link: '/manage-reviews',
  },
  {
    id: 3,
    name: 'Market reviews',
    description: 'Build social proof to close more deals',
    link: '/market-reviews',
  },
  {
    id: 4,
    name: 'Analyze reviews',
    description: 'Track your performance',
    link: '/analyze-reviews',
  },
  {
    id: 5,
    name: 'Inbox',
    description: 'Build customer relationships with Inbox',
    link: '/inbox',
  },
];

export const SOLUTIONS_DROPDOWN_ITEMS: DropdownItemsType[] = [
  {
    id: 1,
    name: 'Small business',
    description: 'Generate, manage, market and analyze online reviews.',
    link: '/platform/small-business',
  },
  {
    id: 2,
    name: 'Agency',
    description: 'White label reputation management',
    link: '/platform/agencies',
  },
];

export const NAV_LINKS: MenuItemsType = [
  {
    id: 1,
    title: 'Solutions',
    dropdown: SOLUTIONS_DROPDOWN_ITEMS,
  },
  {
    id: 2,
    title: 'Benefits',
    dropdown: BENEFITS_DROPDOWN_ITEMS,
  },
  {
    id: 3,
    title: 'Pricing',
    href: '/pricing',
  },
  {
    id: 4,
    title: 'Changelog',
    href: 'https://headwayapp.co/reviewshake-changelog',
    className: 'whats-new',
    external: true,
  },
];

export const RIGHT_NAV_LINKS: MenuItemsType = [
  {
    id: 1,
    title: 'Login',
    href: 'https://app.reviewshake.com/login',
    external: true,
  },
  {
    id: 2,
    title: 'Try free',
    href: 'https://app.reviewshake.com/signup',
    external: true,
  },
];
