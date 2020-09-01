import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Tokens } from "../components/Theme/Tokens"
import { Layout, Theme, Seo, Values } from "../components"

const AboutTemplate = ({ data, pageContext }) => {
  const { aboutPageFields } = data.about
  const meta = aboutPageFields.metadata.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const copy = aboutPageFields.sectionCopy.find(
    variant => variant.languageValue.slug === pageContext.lang
  )
  const values = aboutPageFields.sectionValues.find(
    variant => variant.languageValue.slug === pageContext.lang
  )

  return (
    <Layout>
      <Seo title={meta.seoTitle} />

      <Theme.Padding>
        <Theme.Wrap size="narrow">
          <PageTitle>{copy.title}</PageTitle>
        </Theme.Wrap>

        <Theme.Wrap>
          <BannerImg>
            <Img
              fluid={copy.bannerImage.localFile.childImageSharp.fluid}
              alt={meta.seoTitle}
            />
          </BannerImg>
          <BannerText>
            <span>Jim Bob Morris</span>
            <span>Carson Coffman</span>
          </BannerText>
        </Theme.Wrap>

        <Theme.Wrap size="narrow">
          <Subtitle>{copy.subtitle}</Subtitle>
        </Theme.Wrap>

        <Theme.Wrap size="wide">
          {copy.contentBlocks.map(({ image, copy }, i) => (
            <Block key={i}>
              {image && (
                <div className="image">
                  <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    alt={meta.seoTitle}
                  />
                </div>
              )}
              {copy && (
                <div
                  className="copy"
                  dangerouslySetInnerHTML={{ __html: copy }}
                />
              )}
            </Block>
          ))}
        </Theme.Wrap>
      </Theme.Padding>

      <Values data={values}></Values>
    </Layout>
  )
}

const PageTitle = styled(Theme.PageTitle)`
  font-weight: ${Tokens.font.weight.light};
  font-size: ${Tokens.font.size.extra};

  @media (min-width: ${Tokens.screen.medium}) {
    font-size: ${Tokens.font.size.ultra};
  }
`

const BannerImg = styled.div`
  padding-top: ${Tokens.rhythm};
`

const BannerText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${Tokens.font.size.large};
  font-weight: ${Tokens.font.weight.normal};
  color: ${Tokens.color.purple};
  padding-bottom: calc(${Tokens.rhythm} * 2);

  @media (min-width: ${Tokens.screen.medium}) {
    font-size: ${Tokens.font.size.extra};
  }
`

const Subtitle = styled.h2`
  font-size: ${Tokens.font.size.large};
  font-weight: ${Tokens.font.weight.light};
  color: ${Tokens.color.purple};
  text-align: center;
  margin-bottom: calc(${Tokens.rhythm} * 2);

  @media (min-width: ${Tokens.screen.medium}) {
    font-size: ${Tokens.font.size.ultraMobile};
  }
`

const Block = styled.div`
  justify-content: space-between;
  padding: 0 0 ${Tokens.rhythm};

  @media (min-width: ${Tokens.screen.medium}) {
    display: flex;
    padding: 0 0 calc(${Tokens.rhythm} * 3);
    text-align: center;
  }

  p {
    font-size: ${Tokens.font.size.base};
    font-weight: ${Tokens.font.weight.normal};

    @media (min-width: ${Tokens.screen.medium}) {
      font-size: ${Tokens.font.size.large};
    }

    b {
      font-weight: ${Tokens.font.weight.bold};
    }
  }

  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  .image {
    width: 100%;

    @media (min-width: ${Tokens.screen.medium}) {
      width: 50%;
    }
  }

  .image + .copy {
    text-align: left;
    width: 100%;

    @media (min-width: ${Tokens.screen.medium}) {
      width: 40%;
    }
  }
`

export const Query = graphql`
  query {
    about: wpPage(slug: { eq: "about-wanna" }) {
      id
      aboutPageFields {
        metadata {
          languageValue {
            slug
            name
          }
          seoTitle
        }
        sectionCopy {
          languageValue {
            slug
            name
          }
          title
          subtitle
          bannerImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          contentBlocks {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            copy
          }
        }
        sectionValues {
          languageValue {
            slug
            name
          }
          valuesBlocks {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            copy
            color
          }
        }
      }
    }
  }
`

export default AboutTemplate
