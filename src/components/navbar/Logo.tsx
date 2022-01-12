import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';

const Logo = () => {
    const imageData: any = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "gatsby-icon.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

    return (
        <li className={styles.navLinkItem}>
            <Link to="/">
                <GatsbyImage
                    className={styles.logo}
                    alt="logo"
                    image={imageData.file.childImageSharp.gatsbyImageData}/>
            </Link>
        </li>
    )
}

export default Logo