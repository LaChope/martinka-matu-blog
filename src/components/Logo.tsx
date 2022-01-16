import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

// @ts-ignore
import * as styles from '../styles/Navbar.module.css';

interface Props {
  className?: string;
}

const Logo = ({ className = styles.logo }: Props) => {
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
    <motion.div className={className} whileHover={{ scale: 1.2 }}>
      <Link to="/">
        <GatsbyImage alt="logo" image={imageData.file.childImageSharp.gatsbyImageData} />
      </Link>
    </motion.div>
  );
};

export default Logo;
