import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadCustomFont();
  }, []);

  async function loadCustomFont() {
    await Font.loadAsync({
      'lexend-semi-bold': require('./assets/fonts/Lexend-SemiBold.ttf'),
    });
    setFontLoaded(true);
  }

  return (
    <View style={styles.container}>
      {fontLoaded ? (
        <>
          <Image style={styles.polygon} source={require('./assets/logo_.png')} />
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.name}>Attendex</Text>
          <Button style={styles.next}></Button>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
  },

  polygon: {
    width: 365.54,
    height: 309,
  },

  welcome: {
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 40,
    fontWeight: '600',
    marginTop: 20,
  },

  name: {
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 16,
    fontWeight: '300',
    marginTop: 20,
  },

  next: {
    
    
    
  }
});
