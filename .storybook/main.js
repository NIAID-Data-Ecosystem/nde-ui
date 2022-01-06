module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: [],
    });

    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    return config;
  },
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
        (!prop.parent.fileName.includes('node_modules') ||
          (prop.parent.fileName.includes('node_modules') &&
            prop.parent.fileName.includes('node_modules/@chakra-ui/') &&
            !prop.parent.fileName.includes(
              'node_modules/@chakra-ui/styled-system',
            ) &&
            !prop.parent.fileName.includes('node_modules/@chakra-ui/system'))),
    },
  },
};
