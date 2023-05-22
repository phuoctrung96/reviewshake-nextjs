import { ReactNode } from 'react';
import { StyledLink } from './baseLink.styles';
import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';
import ArrowIcon from '@/components/reusable/icons/Arrow';
import ExternalLink from '@/components/reusable/icons/ExternalLink';

export type BaseLinkProps = {
  children: ReactNode;
  href: string;
  linkIcon?: LinkIcon;
  handleClick?: () => void;
  external?: boolean;
  viewType?: LinkViewType;
  className?: string;
};

export type LinkViewType = 'primary' | 'secondary' | 'alternative' | 'menu' | 'text';

type LinkIcon = keyof typeof LinkIcons;

const LinkIcons = {
  arrow: <ArrowIcon />,
  external: <ExternalLink />,
};

const BaseLink = ({
  href,
  linkIcon,
  className = '',
  children,
  handleClick,
  external = false,
  viewType = 'primary',
  ...props
}: BaseLinkProps & SpaceProps & TypographyProps & LayoutProps) => {
  return (
    <StyledLink
      href={href}
      className={className}
      $viewType={viewType}
      onClick={handleClick}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
      {linkIcon && LinkIcons[linkIcon]}
    </StyledLink>
  );
};

export default BaseLink;
