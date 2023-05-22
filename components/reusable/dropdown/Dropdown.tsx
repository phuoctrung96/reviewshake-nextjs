import { KeyboardEvent, useState } from 'react';
import BaseButton from '../base-button/BaseButton';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import { StyledDropdownDiv, StyledDropdownWrDiv, StyledSpan } from './dropdown.styles';
import DropdownContent from './DropdownContent';
import { DropdownItemsType } from '@/components/main/navigation/navigationData';

type DropdownProps = {
  dropdownTitle: string;
  items: DropdownItemsType[];
  handleMenuClose: () => void;
  className?: string;
};

const Dropdown = ({ dropdownTitle, items, handleMenuClose, className = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuDropdownClose = () => {
    setIsOpen(false);
    handleMenuClose();
  };

  const handleDropdownToggle = (e: KeyboardEvent) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleDropdownClickToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <StyledDropdownWrDiv className={`${className}`} onMouseLeave={() => setIsOpen(false)}>
      <BaseButton
        viewType="transparent"
        onClick={handleDropdownClickToggle}
        onKeyDown={(e) => handleDropdownToggle(e)}
      >
        {dropdownTitle}
        <StyledSpan $isOpen={isOpen}>
          <ArrowDownIcon width={18} height={18} />
        </StyledSpan>
      </BaseButton>
      <StyledDropdownDiv $isOpen={isOpen} role="menu">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <DropdownContent handleClick={handleMenuDropdownClose} {...item} />
            </li>
          ))}
        </ul>
      </StyledDropdownDiv>
    </StyledDropdownWrDiv>
  );
};

export default Dropdown;
