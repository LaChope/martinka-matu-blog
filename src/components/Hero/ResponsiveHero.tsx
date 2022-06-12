import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import HeroImage from './HeroImage';
import HeroVideo from './HeroVideo';
import { FaChevronCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

// @ts-ignore
import * as styles from '../../styles/ResponsiveHero.module.css';

interface Props {
  gatsbyImage: IGatsbyImageData | any;
  imageAlt: string;
  children?: ReactNode;
  style?: object;
  videoSrcUrl: string;
  videoTitle: string;
  heroTitle?: string;
  videoStartTime?: number;
  videoEndTime?: number;
}

const ResponsiveHero: FC<Props> = (props) => {
  const mediaQuery = useMediaQuery({ maxAspectRatio: '16/9' });

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [isMobile]);

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
      <motion.div
        className={styles.arrowDown}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <FaChevronCircleDown />
      </motion.div>
    </div>
  );
};

export default ResponsiveHero;
