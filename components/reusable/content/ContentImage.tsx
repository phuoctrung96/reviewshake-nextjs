import { ImageType } from '@/types/general';
import Image from 'next/image';
import Flex from '@/components/reusable/flex/Flex';

const ContentImage = (image: ImageType) => {
  return (
    <Flex mb="3.2rem" maxWidth={585} mx="auto">
      <Image {...image} />
    </Flex>
  );
};

export default ContentImage;
