import React, { ReactNode } from 'react';

// @ts-ignore
import * as styles from '../styles/Hero.module.css';
import Video from './Video';

interface Props {
  children?: ReactNode;
  videoSrcUrl: string;
  videoTitle: string;
  heroTitle?: string;
}

const HeroVideo = ({ children, videoSrcUrl, videoTitle, heroTitle }: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <Video videoSrcUrl={videoSrcUrl} videoTitle={videoTitle} />
    </div>
  );
};

export default HeroVideo;
