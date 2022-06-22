import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeroVideo from '../components/hero/HeroVideo';
import SlideShow from '../components/SlideShow';
import Card from '../components/Card';

// @ts-ignore
import * as styles from '../styles/BlogIndex.module.css';
import { getImage } from 'gatsby-plugin-image';
import ResponsiveHero from '../components/hero/ResponsiveHero';

interface Props {
  data: any;
}

const BlogPage = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.nodes;

  const getAltImage = (item: any) => {
    if (item.frontmatter.hero_image_alt) {
      const altItem = item.frontmatter.hero_image_alt;
      return altItem.toString();
    }
    return 'No Alt Available';
  };

  return (
    <Layout pageTitle="DESTINATIONS" url="/blog">
      <ResponsiveHero
        videoSrcUrl="https://www.youtube.com/watch?v=JZi6QRgrM4k"
        videoTitle="Seychelles || DJI Spark footage"
        heroTitle="DESTINATIONS"
        videoStartTime={21}
        gatsbyImage={getImage(posts[0].frontmatter.image)}
        imageAlt={getAltImage(posts[0])}
      />

      <div className={styles.container}>
        {posts.map((post: any, index: number) => (
          <div key={index} className={styles.item}>
            <Link to={post.fields.slug}>
              <Card
                alt={getAltImage(post)}
                showPicture={true}
                backgroundImage={getImage(post.frontmatter.image)}>
                <p>Hello</p>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      {/*<ul>*/}
      {/*  {posts.map((post: any) => (*/}
      {/*    <article key={post.id}>*/}
      {/*      <h2>*/}
      {/*        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>*/}
      {/*      </h2>*/}
      {/*      <p>Posted: {post.frontmatter.date}</p>*/}
      {/*    </article>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
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
        id
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogPage;
