import React, { useState } from 'react';
import { StyledReadMoreWrDiv, StyledReadMoreDiv } from './readMore.styles';
import BaseButton from '../base-button/BaseButton';

type ReadMoreType = {
  countOfCharacters: number;
  className?: string;
  children: string;
};

const ReadMore = ({ countOfCharacters, className = '', children }: ReadMoreType) => {
  const [collapsed, setCollapsed] = useState(true);

  const firstPart = children.substring(0, countOfCharacters);
  const secondPart = children.substring(countOfCharacters, children.length);

  const handleClick = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <StyledReadMoreWrDiv className={`${className}`}>
      <StyledReadMoreDiv>
        {children.length > countOfCharacters ? (
          <>
            <>{firstPart}</>
            {collapsed ? (
              <>
                <>... </>
                <BaseButton viewType="transparent" onClick={handleClick}>
                  {collapsed ? 'Read More' : 'Read Less'}
                </BaseButton>
              </>
            ) : (
              <>
                <>{secondPart} </>
                <BaseButton viewType="transparent" onClick={handleClick}>
                  {collapsed ? 'Read More' : 'Read Less'}
                </BaseButton>
              </>
            )}
          </>
        ) : (
          children
        )}
      </StyledReadMoreDiv>
    </StyledReadMoreWrDiv>
  );
};

export default ReadMore;
