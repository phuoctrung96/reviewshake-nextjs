import { isValidElement, ReactElement } from 'react';
import { StyledText } from './textCapValue.styles';

type TextCapValueType = {
  capValue: string | ReactElement;
  description: string;
  variant?: VariantType;
};

export type VariantType = 'primary' | 'secondary';

const TextCapValue = ({ capValue, description, variant = 'primary' }: TextCapValueType) => {
  return (
    <StyledText
      my={{ _: '1.7333em' }}
      mt={{ lg: '4em' }}
      mb={{ lg: '1.5333em' }}
      {...(variant === 'primary' && { maxWidth: { md: 350, lg: 400 } })}
      $variant={variant}
    >
      {isValidElement(capValue) ? capValue : <strong>{capValue}</strong>}
      {description}
    </StyledText>
  );
};

export default TextCapValue;
