import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../SEO';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../Layout';
import ResponsiveHero from '../hero/ResponsiveHero';

interface Props {
  data: any;
}

const BlogPostTemplate = ({ data }: Props) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  const image = getImage(data.markdownRemark.frontmatter.image);
  const video = post.frontmatter.video;

  return (
    <Layout pageTitle={siteTitle} url={post.fields.slug}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ResponsiveHero
        gatsbyImage={image}
        imageAlt={post.frontmatter.hero_image_alt}
        videoSrcUrl={video}
        videoTitle={post.frontmatter.video_title}
        videoStartTime={post.frontmatter.video_start_time}
        videoEndTime={post.frontmatter.video_end_time}
        heroTitle={post.frontmatter.title}
      />
      <p>{post.frontmatter.date}</p>
      <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
      {/*<article*/}
      {/*    className="blog-post"*/}
      {/*    itemScope*/}
      {/*    itemType="http://schema.org/Article"*/}
      {/*>*/}
      {/*    <header>*/}
      {/*        <h1 itemProp="headline">{post.frontmatter.title}</h1>*/}
      {/*        <p>{post.frontmatter.date}</p>*/}
      {/*    </header>*/}
      {/*    <section*/}
      {/*        dangerouslySetInnerHTML={{__html: post.html}}*/}
      {/*        itemProp="articleBody"*/}
      {/*    />*/}
      {/*    <GatsbyImage alt="test" image={image}/>*/}
      {/*    <hr/>*/}
      {/*    <footer>*/}
      {/*        <Bio/>*/}
      {/*    </footer>*/}
      {/*</article>*/}
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}>
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
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
        hero_image_alt
        hero_title
        video
        video_start_time
        video_end_time
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      fields {
        slug
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
`;
