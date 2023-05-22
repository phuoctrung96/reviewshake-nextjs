import BaseLink from '@/components/reusable/base-link/BaseLink';
import { StyledNavigation } from './rightNavigation.styles';
import { RIGHT_NAV_LINKS } from '@/components/main/navigation/navigationData';

const RightNavigation = () => {
  return (
    <StyledNavigation aria-label="primary">
      <ul>
        {RIGHT_NAV_LINKS.map(({ id, title, href }, index) => {
          if (!href) return null;

          return (
            <li key={id}>
              {index === RIGHT_NAV_LINKS.length - 1 ? (
                <BaseLink href={href} viewType="primary" py={{}}>
                  {title}
                </BaseLink>
              ) : (
                <BaseLink href={href} viewType="menu">
                  {title}
                </BaseLink>
              )}
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

export default RightNavigation;
