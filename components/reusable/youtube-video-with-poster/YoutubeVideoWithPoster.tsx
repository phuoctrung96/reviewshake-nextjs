import Image from 'next/image';
import Play from '@/components/reusable/icons/Play';
import BaseButton from '@/components/reusable/base-button/BaseButton';
import { StyledWrapper } from '@/components/reusable/youtube-video-with-poster/youtubeVideoWithPoster.styles';
import { useState } from 'react';

type VideoWrapperType = {
  youtubeVideoId?: string;
};
const YoutubeVideoWithPoster = ({ youtubeVideoId = '41_jjp_tq88' }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledWrapper $isActive={isActive}>
      <div>
        <Image
          src="/assets/images/video-bg.jpg"
          alt="Woman in front of the computer"
          width={1170}
          height={615}
        />
        <BaseButton viewType="transparent" onClick={handleClick}>
          <Play />
        </BaseButton>
      </div>
      <div>
        <div>
          <iframe
            width="1170"
            height="659"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&autoplay=${
              isActive ? 1 : 0
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            tabIndex={isActive ? 0 : -1}
          ></iframe>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default YoutubeVideoWithPoster;
