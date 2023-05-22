import { useState } from 'react';
import Section from '@/components/reusable/section/Section';
import TitleSection from '@/components/reusable/title-section/TitleSection';
import {
  StyledArrowButtonDownIcon,
  StyledLink,
  StyledButtonFlex,
  StyledDecorator1,
  StyledDecorator2,
  StyledOptionDiv,
} from './pricing.styles';
import Container from '@/components/reusable/container/Container';
import Select from 'react-select';
import Flex from '@/components/reusable/flex/Flex';
import { pricingMainOptions } from './pricingData';
import PricingSmallBusiness from './PricingSmallBusiness';
import PricingAgency from './PricingAgency';
import { useRouter } from 'next/router';
import PricingPeriodSwitch from '@/components/reusable/pricing-period-switch/PricingPeriodSwitch';

const pricingSelectOptions: { value: string; label: JSX.Element }[] = pricingMainOptions.map(
  ({ id, icon, title }) => {
    return {
      value: id,
      label: (
        <StyledOptionDiv>
          {icon}
          {title}
        </StyledOptionDiv>
      ),
    };
  }
);

type SelectedOptionType = {
  value: string;
  label: string | JSX.Element;
} | null;

const PricingPage = () => {
  const { pathname } = useRouter();

  const getSelectedOption = (): SelectedOptionType => {
    if (pathname.endsWith('small-business')) {
      return pricingSelectOptions[0];
    } else if (pathname.endsWith('agency')) {
      return pricingSelectOptions[1];
    }
    return pricingSelectOptions[0];
  };

  const [selectedOption, setSelectedOption] = useState<SelectedOptionType>(getSelectedOption());
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <Section backgroundColor="gray" pt={{ _: 237, md: 209, lg: 213 }}>
        <Container position="relative">
          <StyledDecorator1 decPosition1="dec1">
            <StyledDecorator2 decPosition1="dec2">
              <TitleSection
                description="Simple plans that grow with your business. No contracts. No setup fees."
                maxWidth={{ _: 'unset', md: 438, lg: 'unset' }}
              >
                Transparent pricing
              </TitleSection>
            </StyledDecorator2>
          </StyledDecorator1>
        </Container>
      </Section>
      <Section backgroundColor="gray" pb={{ _: 60, lg: 80 }} pt={{ _: 0, lg: 32 }}>
        <Container>
          <StyledButtonFlex width="100%" mb={{ _: 60, lg: 80 }}>
            {pricingMainOptions.map(({ id, title, icon }) => (
              <StyledLink
                key={id}
                href={`/pricing/${id}`}
                className={id === selectedOption?.value ? 'selected' : ''}
                onClick={() => setSelectedOption({ value: id, label: title })}
                scroll={false}
              >
                {icon}
                {title}
              </StyledLink>
            ))}
          </StyledButtonFlex>
          <Flex
            width="100%"
            alignItems="center"
            maxWidth={'350px'}
            mx="auto"
            display={{ _: 'block', md: 'none' }}
          >
            <Select
              onChange={setSelectedOption}
              options={pricingSelectOptions}
              isSearchable={false}
              value={selectedOption}
              components={{
                IndicatorsContainer: () => <StyledArrowButtonDownIcon />,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: '#E0E0E0',
                  borderRadius: '6px',
                  padding: '0.6rem',
                }),
              }}
            />
          </Flex>
          <PricingPeriodSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        </Container>
      </Section>
      {selectedOption?.value === 'small-business' && <PricingSmallBusiness isMonthly={isMonthly} />}
      {selectedOption?.value === 'agency' && <PricingAgency isMonthly={isMonthly} />}
    </>
  );
};

export default PricingPage;
