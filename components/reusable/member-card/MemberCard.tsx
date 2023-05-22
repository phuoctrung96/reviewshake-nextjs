import Image from 'next/image';
import { TeamMember } from '@/components/reusable/team/Team';
import { StyledDivCard, StyledImageWrapper } from './memberCard.styles';
import Flex from '@/components/reusable/flex/Flex';
import HeadingBase from '@/components/reusable/heading/Heading';
import Text from '@/components/reusable/text/Text';

const MemberCard = ({
  fullname,
  position,
  location,
  imageFilename,
  imageWidth,
  imageHeight,
}: TeamMember) => {
  return (
    <StyledDivCard>
      <StyledImageWrapper>
        <Image
          src={`/assets/images/team/${imageFilename}`}
          alt={fullname}
          width={imageWidth}
          height={imageHeight}
        />
      </StyledImageWrapper>
      <Flex alignItems="center" justifyContent="space-between" mt={{ _: '0.875em' }}>
        <div>
          <HeadingBase
            as="h3"
            textAlign="left"
            fontSize={{ _: '1.6rem', lg: '1.8rem' }}
            lineHeight={{ _: 1.175, lg: '1.3333' }}
            marginBottom={{ _: '0.625em', lg: '0.5556em' }}
          >
            {fullname}
          </HeadingBase>
          <Text
            textAlign="left"
            fontSize={{ _: '1.3rem', lg: '1.5rem' }}
            lineHeight={{ _: 1.15, lg: 1.35 }}
            margin="0"
          >
            {position}
          </Text>
        </div>
        <Text fontSize={{ _: '1.3rem' }} color="#84849d" display="inline-flex" fontWeight={600}>
          <Image src="/assets/images/team/location.svg" alt="" width={14} height={14} />
          {location}
        </Text>
      </Flex>
    </StyledDivCard>
  );
};

export default MemberCard;
