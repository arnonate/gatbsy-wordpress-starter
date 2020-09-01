import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Context } from "../Context"
import Logo from "./FooterLogo"

import { AppDownload, SocialLinks, Theme } from "../index"
import * as Styles from "./styles.js"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "footer-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wp: wpPage(slug: { eq: "footer" }) {
        footerFields {
          footerFields {
            languageValue {
              name
              slug
            }
            linkGroup2 {
              label
              link
            }
            linkGroup1 {
              label
              link
            }
            copy
          }
        }
      }
    }
  `)

  return (
    <Context.Consumer>
      {({ language }) => {
        const fields = data.wp.footerFields.footerFields.find(row =>
          row.languageValue.slug.includes(language)
        )

        return (
          <>
            <Styles.Download id="scrollTo--downloads">
              <AppDownload />
            </Styles.Download>
            <Styles.Footer>
              <Theme.Wrap size="wide" flex="row">
                <Styles.LogoSection>
                  <Styles.Logo>
                    <Link to={language === "pt" ? "/pt/" : "/"}>
                      {/* <Img
                        fluid={data.logo.childImageSharp.fluid}
                        alt="Wanna"
                      /> */}
                      <Logo />
                    </Link>
                  </Styles.Logo>

                  <SocialLinks fill="white" />
                </Styles.LogoSection>

                <Styles.LinkSection>
                  <Styles.LinkGroup>
                    {fields.linkGroup1.map(link => (
                      <Link key={link.label} to={link.link}>
                        {link.label}
                      </Link>
                    ))}
                  </Styles.LinkGroup>
                  <Styles.LinkGroup>
                    {fields.linkGroup2.map(link => (
                      <Link key={link.label} to={link.link}>
                        {link.label}
                      </Link>
                    ))}
                  </Styles.LinkGroup>
                </Styles.LinkSection>

                <Styles.CopySection>
                  <Styles.Gaming>
                    <iframe
                      src="https://licensing.gaming-curacao.com/validator/?lh=9f83b305d6344e5c95267ec34f2d8789&template=tseal"
                      width={150}
                      height={50}
                      style={{ border: "none" }}
                      title="Valid Gaming License"
                    ></iframe>
                  </Styles.Gaming>

                  <div dangerouslySetInnerHTML={{ __html: fields.copy }} />
                </Styles.CopySection>
              </Theme.Wrap>
            </Styles.Footer>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Footer
