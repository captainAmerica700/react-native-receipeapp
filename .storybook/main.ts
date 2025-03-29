module.exports = {
  stories: [
    // Recursively finds all stories in component folders
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    
    // If you also have stories at the root of components directory
    '../src/components/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {}
  },
  reactNativeServerOptions: {
    host: 'localhost',
    port: 7007
  },
  // Recommended additional configuration:
  core: {
    disableTelemetry: true, // Optional: Disables Storybook telemetry
  },
  features: {
    storyStoreV7: true, // Improves performance
  }
};