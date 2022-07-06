import React, { FC, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import HeroImage from './HeroImage';
import HeroVideo from './HeroVideo';
import { FaChevronCircleDown } from 'react-icons/fa';

// @ts-ignore
import * as styles from '../../styles/ResponsiveHero.module.css';

interface Props {
  gatsbyImage: IGatsbyImageData | any;
  imageAlt: string;
  children?: ReactNode;
  classname?: string;
  videoSrcUrl: string;
  videoTitle: string;
  heroTitle?: string;
  videoStartTime?: number;
  videoEndTime?: number;
}

const ResponsiveHero: FC<Props> = (props) => {
  const isMobile = useMediaQuery({ maxAspectRatio: '16/10' });

  return (
    <div className={styles.container}>
      {isMobile || !props.videoSrcUrl ? (
        <HeroImage
          gatsbyImage={props.gatsbyImage}
          imageAlt={props.imageAlt}
          heroTitle={props.heroTitle}>
          {props.children}
        </HeroImage>
      ) : (
        <HeroVideo
          videoSrcUrl={props.videoSrcUrl}
          videoTitle={props.videoTitle}
          heroTitle={props.heroTitle}>
          {props.children}
        </HeroVideo>
      )}
      <FaChevronCircleDown
        className={props.classname === 'index' ? styles.noDisplay : styles.arrowDown}
        onClick={() => {
          scrollBy(0, innerHeight - innerHeight / 10);
        }}
      />
    </div>
  );
};

export default ResponsiveHero;
