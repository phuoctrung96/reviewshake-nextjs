import { CSSProperties, ReactNode } from 'react';
import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system';
import StyledText from './text.styles';

export type TextType = {
  viewType?: TextViewType;
  textTransform?: CSSProperties['textTransform'];
  color?: any;
  children?: ReactNode;
  className?: string;
};

export type TextViewType = 'primary' | 'secondary' | 'alternative';

const Text = ({
  children,
  viewType = 'primary',
  textTransform,
  className = '',
  ...props
}: TextType & TypographyProps & SpaceProps & LayoutProps & ColorProps) => {
  return (
    <StyledText
      className={className}
      $textTransform={textTransform}
      $viewType={viewType}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
