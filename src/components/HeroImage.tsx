import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

// @ts-ignore
import {hero, heroContent, imageContainer} from '../styles/Hero.module.css';

interface Props {
  gatsbyImage: IGatsbyImageData | any;
  imageAlt: string;
  heroTitle?: string;
  children?: ReactNode;
  style?: object;
}

const HeroImage = ({ gatsbyImage, imageAlt, heroTitle, style, children }: Props) => {
  return (
    <div className={hero}>
      <div className={heroContent}>
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <GatsbyImage
        className={imageContainer}
        alt={imageAlt}
        image={gatsbyImage}
        style={style}
      />
    </div>
  );
};

export default HeroImage;
