import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

// @ts-ignore
import * as styles from '../styles/Hero.module.css';

interface Props {
  gatsbyImage: IGatsbyImageData | any;
  imageAlt: string;
  heroTitle?: string;
  children?: ReactNode;
}

const HeroImage = ({ gatsbyImage, imageAlt, heroTitle, children }: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <GatsbyImage className={styles.imageContainer} alt={imageAlt} image={gatsbyImage} />
    </div>
  );
};

export default HeroImage;
