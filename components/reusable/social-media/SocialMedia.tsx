import Grid from '@/components/reusable/grid/Grid';
import FacebookIcon from '@/components/reusable/icons/Facebook';
import LinkedInIcon from '@/components/reusable/icons/LinkedIn';
import TwitterIcon from '@/components/reusable/icons/Twitter';
import { StyledLink } from './socialMedia.styles';

const SOCIAL_MEDIA = [
  {
    link: 'https://www.linkedin.com/company/shakeio/',
    icon: <LinkedInIcon />,
  },
  {
    link: 'https://www.twitter.com/reviewshake',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://www.facebook.com/reviewshake',
    icon: <FacebookIcon />,
  },
];

const SocialMedia = () => {
  return (
    <Grid gridTemplateColumns="46px 46px 46px" gridGap="20px" py={{ _: 40 }}>
      {SOCIAL_MEDIA.map(({ link, icon }, index) => (
        <StyledLink key={index} href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </StyledLink>
      ))}
    </Grid>
  );
};

export default SocialMedia;
