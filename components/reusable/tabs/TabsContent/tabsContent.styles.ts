import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export const StyledSlider = styled(Slider)`
  padding: 1.6rem 0.6rem !important;

  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0;
    width: 55px;
    height: 55px;
    border: 1px solid #e6e6ea;
    box-shadow: 4px 4px 20px rgba(0, 0, 9, 0.04);
    border-radius: 6px;
    cursor: pointer;
    z-index: 1;
  }

  .slick-prev {
    left: -40px;
    background: url('/assets/icons/arrow-left.svg') no-repeat center center #fff;
  }

  .slick-next {
    right: -40px;
    background: url('/assets/icons/arrow-right.svg') no-repeat center center #fff;
  }

  ${({ theme }) =>
    theme.mediaQueries('s')(css`
      padding: 5.6rem 2.6rem !important;
    `)};
`;
