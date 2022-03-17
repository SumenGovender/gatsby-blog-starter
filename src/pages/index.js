import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const animals = ["baboon", "baffalo","elephant","lion", "monitor", "zebra"]

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let i=0
          
          let n = title.split(" ");
          let rootsde = n[n.length-1];
          rootsde.slice(0,-1);

          return (
            
               
          <li className="card-list" key={post.fields.slug}>
            
            <div className="container">
              <div className="card">
              <Link to={post.fields.slug} className="card-size" itemProp="url">
                <div className="card-body">
                    <StaticImage class="card-image" src={`../../content/blog/elephant/elephant.jpg`}></StaticImage>
                    <div className="card-content">
                      <p className="card-date">{post.frontmatter.date}</p>
                      <p  className="card-heading"> {post.frontmatter.title}</p>
                      <p className="card-description"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                      /> 
                    </div>
                                  
                </div>
                </Link> 
              </div>
            </div>       
          </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
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
`
