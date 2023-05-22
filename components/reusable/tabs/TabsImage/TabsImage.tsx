import { ImageType } from '@/types/general';
import Image from 'next/image';
import Flex from '@/components/reusable/flex/Flex';
import { ReactNode } from 'react';
import { StyledIconWrapper } from '@/components/reusable/tabs/TabsImage/tabsImage.styles';

type TabsImageType = {
  image: ImageType;
  maxWidth: number;
  icon?: ReactNode;
};

const TabsImage = ({ image, maxWidth, icon }: TabsImageType) => {
  const { src, height, width, alt } = image;
  return (
    <Flex position="relative">
      <Flex width={maxWidth} overflow="hidden" borderRadius={6}>
        <Image src={`/assets/images/tab-reviews/${src}`} alt={alt} width={width} height={height} />
      </Flex>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
    </Flex>
  );
};

export default TabsImage;
