import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function StartScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    loadCustomFont();
  }, []);

  async function loadCustomFont() {
    await Font.loadAsync({
      'lexend-semi-bold': require('../assets/fonts/Lexend-SemiBold.ttf'),
    });
    setFontLoaded(true);
  }

  return (
    <SafeAreaView style={styles.container} onTouchEnd={() => navigation.navigate('Account')}>
      {fontLoaded ? (
        <>
          <Image style={styles.polygon} source={require('../assets/logo_.png')} />
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.name}>Attendex</Text>
        </>
      ) : null}
      <View style={styles.bottomSubtext}>
        <Text style={styles.subtext}>Tap Anywhere To Continue</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
    marginTop: 10,
  },

  subtext: {
    color: 'white',
  },

  bottomSubtext: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
});
