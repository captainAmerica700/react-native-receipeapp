import { initialize, getStorybookUI } from '@storybook/react-native';
import { addons } from '@storybook/addons';
import { withActions } from '@storybook/addon-actions/decorator';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withControls } from '@storybook/addon-ondevice-controls';

// Load stories dynamically
const loadStories = () => {
  require('../components/Button.stories'); // Add more components here
};

// Initialize Storybook
initialize({ onDeviceUI: true });

// Add decorators
addons.setConfig({
  decorators: [withActions, withBackgrounds, withControls],
});

// Get Storybook UI
const StorybookUIRoot = getStorybookUI();

export default StorybookUIRoot;
