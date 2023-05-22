import Image from 'next/image';
import { StyledContainer } from './partners.styles';
import Text from '@/components/reusable/text/Text';

const PARTNER_IMAGES = [
  { filename: 'samsung.svg', width: 234, height: 88, alt: 'Samsung' },
  { filename: 'pwc.svg', width: 234, height: 88, alt: 'PWC' },
  { filename: 'keystone.png', width: 234, height: 88, alt: 'Keystone' },
  { filename: 'crown&caliber.svg', width: 234, height: 88, alt: 'Crown & Caliber' },
  { filename: 'localclarity.svg', width: 234, height: 88, alt: 'LocalClarity' },
];

const Partners = () => {
  return (
    <StyledContainer>
      <Text
        fontSize={{ _: '1.2rem' }}
        lineHeight={{ _: 1.35 }}
        letterSpacing="0.2em"
        fontWeight={700}
        mb={{ _: '3.1667em' }}
        textAlign="center"
      >
        1000+ COMPANIES TRUST REVIEWSHAKE
      </Text>
      {PARTNER_IMAGES.map(({ filename, alt }) => (
        <Image
          key={alt}
          src={`/assets/images/partners/${filename}`}
          width={234}
          height={88}
          alt={alt}
        />
      ))}
    </StyledContainer>
  );
};

export default Partners;
