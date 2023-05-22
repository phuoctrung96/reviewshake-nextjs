import styled, { css } from 'styled-components';

export const StyledImgWr = styled.div<{ isEven: boolean; index: number }>`
  margin: -2rem;
  picture {
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    filter: ${({ index }) => index !== 0 && css`drop-shadow(4px 4px 32px rgba(0, 0, 9, 0.09))`};
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      position: relative;
      width: 100%;
      height: 100%;

      picture {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        height: 120%;
        max-height: 480px;
        max-width: unset;
        width: 120%;
        top: 50%;
        bottom: 50%;
        transform: translateY(-50%);
      }

      img {
        height: 100%;
        max-width: unset;
        width: auto;
      }
    `)};

  ${({ index }) =>
    index === 0 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          picture {
            height: 80%;
          }
        `)}
      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          picture {
            height: 100%;
          }
        `)}
    `}

  ${({ isEven }) =>
    isEven
      ? css`
          ${({ theme }) =>
            theme.mediaQueries('md')(css`
              picture {
                left: 3rem;
                justify-content: flex-start;
              }
            `)};
        `
      : css`
          ${({ theme }) =>
            theme.mediaQueries('md')(css`
              picture {
                right: 3rem;
              }
            `)};
        `}
`;
