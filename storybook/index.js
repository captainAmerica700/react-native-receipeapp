import Storybook from '@storybook/react-native';
const { getStorybookUI, configure } = Storybook;
import ReactNative from 'react-native';
import appConfig from '../app.json' assert { type: 'json' };
const { AppRegistry } = ReactNative;
// Auto-load stories (async import in ESM)
configure(() => {
  import('./stories/index.js'); // Update the path if your stories are in a folder
}, module);

// Storybook UI setup
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// Register Storybook as the main app
AppRegistry.registerComponent(appConfig.name, () => StorybookUIRoot);

export default StorybookUIRoot;
