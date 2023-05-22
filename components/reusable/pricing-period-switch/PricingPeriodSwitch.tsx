import { Dispatch, SetStateAction } from 'react';
import Flex from '@/components/reusable/flex/Flex';
import Switch from '@/components/reusable/switch/Switch';

type PricingPeriodSwitchType = {
  isMonthly: boolean;
  setIsMonthly: Dispatch<SetStateAction<boolean>>;
};

const PricingPeriodSwitch = ({ isMonthly, setIsMonthly }: PricingPeriodSwitchType) => {
  return (
    <Flex
      backgroundColor="#E6E6E6"
      borderRadius={6}
      p={{ _: '2.3rem 1.3rem', md: '2rem 4.1rem', lg: '3.1rem 2.8rem' }}
      alignItems="center"
      justifyContent="center"
      mt={{ _: 20, md: 0 }}
      width={{ _: '100%', md: 'max-content' }}
      mx={{ _: 'auto' }}
      maxWidth={{ _: '350px', md: 'unset' }}
    >
      <Switch
        id="periodSwitch"
        isChecked={!isMonthly}
        handleToggle={() => setIsMonthly((prevState) => !prevState)}
        textBefore="Billed monthly"
        textAfter="Billed yearly"
      />
    </Flex>
  );
};

export default PricingPeriodSwitch;
