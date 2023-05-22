import styled, { css } from 'styled-components';

export const StyledLi = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.1667;
  padding-left: 2.1rem;
  margin-bottom: 1.8rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 14px;
    height: 14px;
    background: url('/assets/icons/check-circle.svg') no-repeat center center;
    background-size: cover;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      font-size: 1.5rem;
      line-height: 2.1rem;
      padding-left: 1.7rem;
      &:before {
        width: 11px;
        height: 11px;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      font-size: 1.7rem;
      line-height: 2.3rem;
      padding-left: 2rem;

      &:before {
        width: 13px;
        height: 13px;
      }
    `)};
`;
