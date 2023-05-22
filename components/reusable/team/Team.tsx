import Image from 'next/image';
import MemberCard from '@/components/reusable/member-card/MemberCard';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Tooltip from '@/components/reusable/tooltip/Tooltip';
import Grid from '@/components/reusable/grid/Grid';
import Flex from '@/components/reusable/flex/Flex';
import { StyledMoreUl } from './team.styles';
import Text from '@/components/reusable/text/Text';

export type TeamMember = {
  fullname: string;
  position: string;
  location: string;
  imageFilename: string;
  imageWidth: number;
  imageHeight: number;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    fullname: 'Philip Kallberg',
    position: 'CEO',
    location: 'Lisbon, Portugal',
    imageFilename: 'Philip.jpg',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    fullname: 'Horatiu Mocian',
    position: 'Head of Product',
    location: 'Targu Mures, Romania',
    imageFilename: 'Horatiu.jpg',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    fullname: 'Natalia Gavrilova',
    position: 'Head of Engineering',
    location: 'Helsinki, Finland',
    imageFilename: 'Natalia Gavrilova.jpg',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    fullname: 'Shakira Williams',
    position: 'Operations Manager',
    location: 'Cape Town, South Africa',
    imageFilename: 'Shakira.jpg',
    imageWidth: 512,
    imageHeight: 485,
  },
  {
    fullname: 'Daniel Campbell',
    position: 'Chief Commercial Officer',
    location: 'Brighton, UK',
    imageFilename: 'Daniel.jpg',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    fullname: 'Mary Joy Sayson',
    position: 'Customer Service Manager',
    location: 'Manila, Philippines',
    imageFilename: 'MJ.jpg',
    imageWidth: 512,
    imageHeight: 512,
  },
];

const MORE_MEMBERS = [
  {
    imageFilename: 'Renny.png',
  },
  {
    imageFilename: 'Laura.jpg',
  },
  {
    imageFilename: 'Philemon.jpg',
  },
  {
    imageFilename: 'Bohdan.jpg',
  },
];

const Team = () => {
  return (
    <>
      <Grid
        gridTemplateColumns={{ _: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
        gridGap={{ _: 20, lg: 30 }}
        mt={{ _: 60, md: 92, lg: 67 }}
      >
        {TEAM_MEMBERS.map((member) => (
          <MemberCard key={member.fullname} {...member} />
        ))}
      </Grid>
      <Flex
        mt={{ _: 50, md: 60 }}
        alignItems={{ _: 'center' }}
        justifyContent="center"
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <StyledMoreUl>
          {MORE_MEMBERS.map((member) => (
            <li key={member.imageFilename}>
              <Image
                src={`/assets/images/team/${member.imageFilename}`}
                alt=""
                width={38}
                height={38}
              />
            </li>
          ))}
        </StyledMoreUl>
        <Text
          fontSize={{ _: '1.4rem' }}
          lineHeight={{ _: 1.2857, md: 1 }}
          mb={0}
          mt={{ _: '0.8571em', md: 0 }}
          ml={{ _: 0, md: '0.8571em' }}
        >
          20+ other colleagues around the world
        </Text>
      </Flex>
      <Flex mt={{ _: 50 }} justifyContent="center">
        <Tooltip text="We are hiring">
          <BaseLink href="https://shake.factorialhr.com/#jobs/" external>
            Join Our Team
          </BaseLink>
        </Tooltip>
      </Flex>
    </>
  );
};

export default Team;
