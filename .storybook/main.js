const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        esModuleInterop: true,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        // Filter props so that only chakra-ui props are showing in the docs. (e.g. no html attributes props and no styled system props.)
        prop.parent !== undefined &&
        prop.parent.fileName.includes('node_modules') &&
        prop.parent.fileName.includes('node_modules/@chakra-ui/') &&
        !prop.parent.fileName.includes('node_modules/@chakra-ui/react/') &&
        !prop.parent.fileName.includes(
          'node_modules/@chakra-ui/styled-system/',
        ),
    },
  },
  webpackFinal: async config => {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: [],
    });

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    return config;
  },
};
