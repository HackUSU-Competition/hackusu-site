// Stuff to allow Gatsby to recognize absolute imports
const fs = require("fs")
const path = require("path")

const srcDirs = fs.readdirSync(path.resolve(__dirname, "src"))

const rootDirsConfig = {}

srcDirs.forEach((srcDir) => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, "src", srcDir)
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.hackusu.com`
  },
  // pathPrefix: "/hackusu-site",
  // pathPrefix: "/",
  plugins: [
    "gatsby-plugin-mantine",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-root-import",
      options: rootDirsConfig
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/src/images/event-photos`,
        name: "eventPhotos"
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.hackusu.com`
      }
    }
  ]
}
