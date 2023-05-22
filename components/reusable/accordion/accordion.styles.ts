import styled, { css } from 'styled-components';
import { Accordion } from 'react-accessible-accordion';

export const StyledAccordion = styled(Accordion)`
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1fr;
  align-items: start;

  .accordion__item {
    border: 1px solid ${({ theme }) => theme.colors.green};
    border-radius: 6px;
    overflow: hidden;
    position: relative;

    svg {
      position: absolute;
      right: 25px;
      width: 14px;
      top: 25px;
      fill: ${({ theme }) => theme.colors.grayDarkText};
      transition: transform 0.3s ease-in-out;
    }
  }

  .accordion__button {
    background-color: #fff;
    color: #444;
    cursor: pointer;
    padding: 2.4rem 6.4rem 2.4rem 2.4rem;
    font-size: 1.8rem;
    font-weight: 600;
    width: 100%;
    text-align: left;
    border: none;

    &:hover {
      background-color: #fff;
    }
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    background-color: #fff;
    padding: 0 2.4rem 2.4rem;
    animation: fadein 0.35s ease-in;

    p {
      margin: 0;
      font-size: 1.8rem;
      line-height: 2.8rem;
    }

    &[aria-hidden='false'] {
      + svg {
        transform: rotate(180deg);
      }
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
    `)};

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
