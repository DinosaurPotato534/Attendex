import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, Button,  } from 'react-native';


export default function App() {
  console.log("App executed");
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Image style={styles.polygon} source={require("./assets/logo_.png")} />
      <Text style={styles.name}>attendex</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    top: 177,
    left: 17,
  },

  welcome: {
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 551,
    left: 98,
    fontWeight: '600',
    marginTop: 20,
  },

  name: {
    color: 'white',
    fontFamily: 'lexend-semi-bold',
    fontSize: 16,
    fontWeight: '300',
    height: 26,
    width: 290,
    top: 605,
    left: 50,
    marginTop: 20,
  },
});
