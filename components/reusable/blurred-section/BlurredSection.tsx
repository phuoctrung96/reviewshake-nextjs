import React from 'react';
import { useRouter } from 'next/router';
import { StyledBlurLinkWr, StyledBaseLink } from './blurredSection.styles';

type BlurredSectionProps = {
  active: boolean;
  blurValue?: number;
  linkText?: string;
};

const BlurredSection = ({
  active,
  blurValue = 3,
  linkText = 'Gain deeper insights',
}: BlurredSectionProps) => {
  const router = useRouter();

  return active ? (
    <StyledBlurLinkWr $blurValue={blurValue}>
      <StyledBaseLink
        href={`/contact-us?referUrl=${encodeURIComponent(
          process.env.NEXT_PUBLIC_FETCH_URL?.slice(0, -1) + router.asPath
        )}`}
      >
        {linkText}
      </StyledBaseLink>
    </StyledBlurLinkWr>
  ) : null;
};

export default BlurredSection;
