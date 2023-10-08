import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    loadCustomFont();
    updateTimeOfDay();
  }, []);

  async function loadCustomFont() {
    await Font.loadAsync({
      'lexend-semi-bold': require('../assets/fonts/Lexend-SemiBold.ttf'),
    });
    setFontLoaded(true);
  }

  function updateTimeOfDay() {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      // Morning (5:00 AM to 11:59 AM)
      setTimeOfDay('morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      // Afternoon (12:00 PM to 5:59 PM)
      setTimeOfDay('afternoon');
    } else {
      // Evening (6:00 PM to 4:59 AM)
      setTimeOfDay('evening');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {fontLoaded && (
        <View style={styles.wrapper}>
          <Landing timeOfDay={timeOfDay} />
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
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  landingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredImage: {
    alignItems: 'center',
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

function Landing({ timeOfDay }) {
  const morningContent = {
    imageSource: require('../assets/sunrise.png'),
    greeting: 'Good Morning',
    date: '10/8/23',
    message: 'Have a great day!',
  };

  const afternoonContent = {
    imageSource: require('../assets/afternoon.png'),
    greeting: 'Good Afternoon',
    date: '10/8/23',
    message: 'Have a great day!',
  };

  const eveningContent = {
    imageSource: require('../assets/evening.png'),
    greeting: 'Good Evening',
    date: '10/8/23',
    message: 'Have a great night!',
  };

  const content =
    timeOfDay === 'morning'
      ? morningContent
      : timeOfDay === 'afternoon'
      ? afternoonContent
      : eveningContent;

  return (
    <View style={[styles.landingContainer, styles.centeredImage]}>
      <Image source={content.imageSource} style={styles.image} />
      <Text style={styles.overlayText}>{content.greeting}</Text>
      <Text style={styles.belowText1}>{content.date}</Text>
      <Text style={styles.belowText}>{content.message}</Text>
    </View>
  );
}
