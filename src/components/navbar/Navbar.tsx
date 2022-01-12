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
        }`
    )
    const posts = data.allMarkdownRemark.nodes
    return (
        <nav className={styles.mainNav}>
            <ul className={styles.navLinkItems}>
                <Logo/>
                <NavbarItem url="/" text="HOME"/>
                <NavbarItem url="/blog" text="BLOG">
                    <DropdownMenu>
                        {
                            posts.map((post: any) => (
                                <li key={post.id} className={styles.dropdownItem}>
                                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
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