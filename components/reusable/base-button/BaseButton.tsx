import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { StyledButton } from './baseButton.styles';

export type BaseButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  handleMouseEnter?: () => void;
  disabled?: boolean;
  className?: string;
  viewType?: ButtonViewType;
};

export type ButtonViewType = 'primary' | 'secondary' | 'menu' | 'transparent' | 'text';

const BaseButton = (
  {
    children,
    handleClick = () => {},
    handleMouseEnter = () => {},
    viewType = 'primary',
    className = '',
    ...rest
  }: BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
  ref: any
) => {
  return (
    <StyledButton
      className={`${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      $viewType={viewType}
      ref={ref}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default forwardRef(BaseButton);
