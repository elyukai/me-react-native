import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function App () {
  return (
    <View>
      <Text>Howdy</Text>
      <Text>
        Dies ist ein Beispieltext. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
      </Text>
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
    </View>
  );
}
