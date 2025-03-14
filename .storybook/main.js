const path = require('path');
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  "webpackFinal": async (config, {
    configType
  }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};