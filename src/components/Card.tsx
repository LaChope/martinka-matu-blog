import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  children?: ReactNode;
  backgroundImage?: IGatsbyImageData | any;
  alt: string;
  backgroundVideoURL?: string;
  showPicture: boolean;
}

const Card = ({
  backgroundImage,
  backgroundVideoURL,
  alt = 'default',
  children,
  showPicture = false
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

  return (
    <div className="card-container">
      {showPicture && (
        <>
          {alt && backgroundImage ? (
            <GatsbyImage className="image-container" alt={alt} image={backgroundImage} />
          ) : (
            <GatsbyImage
              className="image-container"
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
