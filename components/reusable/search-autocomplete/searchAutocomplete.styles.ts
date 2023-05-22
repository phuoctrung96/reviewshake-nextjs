import styled, { css } from 'styled-components';
import Link from 'next/link';
import Loader from '../loader/Loader';

export const StyledCompanySearchDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 380px;
  left: 0;
  right: 0;
  bottom: -20px;
  transform: translateY(100%);
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  z-index: 3;
  padding: 0.8125em;
  box-shadow: 10px 12px 80px 5px rgba(10, 29, 77, 0.12);

  input {
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    padding: 0.8125em;
    width: 100%;
  }
  hr {
    margin: 0.8125em 0 0.65625em;
    border: none;
    border-top: 1px solid #dfdfdf;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: 380px;
      left: -20%;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      left: 0;
    `)};
`;

export const StyledBGLoaderWrDiv = styled.div`
  position: absolute;
  right: 24px;
  top: 1.625em;
  line-height: 0;
  opacity: 0.5;
`;

export const StyledSingleCompanyResultLink = styled(Link)`
  display: flex;
  align-items: center;
  > div {
    margin-right: 0.75em;
  }
`;

export const StyledLoader = styled(Loader)`
  margin-left: auto;
  opacity: 0.5;
`;
