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
                gatsbyImageData(
                    height: 300
                )
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
  let currentStyle = navbarStyles;
  if (isDashboard) currentStyle = dashboardStyles;

  return (
    <nav className={currentStyle.mainNav}>
      <ul className={currentStyle.navLinkItems}>
        {className != 'dashboard' && (
          <>
            <li className={currentStyle.navLinkItem}>
              <Logo />
            </li>
            <NavbarItem className={currentStyle.navLinkItem} url="/" text="HOME" />
          </>
        )}
        <NavbarItem className={currentStyle.navLinkItem} url="/blog" text="DESTINATIONS">
          <DropdownMenu className={currentStyle} showPictures={isDashboard} dropdownItems={posts} />
        </NavbarItem>
        <NavbarItem className={currentStyle.navLinkItem} url="/tips" text="TIPS" />
        <NavbarItem className={currentStyle.navLinkItem} url="/about" text="ABOUT" />
      </ul>
      <SocialMedias
        logosClassName={currentStyle.navSocialMediaLogos}
        logoClassName={currentStyle.navSocialMediaLogo}
      />
    </nav>
  );
};

export default Navbar;
