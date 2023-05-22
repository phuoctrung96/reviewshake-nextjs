import styled from 'styled-components';

export const StyledMoreUl = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;

  li {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 100%;
    border: 3px solid #fff;
    box-shadow: 1px 2px 5px rgb(9 9 48 / 14%);
    margin-left: -11px;
    position: relative;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;
