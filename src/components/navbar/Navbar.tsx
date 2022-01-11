import React from 'react';

// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';
import SocialMedias from "../SocialMedias";
import NavbarItem from "./NavbarItem";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import {graphql, Link, useStaticQuery} from "gatsby";

const Navbar = () => {
    const data = useStaticQuery(graphql`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date
            title
          }
          id
          slug
        }
      }
    }
  `)
    return (
        <nav className={styles.mainNav}>
            <ul className={styles.navLinkItems}>
                <Logo/>
                <NavbarItem url="/" text="HOME"/>
                <NavbarItem url="/blog" text="BLOG">
                    <DropdownMenu>
                        {
                            data.allMdx.nodes.map((node: any) => (
                                <li key={node.id} className={styles.dropdownItem}>
                                    <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
                                </li>
                            ))
                        }
                    </DropdownMenu>
                </NavbarItem>
                <NavbarItem url="/about" text="ABOUT"/>
            </ul>

            <SocialMedias/>
        </nav>
    )
}

export default Navbar