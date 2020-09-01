import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import { Context } from "../Context"
import { Theme } from "../../components"
import * as Styles from "./styles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bg: file(relativePath: { eq: "header-shape.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bubble: file(relativePath: { eq: "header-language.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      wp: wpPage(slug: { eq: "header" }) {
        headerFields {
          headerFields {
            languageValue {
              name
              slug
            }
            linkGroup2 {
              color
              label
              link
            }
            linkGroup1 {
              label
              link
              color
            }
            buttonLabel
          }
        }
      }
    }
  `)

  return (
    <Context.Consumer>
      {({
        language,
        languageModalIsVisible,
        toggleLanguageModalIsVisible,
        menuModalIsVisible,
        toggleMenuModalIsVisible,
        appModalIsVisible,
        toggleAppModalIsVisible,
      }) => {
        const fields = data.wp.headerFields.headerFields.find(row =>
          row.languageValue.slug.includes(language)
        )

        return (
          <Styles.Header>
            <Styles.HeaderBand>
              <Styles.MobileMenu
                onClick={() => toggleMenuModalIsVisible(!menuModalIsVisible)}
              >
                <Styles.Hamburger>
                  <span>&mdash;</span>
                  <span>&mdash;</span>
                  <span>&mdash;</span>
                </Styles.Hamburger>
                Menu
              </Styles.MobileMenu>

              <Theme.Wrap size="60%" style={{ overflow: "visible" }}>
                <Styles.LinkGroups>
                  <Styles.LinkGroup>
                    {fields.linkGroup1.map(link => (
                      <Link
                        key={link.label}
                        className={link.color}
                        to={link.link}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Styles.LinkGroup>

                  <Styles.LinkGroup>
                    {fields.linkGroup2.map(link => (
                      <Link
                        key={link.label}
                        className={link.color}
                        to={link.link}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Styles.LinkGroup>
                </Styles.LinkGroups>
              </Theme.Wrap>

              <Styles.HeaderLogo>
                <Link to={language === "pt" ? "/pt/" : "/"}>
                  <Img
                    fluid={data.logo.childImageSharp.fluid}
                    alt="Wanna"
                    loading="eager"
                  />
                </Link>
              </Styles.HeaderLogo>
            </Styles.HeaderBand>

            <Styles.HeaderActions>
              <Styles.LanguageSelector
                onClick={() =>
                  toggleLanguageModalIsVisible(!languageModalIsVisible)
                }
              >
                <span>{language}</span>
                <Styles.LanguageBubble>
                  <Img fluid={data.bubble.childImageSharp.fluid} alt="" />
                </Styles.LanguageBubble>
              </Styles.LanguageSelector>

              <Theme.Button
                onClick={() => {
                  if (language === "pt") return navigate("/pt/#PT-Optin")
                  return toggleAppModalIsVisible(!appModalIsVisible)
                }}
              >
                {fields.buttonLabel}
              </Theme.Button>
            </Styles.HeaderActions>

            <Styles.HeaderBackdrop>
              <Img
                fluid={data.bg.childImageSharp.fluid}
                alt=""
                loading="eager"
              />
            </Styles.HeaderBackdrop>
          </Styles.Header>
        )
      }}
    </Context.Consumer>
  )
}

export default Header
