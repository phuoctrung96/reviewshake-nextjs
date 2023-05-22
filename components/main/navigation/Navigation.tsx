import BaseLink from '@/components/reusable/base-link/BaseLink';
import Dropdown from '@/components/reusable/dropdown/Dropdown';
import CloseIcon from '@/components/reusable/icons/CloseIcon';
import { StyledCloseButton, StyledLogo, StyledNavigation } from './navigation.styles';
import { NAV_LINKS, RIGHT_NAV_LINKS } from '@/components/main/navigation/navigationData';

type NavigationType = {
  isOpened: boolean;
  handleMenuClose: () => void;
};

const Navigation = ({ isOpened, handleMenuClose }: NavigationType) => {
  return (
    <StyledNavigation $isOpen={isOpened} aria-label="primary">
      <StyledLogo handleClick={handleMenuClose} />
      <StyledCloseButton
        viewType="transparent"
        aria-label="Close navigation menu"
        onClick={handleMenuClose}
      >
        <CloseIcon />
      </StyledCloseButton>
      <ul>
        {NAV_LINKS.map(({ id, title, href, dropdown, className = '', external = false }) => {
          if (dropdown) {
            return (
              <li key={id}>
                <Dropdown
                  dropdownTitle={title}
                  items={dropdown}
                  handleMenuClose={handleMenuClose}
                />
              </li>
            );
          }
          if (href)
            return (
              <li key={id}>
                <BaseLink
                  href={href}
                  handleClick={handleMenuClose}
                  viewType="menu"
                  className={className}
                  external={external}
                >
                  {title}
                </BaseLink>
              </li>
            );
        })}
      </ul>
      <ul>
        {RIGHT_NAV_LINKS.map(({ id, title, href }, index) => {
          if (!href) return null;

          return (
            <li key={id}>
              <BaseLink
                href={href}
                handleClick={handleMenuClose}
                viewType={index === 1 ? 'primary' : 'menu'}
                maxWidth={{ _: 350, xl: 'unset' }}
              >
                {title}
              </BaseLink>
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
