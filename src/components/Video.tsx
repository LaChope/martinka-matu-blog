import React from 'react';

// @ts-ignore
import * as styles from '../styles/Hero.module.css';

interface Props {
  videoSrcUrl: string;
  videoTitle: string;
  className?: string;
  videoStartTime?: number;
  videoEndTime?: number;
}

const Video = ({
  videoSrcUrl,
  videoTitle,
  videoStartTime,
  videoEndTime,
  className = styles.videoContainer
}: Props) => {
  const getEmbedLink = () => {
    const youtubeLink: string = videoSrcUrl.replace('watch?v=', 'embed/');
    const videoId: string = youtubeLink.replace(/.*[#\/]/, '');
    const youtubeParameters =
      '?controls=0&autoplay=1&loop=1&mute=1&modestbranding=1&loop=1&playlist=' +
      videoId +
      '&start=' +
      videoStartTime +
      '&end=' +
      videoEndTime;

    return youtubeLink + youtubeParameters;
  };

  return (
    <div className={className}>
      <iframe src={getEmbedLink()} title={videoTitle} allowFullScreen frameBorder="0" />
    </div>
  );
};

export default Video;
