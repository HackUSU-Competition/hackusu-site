import React, {FC} from "react"

const ogImage = require("images/social-preview.jpg").default
const favicon = require("images/favicon.jpg").default

const defaultDescription =
  "We're HackUSU, Utah's largest collegiate hackathon. Join hundreds of students and professionals at Utah State University for competitions and workshops related software, data analytics, hardware, and more!"

interface SEOProps {
  title?: string
  description?: string
}

export const SEO: FC<SEOProps> = (props) => {
  const {title, description = defaultDescription} = props

  return (
    <>
      <html lang="en" />
      <title>{title ? `${title} | HackUSU 2024` : `HackUSU 2024`}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#0b1928" />
      <link rel="icon" type="image/x-icon" href={favicon} />

      <meta property="og:title" content={title ?? "HackUSU 2024"} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="800" />
      <meta property="og:type" content="website" />
    </>
  )
}
