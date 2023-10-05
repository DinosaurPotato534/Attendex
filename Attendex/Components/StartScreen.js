import React from 'react';
import { StatusBar } from 'expo-status-bar';
import StartScreen from './StartScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <StartScreen />
    </>
  );
}
