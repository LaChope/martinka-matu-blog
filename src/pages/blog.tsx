import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import HeroVideo from "../components/HeroVideo";

interface Props {
    data: any
}

const BlogPage = ({data}: Props) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout pageTitle="My blog">
            <HeroVideo videoSrcUrl="https://www.youtube.com/watch?v=JZi6QRgrM4k" videoTitle="costa-rica" heroTitle="Martinka Matu Blog Page"/>
            <ul>
                {
                    posts.map((post: any) => (
                        <article key={post.id}>
                            <h2>
                                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                            </h2>
                            <p>Posted: {post.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date
            title
          }
          id
        fields {
              slug
            }
        }
      }
  }
`

export default BlogPage