import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

// @ts-ignore
import { content, image } from '../../styles/ResponsiveHero.module.css';

interface Props {
  gatsbyImage: IGatsbyImageData | any;
  imageAlt: string;
  heroTitle?: string;
  children?: ReactNode;
  style?: object;
}

const HeroImage = ({ gatsbyImage, imageAlt, heroTitle, style, children }: Props) => {
  return (
    <>
      <div className={content}>
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <GatsbyImage className={image} alt={imageAlt} image={gatsbyImage} style={style} />
    </>
  );
};

export default HeroImage;
