import React from "react"
import { graphql } from "gatsby"

import { Layout, Theme, Seo, HowTo, HowToNav } from "../components"

const HowToSingle = ({ data, pageContext }) => {
  const { howToFields } = data.howto
  const content = howToFields.howtoFields.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const singleTitle = content.tabs[0].title

  return (
    <Layout>
      <Seo title={singleTitle} />

      <Theme.Padding>
        <Theme.Wrap size="wide">
          <HowToNav
            heading={pageContext.lang === "en_us" ? "How To:" : "Como:"}
            subHeading={singleTitle}
            lang={pageContext.lang}
          />

          <HowTo
            key={data.howto.slug}
            activeItem={data.howto.slug}
            lang={pageContext.lang}
          />
        </Theme.Wrap>
      </Theme.Padding>
    </Layout>
  )
}

export const Query = graphql`
  query HowToSingle($id: String) {
    howto: wpHowTo(id: { eq: $id }) {
      id
      slug
      howToFields {
        howtoFields {
          languageValue {
            name
            slug
          }
          tabs {
            description
            title
            steps {
              content
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  }
`

export default HowToSingle
