import React, { ReactNode } from 'react';
import {
  StyledCardWrDiv,
  StyledLogoWr,
  StyledTitleH2,
  StyledTitleH3,
  StyledReadMore,
  StyledDescriptionP,
  StyledTopBorderDiv
} from './card.styles';
import BlurredSection from '../blurred-section/BlurredSection';

export type BorderColor = 'blue' | 'orange' | 'red';

type CardType = {
  borderColor?: BorderColor;
  borderTop?: boolean;
  logo?: string;
  title?: string;
  mainCard?: boolean;
  description?: string;
  blurred?: boolean;
  blurValue?: number;
  blurLinkText?: string;
  truncateDescription?: boolean;
  className?: string;
  children: ReactNode;
};

const Card = ({
  logo,
  title,
  mainCard,
  description,
  borderColor,
  borderTop,
  blurred = false,
  blurValue = 3,
  blurLinkText,
  truncateDescription = false,
  children,
  className = '',
}: CardType) => {
  return (
    <StyledCardWrDiv $borderColor={borderColor} className={className}>
      <BlurredSection active={blurred} blurValue={blurValue} linkText={blurLinkText} />
      {logo && <StyledLogoWr url={logo} width={66} disablePlaceholder />}
      {title &&
        (mainCard ? (
          <StyledTitleH2>{title}</StyledTitleH2>
        ) : (
          <StyledTitleH3>{title}</StyledTitleH3>
        ))}
      {description && truncateDescription && (
        <StyledReadMore countOfCharacters={210} $mainCard={mainCard}>
          {description}
        </StyledReadMore>
      )}
      {description && !truncateDescription && (
        <StyledDescriptionP>{description}</StyledDescriptionP>
      )}
      {children}
      {borderTop && <StyledTopBorderDiv $borderColor={borderColor} />}
    </StyledCardWrDiv>
  );
};

export default Card;
