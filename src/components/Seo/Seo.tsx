import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"

export type DataProps = {
  image: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      siteUrl: string
    }
  }
}

type ComponentProps = {
  data?: Readonly<DataProps>
  description?: string
  image?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  title?: string
}

export const SeoComponent = ({
  data,
  description = data?.site.siteMetadata.description || "",
  image = `${data?.site.siteMetadata.siteUrl || ""}${
    data?.image.childImageSharp.fixed.src || ""
  }`,
  meta = [],
  title = data?.site.siteMetadata.title || "",
}: Readonly<ComponentProps>): JSX.Element => {
  const combinedTitle = `${title} | ${data?.site.siteMetadata.title}`

  return (
    <Helmet
      title={combinedTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          itemProp: `name`,
          content: combinedTitle,
        },
        {
          itemProp: `description`,
          content: description,
        },
        {
          itemProp: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: combinedTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data?.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: combinedTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        ...meta,
      ]}
    />
  )
}

const Seo = (props: ComponentProps): JSX.Element => {
  const data = useStaticQuery<DataProps>(
    graphql`
      query {
        image: file(relativePath: { eq: "screenshot.png" }) {
          childImageSharp {
            fixed(width: 1200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
          }
        }
      }
    `
  )

  return <SeoComponent {...props} data={data} />
}

export default Seo
