import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
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

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
  },
});
