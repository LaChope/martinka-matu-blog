import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import HeroVideo from '../components/HeroVideo';
import HeroImage from '../components/HeroImage';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  const image = getImage(data.markdownRemark.frontmatter.image);

  return (
    <Layout pageTitle={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {post.frontmatter.video && (
        <HeroVideo
          videoSrcUrl={post.frontmatter.video}
          videoTitle={post.frontmatter.video_title}
          heroTitle={post.frontmatter.hero_title}
          videoStartTime={post.frontmatter.video_start_time}
          videoEndTime={post.frontmatter.video_end_time}
        />
      )}
      {image && (
        <HeroImage
          gatsbyImage={image}
          imageAlt={post.frontmatter.hero_image_alt}
          heroTitle={post.frontmatter.hero_title}
        />
      )}
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
