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
    title: 'Kerberos.io',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          colors: {
            primary: '#943733',
            secondary: '#9e9e9e',
            h5: { color: '#943733' },
            header: { bg: '#943733' },
            sidebar: { bg: '#f9f9f9', navLinkActive: '#943733' },
            modes: {
              dark: {
                primary: '#9e9e9e',
                secondary: '#943733',
                header: { bg: '#943733' },
                sidebar: { navLinkActive: '#fff' },
              },
            },
          },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          'Introduction',
          'How it works',
          'Architectures',
          {
            name: 'Open Source (v2)',
            menu: [
              'First things first',
              'Get Started',
              'Installation',
              'Installation - Advanced',
              'Releases',
              'License',
              'Upgrade',
              'Contribute',
              'Machinery',
              'Web',
            ],
          },
          'Open Source (v3)',
          {
            name: 'Enterprise',
            menu: [
              'First things first',
              'Get Started',
              'Installation',
              'Installation - Cloud',
              'Installation - Edge',
              'Releases',
            ],
          },
          {
            name: 'Storage',
            menu: [
              'First things first',
              'Get Started',
              'Installation',
              'Installation - Cloud',
              'Installation - Edge',
              'Installation - Recycle',
              'Installation - Providers',
              'License',
            ],
          },
          'Cloud',
        ],
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
        root: '/Users/i353408/Vagrant/www/repos/documentation/.docz',
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
        title: 'Kerberos.io',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/i353408/Vagrant/www/repos/documentation',
          templates:
            '/Users/i353408/Vagrant/www/repos/documentation/node_modules/docz-core/dist/templates',
          docz: '/Users/i353408/Vagrant/www/repos/documentation/.docz',
          cache: '/Users/i353408/Vagrant/www/repos/documentation/.docz/.cache',
          app: '/Users/i353408/Vagrant/www/repos/documentation/.docz/app',
          appPackageJson:
            '/Users/i353408/Vagrant/www/repos/documentation/package.json',
          appTsConfig:
            '/Users/i353408/Vagrant/www/repos/documentation/tsconfig.json',
          gatsbyConfig:
            '/Users/i353408/Vagrant/www/repos/documentation/gatsby-config.js',
          gatsbyBrowser:
            '/Users/i353408/Vagrant/www/repos/documentation/gatsby-browser.js',
          gatsbyNode:
            '/Users/i353408/Vagrant/www/repos/documentation/gatsby-node.js',
          gatsbySSR:
            '/Users/i353408/Vagrant/www/repos/documentation/gatsby-ssr.js',
          importsJs:
            '/Users/i353408/Vagrant/www/repos/documentation/.docz/app/imports.js',
          rootJs:
            '/Users/i353408/Vagrant/www/repos/documentation/.docz/app/root.jsx',
          indexJs:
            '/Users/i353408/Vagrant/www/repos/documentation/.docz/app/index.jsx',
          indexHtml:
            '/Users/i353408/Vagrant/www/repos/documentation/.docz/app/index.html',
          db:
            '/Users/i353408/Vagrant/www/repos/documentation/.docz/app/db.json',
        },
        repository: 'https://github.com/kerberos-io',
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-vscode' },
          { resolve: 'gatsby-remark-grid-tables' },
          {
            resolve: 'gatsby-plugin-google-gtag',
            options: { trackingIds: ['UA-53584355-3'] },
          },
        ],
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
