import styled, { css } from 'styled-components';
import Decorator from '@/components/reusable/decorator/Decorator';

export const StyledDecorator1 = styled(Decorator)`
  &:before {
    top: -50px;
    left: 3%;
    width: 40px;
    height: 50px;
    
    ${({ theme }) =>
      theme.mediaQueries('md')(css`
        width: 55px;
        height: 70px;
        top: -70px;
      `)};
    
    ${({ theme }) =>
      theme.mediaQueries('lg')(css`
        width: 65px;
        height: 85px;
        top: -130px;
        left: -15px;
      `)};;
    
`;

export const StyledDecorator2 = styled(Decorator)`
  display: none;
  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      display: block;
      &:before {
        top: -150px;
        left: 50%;
        width: 83px;
        height: 121px;
      }
    `)};
`;
