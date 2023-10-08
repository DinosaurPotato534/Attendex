import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import * as Font from 'expo-font';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';
import { useStudentContext } from './StudentContext';

const firebaseConfig = {
  // Your Firebase config here

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default function Account() {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const { setStudentInfo } = useStudentContext();

  useEffect(() => {
    loadCustomFont();
  }, []);

  async function loadCustomFont() {
    try {
      await Font.loadAsync({
        'lexend-semi-bold': require('../assets/fonts/Lexend-SemiBold.ttf'),
      });
      setFontLoaded(true);
    } catch (error) {
      console.error('Error loading custom font:', error);
    }
  }

  async function handleLogin() {
    try {
      console.log('Searching for student with ID:', studentID);

      const studentDoc = await db.collection('students').doc('students').get();

      if (studentDoc.exists) {
        const studentData = studentDoc.data();

        if (studentData.hasOwnProperty(studentID)) {
          const studentArray = studentData[studentID];

          if (studentArray.length >= 4) {
            const storedPassword = studentArray[3];

            if (storedPassword === password) {
              const studentInfo = {
                studentID: studentID,
                name: studentArray[1],
                status: studentArray[2],
                grade: studentArray[4],
              };

              setStudentInfo(studentInfo);

              console.log('Login successful for student:', studentID);

              navigation.navigate('Home');
            } else {
              console.log('Incorrect password');
            }
          } else {
            console.log('Invalid data structure for the student');
          }
        } else {
          console.log('Student not found');
        }
      } else {
        console.log('Document not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <ImageBackground
      source={require('../assets/ATTENDEX.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        {fontLoaded ? (
          <>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={styles.name}>Attendex</Text>
          </>
        ) : null}
        <View style={styles.main}>
          <TextInput
            style={styles.formEl}
            placeholder="Student ID"
            placeholderTextColor="#7D7D7D"
            onChangeText={(text) => setStudentID(text)}
            value={studentID}
          />
          <TextInput
            style={styles.formEl}
            placeholder="Password"
            placeholderTextColor="#7D7D7D"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.buttonEl} onPress={handleLogin}>
            <Text style={styles.buttonText}>Go!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 40,
    fontWeight: '600',
    marginTop: 30,
  },
  name: {
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
  },
  formEl: {
    width: 350,
    height: 70,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'rgba(29, 29, 29, 0.7)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 32,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonEl: {
    backgroundColor: 'white',
    width: 350,
    height: 70,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#090909',
    fontFamily: 'lexend-semi-bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
