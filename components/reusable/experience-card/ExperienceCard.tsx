import { StyledExperienceCardDiv } from './experienceCard.styles';
import Image from 'next/image';
import Text from '@/components/reusable/text/Text';
import { MarginProps } from 'styled-system';

type ExperienceCardType = {
  experience: 'good' | 'bad';
};

const ExperienceCard = ({ experience, ...props }: ExperienceCardType & MarginProps) => {
  return (
    <StyledExperienceCardDiv {...props}>
      {experience === 'good' ? (
        <Image src="/assets/images/features/thumbs-up.svg" width={73} height={72} alt="Thumbs up" />
      ) : (
        <Image
          src="/assets/images/features/thumbs-down.svg"
          width={73}
          height={72}
          alt="Thumbs down"
        />
      )}
      <Text
        fontSize={{ _: '1.6rem', md: '1.35rem', lg: '1.75rem' }}
        lineHeight={{ _: 1.35 }}
        fontWeight={500}
        mt={{ _: 22 }}
        mb={0}
      >
        {experience === 'good' ? 'I had a good experience' : 'I had a bad experience'}
      </Text>
    </StyledExperienceCardDiv>
  );
};

export default ExperienceCard;
