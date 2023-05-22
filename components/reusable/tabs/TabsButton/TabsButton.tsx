import { StyledButton } from '@/components/reusable/tabs/TabsButton/tabsButton.styles';
import { ButtonHTMLAttributes } from 'react';

type TabButtonType = {
  text: string;
  isActive?: true;
};

const TabsButton = ({
  text,
  isActive,
  ...props
}: TabButtonType & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton type="button" $isActive={isActive ?? false} {...props}>
      {isActive && <span />}
      {text}
    </StyledButton>
  );
};

export default TabsButton;
