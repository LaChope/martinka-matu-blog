import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import HeroImage from './HeroImage';
import HeroVideo from './HeroVideo';

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
  const isMobile = useMediaQuery({ maxAspectRatio: '16/9' });

  return (
    <>
      {isMobile ? (
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
          videoStartTime={props.videoStartTime}
          heroTitle={props.heroTitle}>
          {props.children}
        </HeroVideo>
      )}
    </>
  );
};

export default ResponsiveHero;
