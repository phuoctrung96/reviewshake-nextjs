import Link from 'next/link';
import { css, Theme } from 'styled-components';
import Container from '@/components/reusable/container/Container';
import Grid from '@/components/reusable/grid/Grid';
import ShakeLogo from '@/components/reusable/icons/ShakeLogo';
import SocialMedia from '@/components/reusable/social-media/SocialMedia';
import Text from '@/components/reusable/text/Text';
import { StyledBottomFooter, StyledFooter } from './footer.styles';
import {
  SOLUTIONS_LINKS,
  RESOURCES_LINKS,
  COMPANY_LINKS,
  HELP_LINKS,
  COMPARISON_LINKS,
} from './footerData';
import FooterUl from './FooterUl';
import Logo from '@/components/reusable/logo/Logo';

const Footer = () => {
  return (
    <footer>
      <StyledFooter>
        <Container>
          <Grid
            gridTemplateColumns={{ _: '1fr 1fr', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' }}
            gridGap={{ md: '60px 36px' }}
            pt={{ _: '3.75em' }}
            pb={{ _: '2.25em' }}
          >
            <div
              css={`
                grid-column: 1/3;
                ${({ theme }: { theme: Theme }) =>
                  theme.mediaQueries('md')(css`
                    grid-column: 1;
                    order: 1;
                  `)};

                ${({ theme }: { theme: Theme }) => theme.mediaQueries('lg')(css``)};
              `}
            >
              <Logo />
              <SocialMedia />
            </div>

            <FooterUl title="Solutions" links={SOLUTIONS_LINKS} order={{ md: 2 }} />
            <FooterUl title="Company" links={COMPANY_LINKS} order={{ md: 6, lg: 4 }} />
            <FooterUl title="Resources" links={RESOURCES_LINKS} order={{ md: 3, lg: 5 }} />
            <FooterUl title="Help" links={HELP_LINKS} order={{ md: 4, lg: 6 }} />
            <FooterUl
              isComparison
              title="Comparisons"
              links={COMPARISON_LINKS}
              gridColumn={{ _: '1/3', md: '1', lg: 'unset' }}
              order={{ md: 5, lg: 3 }}
            />
          </Grid>
        </Container>
      </StyledFooter>
      <StyledBottomFooter>
        <Container>
          <Text fontSize={{ _: '1.6rem' }}>
            © Reviewshake, a{' '}
            <Link href="https://shake.io/" target="_blank" rel="noopener noreferrer">
              <ShakeLogo />
            </Link>{' '}
            company.
          </Text>
          <ul>
            <li>
              <Link
                href="https://help.reviewshake.com/en/article/privacy-policy-7es144/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </Container>
      </StyledBottomFooter>
    </footer>
  );
};

export default Footer;
