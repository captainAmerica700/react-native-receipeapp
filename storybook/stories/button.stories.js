// Button.stories.tsx
import React from 'react';
import Button from '../../src/components/button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button label="Click" onPress={() => console.log('clicked!')} />;
export const Disabled = () => <Button label="Disabled" onPress={null} />;
