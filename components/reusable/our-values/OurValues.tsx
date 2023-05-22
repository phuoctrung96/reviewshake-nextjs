import Box from '@/components/reusable/box/Box';
import HeadingBase from '@/components/reusable/heading/Heading';
import { StyledFaqDiv } from './ourValues.styles';

const OUR_VALUES = [
  {
    id: 1,
    title: 'Autonomy',
    description:
      'As Shakers, we take ownership for our work and have the freedom to make decisions towards our goals. We trust each and every team member and create a safe and open environment by being a goal oriented company.',
  },
  {
    id: 2,
    title: 'Healthy Team Spirit',
    description:
      'Communication is key for Shakers - helping each other reach our collective goals by being open to new opinions, asking questions and involving everyone in key decisions.',
  },
  {
    id: 3,
    title: 'Continuous Learning',
    description:
      'Shakers believe in knowledge sharing, getting out of our comfort zone and learning new things. We embrace failure as part of the learning process.',
  },
  {
    id: 4,
    title: 'Customer Commitment',
    description:
      'As a bootstrapped company, Shakers inherently treat our customers as partners and not just another number. We go the extra mile to help our customers at every level of our interactions',
  },
  {
    id: 5,
    title: 'Sane Growth',
    description:
      "Startups don't have to be crazy at work, and as Shakers we take this to heart. We deliver for our customers while having a healthy work/life balance and asynchronous work culture. We find creative solutions and do more with less.",
  },
];

const OurValues = () => {
  return (
    <Box p={{ _: '3.75em 0 0', md: '4.375em 0 0', lg: '6.875rem 0 0' }}>
      {OUR_VALUES.map((valueItem) => (
        <StyledFaqDiv key={valueItem.id}>
          <HeadingBase as="h3">
            <span>{valueItem.id}</span>
            {valueItem.title}
          </HeadingBase>
          <p>{valueItem.description}</p>
        </StyledFaqDiv>
      ))}
    </Box>
  );
};

export default OurValues;
