import React from "react"
import { graphql } from "gatsby"

import {
  Betting,
  Chatting,
  Features,
  FriendSignup,
  Hero,
  Layout,
  Play,
  Seo,
  Stories,
} from "../components"

const HomepageTemplate = ({ data, pageContext }) => {
  const { homePageFields } = data.page
  const metadata = homePageFields.metadata2.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const hero = homePageFields.sectionHero.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const chatting = homePageFields.sectionChatting.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const betting = homePageFields.sectionBetting.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const play = homePageFields.sectionPlay.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const stories = homePageFields.sectionStories.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const features = homePageFields.sectionFeatures.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const storyPosts = data.stories.edges

  return (
    <Layout>
      <Seo title={metadata.seoTitle} />
      <Hero data={hero} desktop="700px" mobile="400px" content="AppDownload" />
      {pageContext.lang === "pt_br" && <FriendSignup />}
      <Chatting data={chatting} />
      <Features data={features} />
      <Betting data={betting} />
      <Stories data={{ stories, storyPosts }} language={pageContext.lang} />
      <Play data={play} />
    </Layout>
  )
}

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "home" }) {
      id
      homePageFields {
        metadata2 {
          languageValue {
            slug
            name
          }
          seoTitle
        }
        sectionHero {
          languageValue {
            slug
            name
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          mockups {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        sectionChatting {
          languageValue {
            slug
            name
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          heading
          headingSecondLine
          highlight
          content
        }
        sectionFeatures {
          languageValue {
            slug
            name
          }
          content {
            heading
            text
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 340, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          heading
        }
        sectionBetting {
          languageValue {
            slug
            name
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          heading
          highlight
          content {
            heading
            text
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          buttonText
        }
        sectionStories {
          languageValue {
            slug
            name
          }
          heading
          headingBackground
        }
        sectionPlay {
          languageValue {
            slug
            name
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          heading
          highlight
          content
          buttonText
        }
      }
    }
    stories: allWpStory {
      edges {
        node {
          storyFields {
            storyFields {
              headline
              name
              languageValue {
                name
                slug
              }
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fixed(width: 150, height: 150, quality: 80) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomepageTemplate
