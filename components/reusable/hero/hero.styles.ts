import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import TitleSection from '@/components/reusable/title-section/TitleSection';
import Decorator from '@/components/reusable/decorator/Decorator';

export const StyledHero = styled.div<SpaceProps>`
  background-color: ${({ theme }) => theme.colors.lightBlueBg};

  > div {
    position: relative;
  }

  ${space}
`;

export const StyledTitleSection = styled(TitleSection)`
  h1 {
    font-size: 8.5vw;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      h1 {
        font-size: 4.2rem;
        span {
          display: block;
        }
      }
    `)}

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      h1 {
        font-size: 6.4rem;
      }
    `)}
`;

export const StyledHeroImageWrapper = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: -65vw;
  display: flex;
  justify-content: center;
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      bottom: -65%;
      transform: translateY(50%);
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      bottom: -120%;
    `)};
`;

export const StyledDecorator1 = styled(Decorator)`
  &:before {
    top: -50px;
    left: 3%;
    width: 40px;
    height: 50px;

    ${({ theme }) =>
      theme.mediaQueries('md')(css`
        left: 15%;
        width: 59px;
        height: 74px;
        top: -80px;
      `)};

    ${({ theme }) =>
      theme.mediaQueries('lg')(css`
        display: none;
      `)};
  }
`;

export const StyledDecorator2 = styled(Decorator)`
  &:before,
  &:after {
    display: none;
  }

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      &:before,
      &:after {
        display: block;
      }

      &:before {
        top: -110px;
        left: -6%;
        width: 100px;
        height: 150px;
      }

      &:after {
        top: -240px;
        right: -3%;
        width: 155px;
        height: 180px;
      }
    `)};
`;
