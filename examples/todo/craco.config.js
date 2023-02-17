const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const xHelpers = path.join(__dirname, 'node_modules/@xhelpers-front/react');

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig) => {
      webpackConfig.resolve.alias['@todo'] = path.resolve(__dirname, './src');

      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(xHelpers);
      }

      return webpackConfig;
    },
  },
  babel: {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: 'dev-only',
          labelFormat: '[local]',
        },
      ],
    ],
    plugins: ['@emotion/babel-plugin', 'add-react-displayname'],
  },
};
