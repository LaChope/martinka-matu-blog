import React, { ReactNode } from 'react';

// @ts-ignore
import * as styles from '../../styles/ResponsiveHero.module.css';

interface Props {
  children?: ReactNode;
  videoSrcUrl: string;
  videoTitle: string;
  heroTitle?: string;
  videoStartTime?: number;
  videoEndTime?: number;
  classname?: string;
}

const HeroVideo = ({
  children,
  videoSrcUrl,
  videoTitle,
  heroTitle,
  videoStartTime,
  videoEndTime
}: Props) => {
  return (
    <>
      <div className={styles.content}>
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <Video
        classname={styles.video}
        videoSrcUrl={videoSrcUrl}
        videoTitle={videoTitle}
        videoStartTime={videoStartTime}
        videoEndTime={videoEndTime}
      />
    </>
  );
};

const Video = ({ videoSrcUrl, videoTitle, videoStartTime, videoEndTime, classname }: Props) => {
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
    <div className={classname}>
      <iframe src={getEmbedLink()} title={videoTitle} allowFullScreen frameBorder="0" />
    </div>
  );
};

export default HeroVideo;
