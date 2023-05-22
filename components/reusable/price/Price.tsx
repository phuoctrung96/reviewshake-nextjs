import { StyledPriceText, StyledSpan } from './price.styles';
import { ResponsiveValue, SpaceProps, TypographyProps } from 'styled-system';
import { Property } from 'csstype';

export type PriceProps = {
  price: number;
  preTitle?: string;
  fontSize?: ResponsiveValue<Property.FontSize>;
  lineHeight?: ResponsiveValue<Property.LineHeight>;
  spanFontSize?: ResponsiveValue<Property.FontSize>;
  spanLineHeight?: ResponsiveValue<Property.LineHeight>;
};

const Price = ({
  price,
  preTitle,
  fontSize = { _: '2.8rem', lg: '5.4rem' },
  lineHeight = { _: 2.077, md: '5.4rem' },
  spanFontSize = { _: '1.5rem', lg: '1.9rem' },
  spanLineHeight = { _: '3.6rem', lg: '5.4rem' },
  ...props
}: PriceProps & TypographyProps & SpaceProps) => {
  return (
    <StyledPriceText
      textAlign="center"
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={700}
      {...props}
    >
      {preTitle && (
        <StyledSpan fontSize={spanFontSize} lineHeight={spanLineHeight}>
          {preTitle}
        </StyledSpan>
      )}
      ${price}{' '}
      <StyledSpan fontSize={spanFontSize} lineHeight={spanLineHeight}>
        /month
      </StyledSpan>
    </StyledPriceText>
  );
};

export default Price;
