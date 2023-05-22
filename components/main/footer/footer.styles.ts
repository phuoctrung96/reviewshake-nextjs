import styled, { css } from 'styled-components';
import { grid, flexbox } from 'styled-system';

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const StyledBottomFooter = styled.div`
  padding: 24px 0;
  p {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 24px;
    svg {
      margin: 0 0.6em;
    }
  }
  ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
    max-width: 420px;
    margin: 0 auto;
    li {
      a {
        color: ${({ theme }) => theme.colors.grayDarkText};
        transition: color 250ms ease-in-out;

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 17px 0;

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      p {
        flex: 0 1 50%;
        justify-content: flex-start;
        margin: 0;
      }
      ul {
        flex: 0 1 50%;
        justify-content: flex-end;
        li {
          margin-left: 1.875em;
        }
      }
    `)};
`;
export const StyledFooterMenu = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['order'].includes(prop),
})<{ $isComparison: boolean }>`
  margin-top: 60px;

  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 0;
  }

  ul {
    padding: 0;
    li {
      margin-bottom: 1.5em;
      a {
        justify-content: flex-start;
        color: ${({ theme }) => theme.colors.darkBlue};
        height: 100%;
        line-height: 1.4375;
      }
    }
  }

  ${({ $isComparison }) =>
    $isComparison &&
    css`
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          flex: 1 1 50%;
        }
      }
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          ul {
            li {
              flex: 1 1 100%;
            }
          }
        `)};
    `}

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      margin-top: 0;
    `)};

  ${grid}
  ${flexbox}
`;
