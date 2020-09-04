import React from "react"
import { render } from "@testing-library/react"

import IndexTemplate from "../Index/Index"
import { DataProps as IndexDataProps } from "../Index/Index"

const data: IndexDataProps["data"] = {
  site: {
    siteMetadata: {
      title: "Headless",
    },
  },
  page: {
    title: "Home",
    content: "<p>This is the Home Page content.</p>",
  },
  posts: {
    edges: [
      {
        node: {
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
      },
      {
        node: {
          author: {
            node: {
              name: "@arnonate",
            },
          },
          content: "<p>This is the 2nd Post Content.</p>",
          databaseId: 2,
          date: "2020-09-01T03:19:52",
          excerpt: "<p>This is the 2nd Post Excerpt.</p>",
          featuredImage: {
            node: {
              altText: "2nd Post img alt text",
              localFile: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1,
                    src: "2nd Post img src",
                    srcSet: "2nd Post img srcSet",
                    sizes: "2nd Post img sizes",
                  },
                },
              },
              title: "2nd Post img title",
            },
          },
          slug: "2nd-post",
          title: "2nd Post",
        },
      },
    ],
  },
  customPosts: {
    edges: [
      {
        node: {
          author: {
            node: {
              name: "@arnonate",
            },
          },
          content: "<p>This is the 1st Custom Post Content.</p>",
          databaseId: 3,
          date: "2020-09-01T17:01:22",
          excerpt: "<p>This is the 1st Custom Post Excerpt.</p>",
          featuredImage: {
            node: {
              altText: "1st Custom Post img alt text",
              localFile: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1,
                    src: "1st Custom Post img src",
                    srcSet: "1st Custom Post img srcSet",
                    sizes: "1st Custom Post img sizes",
                  },
                },
              },
              title: "1st Custom Post img title",
            },
          },
          slug: "1st-custom-post",
          title: "1st Custom Post",
        },
      },
      {
        node: {
          author: {
            node: {
              name: "@arnonate",
            },
          },
          content: "<p>This is the 2nd Custom Post Content.</p>",
          databaseId: 4,
          date: "2020-09-01T03:19:52",
          excerpt: "<p>This is the 2nd Custom Post Excerpt.</p>",
          featuredImage: {
            node: {
              altText: "2nd Custom Post img alt text",
              localFile: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1,
                    src: "2nd Custom Post img src",
                    srcSet: "2nd Custom Post img srcSet",
                    sizes: "2nd Custom Post img sizes",
                  },
                },
              },
              title: "2nd Custom Post img title",
            },
          },
          slug: "2nd-custom-post",
          title: "2nd Custom Post",
        },
      },
    ],
  },
}

describe("Index", () => {
  it("renders a main element and article populated with data", () => {
    const component = <IndexTemplate data={data} />

    const { container } = render(component)

    expect(container.querySelector("main")).toMatchInlineSnapshot(`
      <main>
        <div
          class="girdle"
        >
          <article>
            <h1
              class="sr-only"
            >
              Headless
            </h1>
            <div>
              <p>
                This is the Home Page content.
              </p>
            </div>
            <h2>
              Posts
            </h2>
            <ul
              class="posts"
            >
              <li>
                <span>
                  09/20
                   - 
                </span>
                <a
                  href="/posts/2nd-post/"
                >
                  2nd Post
                </a>
              </li>
              <li>
                <span>
                  09/20
                   - 
                </span>
                <a
                  href="/posts/1st-post/"
                >
                  1st Post
                </a>
              </li>
            </ul>
            <h2>
              Custom Posts:
            </h2>
            <ul
              class="posts"
            >
              <li>
                <span>
                  09/20
                   - 
                </span>
                <a
                  href="/custom-posts/2nd-custom-post/"
                >
                  2nd Custom Post
                </a>
              </li>
              <li>
                <span>
                  09/20
                   - 
                </span>
                <a
                  href="/custom-posts/1st-custom-post/"
                >
                  1st Custom Post
                </a>
              </li>
            </ul>
          </article>
        </div>
      </main>
    `)
  })
})
