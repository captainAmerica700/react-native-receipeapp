import React from 'react';
import { Button, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('Button', module)
  .add('Default', () => (
    <View style={{ padding: 20 }}>
      <Button title="Click me" onPress={() => alert('Button clicked!')} />
    </View>
  ));
