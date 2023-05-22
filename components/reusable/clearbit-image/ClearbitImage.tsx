import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { newFetch } from '@/utils/fetch';
import { StyledClearbitWrDiv } from './clearbitImage.styles';

type ClearbitImageProps = {
  url: string;
  width: number;
  disablePlaceholder?: true;
  alt?: string;
  className?: string;
};

const ClearbitImage = ({
  url,
  width,
  disablePlaceholder,
  alt = '',
  className = '',
}: ClearbitImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const logoUrl = `https://logo.clearbit.com/${url}`;

  useEffect(() => {
    const getImage = async () => {
      if (url === '') return;

      try {
        const imageRes: AxiosResponse<{ notFound?: boolean }> = await newFetch('clearbit/logo', {
          params: { url: url },
        });

        if (!imageRes.data.notFound) {
          setImageLoaded(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getImage();
  });

  return (
    <StyledClearbitWrDiv
      className={`${className}`}
      style={{
        ...(disablePlaceholder
          ? {
              margin: '0',
            }
          : { width: `${width}px`, minHeight: `${width}px` }),
      }}
    >
      {imageLoaded && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={alt}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.setAttribute('style', 'display: none');
            currentTarget.setAttribute('style', 'margin: 0');
          }}
          loading="lazy"
          style={{
            width: `${width}px`,
            maxHeight: `${width}px`,
          }}
        />
      )}
    </StyledClearbitWrDiv>
  );
};

export default ClearbitImage;
