import Link from 'next/link';
import styled, { css } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { LinkViewType } from './BaseLink';
import theme from '@/styled/theme.styles';

export const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['maxWidth', 'fontSize', 'display'].includes(prop),
})<{ $viewType: LinkViewType } & SpaceProps & TypographyProps & LayoutProps>`
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0 1.8889em;
  height: 2.8333em;
  line-height: 2.7222em;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  transition: all 250ms ease-in-out, border-color 250ms ease-in-out, stroke;
  width: 100%;

  svg {
    margin-left: 0.5em;
    path {
      transition: stroke 250ms ease-in-out;
    }
  }

  ${(props) =>
    props.$viewType === 'primary' && {
      color: theme.colors.black,
      backgroundColor: theme.colors.green,
      borderColor: theme.colors.green,
      '&:hover, &:focus': {
        color: '#fff',
        boxShadow: '2px 2px 14px hsl(0deg 0% 100% / 25%)',
      },
    }}

  ${(props) =>
    props.$viewType === 'secondary' && {
      color: theme.colors.green,
      borderColor: theme.colors.green,

      '&:hover, &:focus': {
        color: theme.colors.black,
        borderColor: theme.colors.black,
        boxShadow: '2px 2px 14px hsl(0deg 0% 100% / 25%)',
      },
    }}

  ${(props) =>
    props.$viewType === 'alternative' && {
      color: theme.colors.blue,
      borderColor: theme.colors.blue,
      fontWeight: 500,
      maxWidth: 'unset',

      '&:hover, &:focus': {
        color: theme.colors.black,
        borderColor: theme.colors.black,
        boxShadow: '2px 2px 14px hsl(0deg 0% 100% / 25%)',
        'svg path': {
          stroke: theme.colors.black,
        },
      },

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        maxWidth: '350px',
      },
    }}
  
  ${(props) =>
    props.$viewType === 'menu' && {
      color: theme.colors.black,
      border: 'none',
      padding: 0,
      fontWeight: 500,

      '&:hover, &:focus': {
        color: theme.colors.green,
        'svg path': {
          stroke: theme.colors.green,
        },
      },
    }}
  
  ${(props) =>
    props.$viewType === 'text' && {
      display: 'inline',
      color: theme.colors.blue,
      border: 'none',
      padding: 0,
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',

      '&:hover, &:focus': {
        color: theme.colors.black,
      },
    }}


${({ theme }) =>
    theme.mediaQueries('lg')(css`
      width: max-content;
    `)}

  ${space}
  ${typography}
  ${layout}
`;

StyledLink.defaultProps = {
  maxWidth: { _: '350px', lg: 'unset' },
};
