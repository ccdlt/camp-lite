import { StatusBar } from 'expo-status-bar';
import { CampsiteContext } from './context/CampsiteContext';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Search from './components/Search';
import NavBar from './components/NavBar';
import Example from './components/DummyData';
import * as Font from 'expo-font';
// import S from './components/test';



export default function App() {
  const [site, setSite] = useState({});
  console.log(site)





  // useEffect(() => {
  //   getCampgrounds();
  // });


  return (
    // <CampsiteContext.Provider value={[site, setSite]}>
      <ImageBackground source={require('./bbg.jpg')} style={styles.image}>
          <View style={styles.container}>
            {/* <Example /> */}
            <Text style={styles.title}>CampLite</Text>
            <NavBar />
            <StatusBar style="auto" />
            <Search />
          </View>
        </ImageBackground>
    // </CampsiteContext.Provider>
  );
}

// const titles = require('./assets/fonts/VastShadow-Regular.ttf')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title: {
    // fontFamily: require('./assets/fonts/VastShadow-Regular.ttf'),
    color: 'black',
    fontSize: 96,
  }

});
