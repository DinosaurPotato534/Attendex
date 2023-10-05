import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image,  } from 'react-native';


export default function App() {
  console.log("App executed");
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Image style={styles.polygon} source={require("./assets/logo_.png")} />
      <Text style={styles.name}>Attendex</Text>
    </View>
    
  );
}


const styles = StyleSheet.create({
  name: {
    color: #FFFFFF,
    fontFamily: 'lexend',
    fontWeight: 300,
    fontSize: 16,
    height: 26,
    alignContent: 'center',
    justifyContent: 'center',
    width: 290,
    top: 605,
    left: 50,

  },




  polygon: {
    width: 365.54,
    height: 309,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },




  welcome: {
    color: 'white',
    width: 194,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontFamily: 'lexend',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
},


  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 