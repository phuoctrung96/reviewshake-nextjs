import { Fragment } from 'react';
import Box from '@/components/reusable/box/Box';
import Text from '@/components/reusable/text/Text';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Flex from '@/components/reusable/flex/Flex';
import { StyledUl } from './prosConsTable.styles';

type ProsConsTableType = {
  pros: string[];
  cons: string[];
  dark?: true;
  hasCta?: true;
};

const ProsConsTable = ({ pros, cons, dark, hasCta }: ProsConsTableType) => {
  const totalTableRows = Math.max(pros.length, cons.length);

  return (
    <Flex mt={{ _: '4rem', md: '5rem', lg: '7rem' }} flexWrap="wrap">
      <Flex flex={{ _: '1 1 100%' }} flexDirection="column" display={{ md: 'none' }}>
        <Box
          borderRadius={6}
          backgroundColor={dark ? '#F0F0F0' : 'gray'}
          p={{ _: '1.9rem 2.4rem' }}
        >
          <Text color="greenDarkBg" fontWeight={600} fontSize={{ _: '1.8rem' }} m={0}>
            Pros
          </Text>
        </Box>
        <StyledUl>
          {pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </StyledUl>
      </Flex>
      <Flex flex={{ _: '1 1 100%' }} flexDirection="column" display={{ md: 'none' }}>
        <Box
          borderRadius={6}
          backgroundColor={dark ? '#F0F0F0' : 'gray'}
          p={{ _: '1.9rem 2.4rem' }}
        >
          <Text color="red" fontWeight={600} fontSize={{ _: '1.8rem' }} m={0}>
            Cons
          </Text>
        </Box>
        <StyledUl>
          {cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </StyledUl>
      </Flex>

      <Flex flex={{ _: '1 1 100%' }} flexDirection="column" display={{ _: 'none', md: 'flex' }}>
        <Flex borderRadius={6} backgroundColor={dark ? '#F0F0F0' : 'gray'}>
          <Box flex="1 1 50%" p={{ _: '1.9rem 2.4rem' }}>
            <Text color="greenDarkBg" fontWeight={600} fontSize={{ _: '1.8rem' }} m={0}>
              Pros
            </Text>
          </Box>
          <Box flex="1 1 50%" p={{ _: '1.9rem 2.4rem' }}>
            <Text color="red" fontWeight={600} fontSize={{ _: '1.8rem' }} m={0}>
              Cons
            </Text>
          </Box>
        </Flex>

        <Flex flexWrap="wrap">
          {[...new Array(totalTableRows)].map((_, index) => (
            <Fragment key={index}>
              <Box flex="1 1 50%" borderBottom="1px solid #E0E0E0">
                <Text
                  fontSize={{ _: '1.6rem' }}
                  lineHeight={{ _: '2.7rem' }}
                  color="grayDarkText"
                  padding={{ _: '1.8rem 2.4rem' }}
                  m={0}
                >
                  {pros[index]}
                </Text>
              </Box>
              <Box flex="1 1 50%" borderBottom="1px solid #E0E0E0">
                <Text
                  fontSize={{ _: '1.6rem' }}
                  lineHeight={{ _: '2.7rem' }}
                  color="grayDarkText"
                  padding={{ _: '1.8rem 2.4rem' }}
                  m={0}
                >
                  {cons[index]}
                </Text>
              </Box>
            </Fragment>
          ))}
        </Flex>
      </Flex>
      {hasCta && (
        <BaseLink
          href="https://app.reviewshake.com/signup"
          external
          mx="auto"
          mt={{ _: '6rem', lg: '8rem' }}
        >
          Try Reviewshake for free
        </BaseLink>
      )}
    </Flex>
  );
};

export default ProsConsTable;
