import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function LandingEvening() {
  const [fontLoaded, setFontLoaded] = useState(false);

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
    <SafeAreaView style={styles.container}>
      {fontLoaded && (
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/evening.png')}
            style={styles.image}
          />
          <Text style={styles.overlayText}>Good Evening</Text>
          <Text style={styles.belowText1}>10/8/23</Text>
          <Text style={styles.belowText}>Have a great night!</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.23,
    borderRadius: 10,
  },
  overlayText: {
    position: 'absolute',
    top: 20,
    fontSize: 45,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
  },
  belowText1: {
    position: 'absolute',
    top: 75,
    fontSize: 50,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
  },
  belowText: {
    position: 'absolute',
    top: 150,
    fontSize: 20,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
  },
});
