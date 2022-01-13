import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';

interface Props {
    className?: string
}

const Logo = ({className = styles.logo}: Props) => {
  const imageData: any = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
      <Link to="/">
        <GatsbyImage
          className={className}
          alt="logo"
          image={imageData.file.childImageSharp.gatsbyImageData}
        />
      </Link>
  );
};

export default Logo;
