import React, { useEffect, useState } from 'react';

// @ts-ignore
import * as navbarStyles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';
import SocialMedias from '../SocialMedias';
import NavbarItem from './NavbarItem';
import Logo from '../Logo';
import DropdownMenu from './DropdownMenu';
import { graphql, useStaticQuery } from 'gatsby';
import { GiHamburgerMenu, MdClose } from 'react-icons/all';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

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
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState<boolean>(true);
  const mediaQuery = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  const posts = data.allMarkdownRemark.nodes;
  // const slider = {
  //   close: { x: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } },
  //   open: { x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  // };

  const fade = {
    close: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    open: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const noAnimation = {
    close: { opacity: 1, x: 0 },
    open: { opacity: 1, x: 0 }
  };

  let isDashboard = false;
  if (className === 'dashboard') isDashboard = true;
  let navStyle = navbarStyles;
  if (isDashboard) navStyle = dashboardStyles;

  const onClickToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <>
      {isMobile && (
        <motion.div
          className="toggle-navbar"
          onClick={onClickToggleNavbar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {toggleNavbar ? <MdClose /> : <GiHamburgerMenu />}
        </motion.div>
      )}

      <motion.nav
        className={navStyle.mainNav}
        variants={isMobile ? fade : noAnimation}
        initial={isMobile ? 'close' : 'open'}
        animate={toggleNavbar ? 'open' : 'close'}
      >
        <ul className={navStyle.navLinkItems}>
          {!isDashboard && (
            <>
              {!isMobile && (
                <li className={navStyle.navLinkItem}>
                  <Logo />
                </li>
              )}
              <NavbarItem className={navStyle.navLinkItem} url="/" text="HOME" />
            </>
          )}
          <NavbarItem className={navStyle.navLinkItem} url="/blog" text="DESTINATIONS">
            <DropdownMenu
              className={navStyle}
              dropdownMenuIteration={1}
              isDashboard={isDashboard}
              dropdownItems={posts}
            />
          </NavbarItem>
          <NavbarItem className={navStyle.navLinkItem} url="/tips" text="TIPS">
            <DropdownMenu
              className={navStyle}
              dropdownMenuIteration={2}
              isDashboard={isDashboard}
              dropdownItems={posts}
            />
          </NavbarItem>
          <NavbarItem className={navStyle.navLinkItem} url="/about" text="ABOUT" />
          <SocialMedias
            logosClassName={navStyle.navSocialMediaLogos}
            logoClassName={navStyle.navSocialMediaLogo}
          />
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
