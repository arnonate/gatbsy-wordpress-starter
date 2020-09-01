import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Hero, Layout, Seo, Theme } from "../components"
import { Tokens } from "../components/Theme/Tokens"

const ContactTemplate = ({ data, pageContext }) => {
  const { contactFields } = data.page
  const thanks = contactFields.thanksFields.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const hero = contactFields.contentFields.find(
    variant => variant.languageValue.slug === pageContext.lang
  )

  return (
    <Layout>
      <Seo title={thanks.thanksHeading} />
      <Hero
        data={{
          title: thanks.thanksHeading,
          subtitle: "",
          image: hero.heroImage,
        }}
        desktop="400px"
        mobile="300px"
      />

      <Theme.Wrap size="narrow">
        <Styles dangerouslySetInnerHTML={{ __html: thanks.thanksCopy }} />
      </Theme.Wrap>
    </Layout>
  )
}

export const Styles = styled.div`
  padding: calc(${Tokens.rhythm} * 4) 0;
  font-size: ${Tokens.font.size.large};
  text-align: center;

  p {
    line-height: 2;
  }

  span {
    line-height: 2;
    display: inline-block;
    vertical-align: middle;
  }
`

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "contact" }) {
      id
      contactFields {
        contentFields {
          languageValue {
            slug
            name
          }
          heroImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        thanksFields {
          languageValue {
            slug
            name
          }
          thanksHeading
          thanksCopy
        }
      }
    }
  }
`

export default ContactTemplate
