import * as React from "react"
import {graphql, Link} from "gatsby"

import Bio from "../components/Bio"
import LayoutOld from "../components/layoutOld"
import SEO from "../components/SEO"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const BlogPostTemplate = ({data, location}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const {previous, next} = data
    const image = getImage(data.markdownRemark.frontmatter.image)

    return (
        <LayoutOld location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{__html: post.html}}
                    itemProp="articleBody"
                />
                <GatsbyImage alt="test" image={image}/>
                <hr/>
                <footer>
                    <Bio/>
                </footer>
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </LayoutOld>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
