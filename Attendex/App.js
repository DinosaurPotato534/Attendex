import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; // Add useNavigation import
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Components/StartScreen';
import Account from './Components/Account';
import Home from './Components/Home';
import { StudentProvider, useStudentContext } from './Components/StudentContext';

const Stack = createStackNavigator();

function AppNavigation() {
  const { studentInfo } = useStudentContext();
  const navigation = useNavigation();

  useEffect(() => {
    if (studentInfo && studentInfo.name && studentInfo.status && studentInfo.studentID) {
      navigation.navigate('Home');
    }
  }, [studentInfo, navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <StudentProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </StudentProvider>
  );
}
