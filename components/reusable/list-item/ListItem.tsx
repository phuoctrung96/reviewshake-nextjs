import { PropsWithChildren } from 'react';
import { StyledLi } from './listItem.styles';

const ListItem = ({ children }: PropsWithChildren) => {
  return <StyledLi>{children}</StyledLi>;
};

export default ListItem;
