import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useStudentContext } from './StudentContext'; // Import the context hook
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('');
  const { studentInfo } = useStudentContext(); // Get student information from the context

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

  // Use the studentInfo object to populate the student data
  const studentName = studentInfo ? studentInfo.name : 'name';
  const studentID = studentInfo ? studentInfo.studentID : 'studentID';
  const studentGrade = studentInfo ? studentInfo.grade : 'grade';

  return (
    <SafeAreaView style={styles.container}>
      {fontLoaded && (
        <View style={styles.wrapper}>
          <Landing timeOfDay={timeOfDay} />
          <View style={styles.IDContainer}>
            <View style={styles.gradientContainer}>
              <LinearGradient
                colors={[
                  '#5EE3FE',
                  '#65D7FE',
                  '#6CCCFE',
                  '#73C0FE',
                  '#7AB4FE',
                  '#81A9FE',
                  '#889DFE',
                  '#8F92FE',
                  '#9586FE',
                  '#9C7AFF',
                  '#A36FFF',
                  '#AA63FF',
                  '#B158FF',
                  '#B84CFF',
                  '#BF40FF',
                  '#C635FF',
                  '#CD29FF',
                ]}
                style={styles.IDImg}
              />
              <LinearGradient
                colors={['rgba(217, 217, 217, 0.50)', 'rgba(217, 217, 217, 0.25)']}
                start={[0, 0.5]}
                end={[1, 0.5]}
                style={styles.glassGradient}
              />
            </View>
            <Text style={styles.IDText}>{studentName}</Text>
            <Text style={styles.additionalText}>{studentID}</Text>
            <Text style={styles.bottomRightText}>Grade {studentGrade}</Text>
          </View>
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
    marginTop: 30,
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
  IDContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  gradientContainer: {
    position: 'relative',
  },
  IDImg: {
    width: 350,
    height: 500,
    borderRadius: 20,
  },
  glassGradient: {
    width: 350,
    height: 500,
    borderRadius: 20,
    position: 'absolute',
  },
  IDText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    position: 'absolute',
    top: 180,
  },
  additionalText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    position: 'absolute',
    top: 220,
  },
  bottomRightText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    position: 'absolute',
    bottom: 20,
    right: 20,
    marginBottom: 10,
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
    <>
      <View style={[styles.landingContainer, styles.centeredImage]}>
        <Image source={content.imageSource} style={styles.image} />
        <Text style={styles.overlayText}>{content.greeting}</Text>
        <Text style={styles.belowText1}>{content.date}</Text>
        <Text style={styles.belowText}>{content.message}</Text>
      </View>
    </>
  );
}
