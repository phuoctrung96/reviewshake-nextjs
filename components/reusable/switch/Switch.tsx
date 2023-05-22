import { StyledSwitchDiv, StyledSwitchInput } from './switch.styles';
import Text from '@/components/reusable/text/Text';

type SwitchProps = {
  id: string;
  isChecked: boolean;
  handleToggle: () => void;
  textBefore?: string;
  textAfter?: string;
};

const Switch = ({ id, isChecked, handleToggle, textBefore, textAfter }: SwitchProps) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleToggle();
    }
  };

  const textStyles = {
    fontSize: { _: '1.6rem', lg: '1.8rem' },
    color: 'black',
    lineHeight: { _: 1.6875 },
    mt: 0,
    mb: 0,
  };

  return (
    <StyledSwitchDiv>
      {textBefore && (
        <Text {...textStyles} mr={9} color={isChecked ? 'grayDarkText' : 'black'}>
          {textBefore}
        </Text>
      )}
      <StyledSwitchInput type="checkbox" id={id} checked={isChecked} onChange={handleToggle} />
      <label htmlFor={id} tabIndex={0} onKeyDown={(e) => handleKeyPress(e)}>
        <span />
      </label>
      {textAfter && (
        <Text {...textStyles} ml={16} color={isChecked ? 'black' : 'grayDarkText'}>
          {textAfter}
        </Text>
      )}
    </StyledSwitchDiv>
  );
};

export default Switch;
