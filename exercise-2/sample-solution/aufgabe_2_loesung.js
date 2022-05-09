import * as React from 'react';
import { View, Text, StyleSheet, Platform, Image} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Howdy
      </Text>
      <Text style={styles.paragraph}>
      Dies ist ein Beispieltext. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
      </Text>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      // android or iOS
      ios: {
        flex: 1,
        backgroundColor: 'black',
        padding: 40,  
      },
      default: {
        // web
        textAlign: 'center',
        padding: 20,
        borderWidth: 10,
        borderColor: 'lightblue',
      }
    })
  },
  heading: {
    fontSize: 40,
     ...Platform.select({  
      // android or iOS
      ios: {
        color: 'white',
        marginBottom: 20,
      },
      default: {
        // web
        color: 'lightblue',
        textTransform: 'uppercase',
        lineHeight: 100,
      }
    })
  },
  paragraph: {
    lineHeight: 30,
    ...Platform.select({
      // android or iOS
      ios: {
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
      },
      default: {
        // web
        color: 'purple',
      }
    })
  },
  image: {
      width: 200,
      height: 200,
       ...Platform.select({
      default: {
        // web
        marginHorizontal: 'auto'
      }
    })    
  },
});

