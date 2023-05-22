'use client';

import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { ThemeColorsType } from '@/styled/theme.styles';
import { HeadingTypes } from '@/types/general';

type HeadingBaseType = {
  as: HeadingTypes;
  styleAs?: HeadingTypes;
  color?: ThemeColorsType;
  children?: ReactNode;
};

const HeadingBase = ({
  as = 'h1',
  styleAs = as,
  color = 'black',
  ...props
}: HeadingBaseType & SpaceProps & LayoutProps & TypographyProps) => {
  return <Heading as={as} $styleAs={styleAs} $color={color} {...props} />;
};

const Heading = styled('h1').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['fontSize'].includes(prop),
})<{ $styleAs?: HeadingTypes; $color: ThemeColorsType } & SpaceProps & TypographyProps>`
  color: ${({ theme, $color }) => theme.colors[$color ?? 'black']};
  line-height: 1.35;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.green};
  }

  ${({ $styleAs }) => {
    return (
      ($styleAs === 'h1' &&
        css`
          font-size: 3.4rem;
          ${({ theme }) =>
            theme.mediaQueries('md')(
              css`
                font-size: 4.2rem;
              `
            )}
          ${({ theme }) =>
            theme.mediaQueries('lg')(
              css`
                font-size: 6.4rem;
                line-height: 1.1;
              `
            )}
        `) ||
      ($styleAs === 'h2' &&
        css`
          font-size: 3rem;
          margin-bottom: 1.4em;
          margin-left: auto;
          margin-right: auto;

          ${({ theme }) =>
            theme.mediaQueries('md')(
              css`
                font-size: 3.2rem;
                margin-bottom: 2.1875em;
              `
            )}
          ${({ theme }) =>
            theme.mediaQueries('lg')(
              css`
                font-size: 3.8rem;
              `
            )}
        `)
    );
  }};

  ${space}
  ${layout}
  ${typography}
`;

export default HeadingBase;
