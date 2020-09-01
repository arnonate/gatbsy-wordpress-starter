import React from "react"
import { graphql } from "gatsby"

import { Contact, Hero, Layout, Seo } from "../components"

const ContactTemplate = ({ data, pageContext }) => {
  const { contactFields } = data.page
  const metadata = contactFields.metadataCopy.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const hero = contactFields.contentFields.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const form = contactFields.formFields.find(
    variant => variant.languageValue.slug === pageContext.lang
  )

  return (
    <Layout>
      <Seo title={metadata.seoTitle} />
      <Hero
        data={{
          title: hero.heading,
          subtitle: hero.subheading,
          image: hero.heroImage,
        }}
        content="ChatBubbles"
        desktop="400px"
        mobile="320px"
      />
      <Contact data={form} lang={pageContext.lang}></Contact>
    </Layout>
  )
}

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "contact" }) {
      id
      contactFields {
        metadataCopy {
          languageValue {
            slug
            name
          }
          seoTitle
        }
        contentFields {
          languageValue {
            slug
            name
          }
          heading
          subheading
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
        formFields {
          languageValue {
            slug
            name
          }
          supportHeading
          supportCopy
          supportEmail
          supportButtonText
          feedbackHeading
          feedbackCopy
          feedbackEmail
          feedbackButtonText
          firstNameFieldLabel
          lastNameFieldLabel
          emailFieldLabel
          phoneFieldLabel
          countryFieldLabel
          messageFieldLabel
          submitButtonText
        }
      }
    }
  }
`

export default ContactTemplate
