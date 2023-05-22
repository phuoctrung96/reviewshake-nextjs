import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';
import { StyledInput, StyledLabel } from './input.styles';

interface BaseInputPropsI extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  value?: string | number;
  label?: string;
  marginTop?: string;
  marginBottom?: string;
  className?: string;
}

type InputTypeHandleChange =
  | {
      as?: 'input';
      handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      as?: 'textarea';
      handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    };

const Input = ({
  as,
  name,
  label,
  type = 'text',
  placeholder,
  value = '',
  handleChange,
  required,
  ...rest
}: BaseInputPropsI & InputTypeHandleChange) => {
  const [localValue, setValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);

    /* @ts-ignore */
    if (handleChange) handleChange(e);
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div>
      {label && (
        <StyledLabel htmlFor={name}>
          {label} {required && <span>*</span>}
        </StyledLabel>
      )}
      {as === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          id={name}
          name={name}
          value={localValue}
          onChange={handleInputChange}
          {...rest}
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={localValue}
          onChange={handleInputChange}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
