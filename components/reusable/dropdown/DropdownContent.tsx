import { StyledLink } from './dropdown.styles';
import ArrowThick from '@/components/reusable/icons/ArrowThick';
import { DropdownItemsType } from '@/components/main/navigation/navigationData';

type DropdownContentProps = DropdownItemsType & { handleClick: () => void };

const DropdownContent = ({
  link,
  external,
  name,
  description,
  handleClick,
}: DropdownContentProps) => {
  return (
    <StyledLink
      href={link}
      onClick={handleClick}
      onKeyPress={handleClick}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {name}
      <ArrowThick />

      <p>
        {description}
        {description === 'Changelog' && <span className="whats-new"></span>}
      </p>
    </StyledLink>
  );
};

export default DropdownContent;
