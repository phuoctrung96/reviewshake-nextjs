import { HTMLAttributes } from 'react';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type DivElementType = HTMLAttributes<HTMLDivElement>;

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PaginationType = {
  diff: string;
  page_number: number;
  per_page: number;
  total_pages: number;
};
