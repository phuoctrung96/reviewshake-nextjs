type VideoWrapperType = {
  videoFilename: string;
};

const VideoWrapper = ({ videoFilename }: VideoWrapperType) => {
  return (
    <video
      src={`/assets/videos/${videoFilename}`}
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: 'auto',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'fill',
        maxHeight: '500px',
        overflow: 'hidden',
        borderRadius: '15px',
      }}
    />
  );
};

export default VideoWrapper;
