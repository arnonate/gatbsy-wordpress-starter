import React from "react"
import { render } from "@testing-library/react"

import PostTemplate from "../Post/Post"
import { DataProps as PostDataProps } from "../Post/Post"

const data: PostDataProps["data"] = {
  post: {
    author: {
      node: {
        name: "@arnonate",
      },
    },
    content: "<p>This is the 1st Post Content.</p>",
    databaseId: 1,
    date: "2020-09-01T17:01:22",
    excerpt: "<p>This is the 1st Post Excerpt.</p>",
    featuredImage: {
      node: {
        altText: "1st Post img alt text",
        localFile: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: "1st Post img src",
              srcSet: "1st Post img srcSet",
              sizes: "1st Post img sizes",
            },
          },
        },
        title: "1st Post img title",
      },
    },
    slug: "1st-post",
    title: "1st Post",
  },
}

describe("Post", () => {
  it("renders content", () => {
    const component = <PostTemplate data={data} />

    const { container } = render(component)

    expect(container.querySelector("main")).toMatchInlineSnapshot(`
      <main>
        <div
          class="girdle"
        >
          <article>
            <div
              class="gatsby-image gatsby-image-wrapper"
              style="position: relative; overflow: hidden;"
            >
              <div
                aria-hidden="true"
                style="width: 100%; padding-bottom: 100%;"
              />
              <picture>
                <source
                  sizes="1st Post img sizes"
                  srcset="1st Post img srcSet"
                />
                <img
                  alt="1st Post img alt text"
                  loading="lazy"
                  sizes="1st Post img sizes"
                  src="1st Post img src"
                  srcset="1st Post img srcSet"
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                />
              </picture>
              <noscript>
                &lt;picture&gt;&lt;source srcset="1st Post img srcSet" sizes="1st Post img sizes" /&gt;&lt;img loading="lazy" sizes="1st Post img sizes" srcset="1st Post img srcSet" src="1st Post img src" alt="1st Post img alt text" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
              </noscript>
            </div>
            <h1>
              1st Post
            </h1>
            <p>
              Published: 
              September 01, 2020
              <br />
              By: 
              @arnonate
            </p>
            <div>
              <p>
                This is the 1st Post Content.
              </p>
            </div>
          </article>
        </div>
      </main>
    `)
  })
})
