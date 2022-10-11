// Stuff to allow Gatsby to recognize absolute imports
const fs = require('fs');
const path = require('path');

const srcDirs = fs.readdirSync(path.resolve(__dirname, 'src'));

const rootDirsConfig = {};

srcDirs.forEach((srcDir) => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, 'src', srcDir);
});

module.exports = {
  // pathPrefix: "/hackusu-site",
  // pathPrefix: "/",
  plugins: [
    'gatsby-plugin-mantine',
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootDirsConfig,
    },
  ],
};
