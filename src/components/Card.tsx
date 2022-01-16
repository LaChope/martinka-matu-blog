import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

// @ts-ignore
import * as navbarStyles from '../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../styles/Dashboard.module.css';

interface Props {
  children?: ReactNode;
  backgroundImage?: IGatsbyImageData | any;
  alt: string;
  backgroundVideoURL?: string;
  showPicture: boolean;
  className?: string;
}

const Card = ({
  backgroundImage,
  backgroundVideoURL,
  alt = 'default',
  children,
  showPicture = false,
  className
}: Props) => {
  const defaultImage = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "seychelles.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let cardStyle = dashboardStyles;
  if (className === navbarStyles) cardStyle = navbarStyles;

  return (
    <div className={cardStyle.cardContainer}>
      {showPicture && (
        <>
          {alt && backgroundImage ? (
            <GatsbyImage className={cardStyle.imageContainer} alt={alt} image={backgroundImage} />
          ) : (
            <GatsbyImage
              className={cardStyle.imageContainer}
              alt={alt}
              image={defaultImage.file.childImageSharp.gatsbyImageData}
            />
          )}
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
