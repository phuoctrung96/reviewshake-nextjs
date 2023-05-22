import BaseLink from '@/components/reusable/base-link/BaseLink';
import Text from '@/components/reusable/text/Text';
import { StyledFooterMenu } from './footer.styles';
import { FooterLinkType } from './footerData';
import { GridProps, FlexboxProps } from 'styled-system';

type FooterUlType = {
  title: string;
  links: FooterLinkType[];
  isComparison?: boolean;
};

const FooterUl = ({
  title,
  links,
  isComparison = false,
  ...props
}: FooterUlType & GridProps & FlexboxProps) => {
  return (
    <StyledFooterMenu $isComparison={isComparison} {...props}>
      <Text fontWeight={700} mt={0} fontSize={{ _: '1.6rem' }}>
        {title}
      </Text>
      <ul>
        {links.map(({ href, title, external }, index) => (
          <li key={index}>
            <BaseLink
              href={href}
              viewType="menu"
              fontSize={{ _: '1.6rem' }}
              {...(external && { linkIcon: 'external', external: true })}
            >
              {title}
            </BaseLink>
          </li>
        ))}
      </ul>
    </StyledFooterMenu>
  );
};

export default FooterUl;
