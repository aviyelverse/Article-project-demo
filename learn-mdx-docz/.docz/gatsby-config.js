const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Documentation',
    description: 'This is documentation site built using Docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Documentation',
        description: 'This is documentation site built using Docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz',
          templates:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\node_modules\\docz-core\\dist\\templates',
          docz:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz',
          cache:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\.cache',
          app:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\app',
          appPackageJson:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\package.json',
          appTsConfig:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\tsconfig.json',
          gatsbyConfig:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\gatsby-browser.js',
          gatsbyNode:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\gatsby-node.js',
          gatsbySSR:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\gatsby-ssr.js',
          importsJs:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\app\\imports.js',
          rootJs:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\app\\index.html',
          db:
            'D:\\AviyelDemo\\ArticleProjectDemo\\Article-project-demo\\learn-mdx-docz\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
