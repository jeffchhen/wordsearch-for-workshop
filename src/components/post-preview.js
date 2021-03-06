import React from 'react'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Highlight } from 'react-instantsearch-dom'
const PostPreview = ( {hit}) => {
    //const title = hit.frontmatter.title || hit.fields.slug
    return (
    (
        <div >
          <header>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              {/* <Link style={{ boxShadow: `none` }} to={hit.fields.slug}>
              </Link> */}
            </h3>
            <small>{new Date(hit.frontmatter.date). toLocaleDateString()}</small>
          </header>
          <section>
            {/* <p
              dangerouslySetInnerHTML={{
                __html: hit.frontmatter.description || hit.excerpt,
              }}
            /> */}
            <p>
                <Highlight hit = {hit}
                attribute="excerpt" 
                tagName="mark"/>
            </p>
          </section>
        </div> 
      )
)
            }
export default PostPreview