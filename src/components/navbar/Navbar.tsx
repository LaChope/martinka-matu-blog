import React from 'react';

// @ts-ignore
import * as navbarStyles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';
import SocialMedias from '../SocialMedias';
import NavbarItem from './NavbarItem';
import Logo from './Logo';
import DropdownMenu from './DropdownMenu';
import { graphql, Link, useStaticQuery } from 'gatsby';

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
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.nodes;
  let currentStyle = navbarStyles;
  if (className === 'dashboard') currentStyle = dashboardStyles;

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
          <DropdownMenu className={currentStyle}>
            {posts.map((post: any) => (
              <li key={post.id} className={currentStyle.dropdownItem}>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </DropdownMenu>
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
