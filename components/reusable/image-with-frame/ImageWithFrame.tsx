import Image from 'next/image';
import { StyledImageWithFrame } from './imageWithFrame.styles';

type ImageWithFrameType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  frameVariant?: FrameVariant;
};

export type FrameVariant = 'primary' | 'secondary';

const ImageWithFrame = ({
  src,
  width,
  height,
  alt,
  frameVariant = 'primary',
}: ImageWithFrameType) => {
  return (
    <StyledImageWithFrame $frameVariant={frameVariant}>
      <Image src={src} width={width} height={height} alt={alt} />
    </StyledImageWithFrame>
  );
};

export default ImageWithFrame;
