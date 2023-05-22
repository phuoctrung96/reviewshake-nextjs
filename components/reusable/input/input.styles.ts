import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 1.6rem;
  padding: 1.6rem 1.4rem 1.5rem 1.4rem;
  background: #ffffff;
  border: 1px solid #dddbdb;
  border-radius: 6px;
  width: 100%;
  &::placeholder {
    font-size: 1.6rem;
    font-family: 'GalanoGrotesque', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #b4b4ca;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.3rem;
  display: block;
  margin-bottom: 0.8rem;

  span {
    color: #e71d36;
  }
`;
