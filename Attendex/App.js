import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions,  } from 'react-native';


<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend&family=Space+Mono&display=swap');
</style>

export default function App() {
  console.log("App executed");
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
welcome: {
  color: 'white',
  width: 194,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 40,
  fontFamily: 'Lexend',
  paddingTop: 0},




  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 