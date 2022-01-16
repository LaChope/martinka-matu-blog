import React from 'react';

// @ts-ignore
import * as navbarStyles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';
import SocialMedias from '../SocialMedias';
import NavbarItem from './NavbarItem';
import Logo from '../Logo';
import DropdownMenu from './DropdownMenu';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            hero_image_alt
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;
  let isDashboard = false;
  if (className === 'dashboard') isDashboard = true;
  let navStyle = navbarStyles;
  if (isDashboard) navStyle = dashboardStyles;

  return (
    <nav className={navStyle.mainNav}>
      <ul className={navStyle.navLinkItems}>
        {className != 'dashboard' && (
          <>
            <li className={navStyle.navLinkItem}>
              <Logo />
            </li>
            <NavbarItem className={navStyle.navLinkItem} url="/" text="HOME" />
          </>
        )}
        <NavbarItem className={navStyle.navLinkItem} url="/blog" text="DESTINATIONS">
          <DropdownMenu className={navStyle} isDashboard={isDashboard} dropdownItems={posts} />
        </NavbarItem>
        <NavbarItem className={navStyle.navLinkItem} url="/tips" text="TIPS" />
        <NavbarItem className={navStyle.navLinkItem} url="/about" text="ABOUT" />
        <SocialMedias
          logosClassName={navStyle.navSocialMediaLogos}
          logoClassName={navStyle.navSocialMediaLogo}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
