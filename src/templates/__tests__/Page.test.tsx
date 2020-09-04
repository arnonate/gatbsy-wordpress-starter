import React from "react"
import { render } from "@testing-library/react"

import PageTemplate from "../Page/Page"
import { DataProps as PageDataProps } from "../Page/Page"

const data: PageDataProps["data"] = {
  page: {
    title: "Page Title",
    content: "<p>This is the Page content.</p>",
  },
}

describe("Page", () => {
  it("renders a header and footer", () => {
    const component = <PageTemplate data={data} />

    const { container } = render(component)

    expect(container.querySelector("main")).toMatchInlineSnapshot(`
      <main>
        <div
          class="girdle"
        >
          <article>
            <h1>
              Page Title
            </h1>
            <div>
              <p>
                This is the Page content.
              </p>
            </div>
          </article>
        </div>
      </main>
    `)
  })
})
