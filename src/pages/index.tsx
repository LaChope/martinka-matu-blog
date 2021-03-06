import * as React from 'react';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// import * as styles from '../styles/Homepage.module.css';
import { graphql } from 'gatsby';
import HeroImage from '../components/hero/HeroImage';
import Logo from '../components/Logo';
import HeroVideo from '../components/hero/HeroVideo';
import InfoDashboard from '../components/InfoDashboard';
import ResponsiveHero from '../components/hero/ResponsiveHero';

interface Props {
  data: any;
}

const BlogIndex = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const image = data.file.childImageSharp.gatsbyImageData;

  if (posts.length === 0) {
    return (
      <Layout pageTitle={siteTitle} url="/">
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
          for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={siteTitle} url="/">
      <SEO title="All posts" />
      {/*<Bio/>*/}
      {/*<ol style={{listStyle: `none`}}>*/}
      {/*    {posts.map(post => {*/}
      {/*        const title = post.frontmatter.title || post.fields.slug*/}

      {/*        return (*/}
      {/*            <li key={post.fields.slug}>*/}
      {/*                <article*/}
      {/*                    className="post-list-item"*/}
      {/*                    itemScope*/}
      {/*                    itemType="http://schema.org/Article"*/}
      {/*                >*/}
      {/*                    <header>*/}
      {/*                        <h2>*/}
      {/*                            <Link to={post.fields.slug} itemProp="url">*/}
      {/*                                <span itemProp="headline">{title}</span>*/}
      {/*                            </Link>*/}
      {/*                        </h2>*/}
      {/*                        <small>{post.frontmatter.date}</small>*/}
      {/*                    </header>*/}
      {/*                    <section>*/}
      {/*                        <p*/}
      {/*                            dangerouslySetInnerHTML={{*/}
      {/*                                __html: post.frontmatter.description || post.excerpt,*/}
      {/*                            }}*/}
      {/*                            itemProp="description"*/}
      {/*                        />*/}
      {/*                    </section>*/}
      {/*                </article>*/}
      {/*            </li>*/}
      {/*        )*/}
      {/*    })}*/}
      {/*</ol>*/}
      <Logo className="logo" />
      <ResponsiveHero
        classname="index"
        gatsbyImage={image}
        imageAlt={'Seychelles'}
        videoSrcUrl={'https://www.youtube.com/watch?v=LXb3EKWsInQ'}
        videoTitle={'Video Hero'}>
        <h1>Martinka Matu</h1>
        <h2>Blog Website</h2>
      </ResponsiveHero>
      {/*<InfoDashboard />*/}
      {/*<div className={styles.mainSection}>*/}
      {/*  <div className={styles.el1}>Element1</div>*/}
      {/*  <div className={styles.el2}>Element2</div>*/}
      {/*  <div className={styles.el3}>Element3</div>*/}
      {/*  <div className={styles.el4}>Element4</div>*/}
      {/*</div>*/}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "seychelles.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
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
`;
