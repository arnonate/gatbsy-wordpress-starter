import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

type ComponentProps = {
  data?: Readonly<DataProps>
  description?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  title: string
}

export const SeoComponent = ({
  description = "",
  meta = [],
  title,
  data,
}: Readonly<ComponentProps>): JSX.Element => {
  const metaDescription: string | undefined =
    description || data?.site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${data?.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
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
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
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
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return <SeoComponent {...props} data={data} />
}

export default Seo
