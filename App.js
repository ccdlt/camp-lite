import { StatusBar } from 'expo-status-bar';
import { CampsiteContext } from './context/CampsiteContext';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CampSite from './components/CampSite';
import NavBar from './components/NavBar';
import Example from './components/DummyData';
import * as Font from 'expo-font';



export default function App() {
  const [site, setSite] = useState({});
  console.log(site)


  const getCampgrounds = async () => {
    try {
      const res = await fetch('', {
        method: 'GET',
        headers: {
          Authorization: '5uugqjgh2na7ryetcs8kmqra',
        }
      });
      const json = await response.json();
      console.log(json)
    } catch (error) {
      console.log('That dun work', error);
    }
  };


  useEffect(() => {
    getCampgrounds();
  });


  return (
    // <CampsiteContext.Provider value={[site, setSite]}>
      <ImageBackground source={require('./bbg.jpg')} style={styles.image}>
          <View style={styles.container}>
            {/* <Example /> */}
            <Text style={styles.title}>HELLO WORLD</Text>
            <NavBar />
            <StatusBar style="auto" />
            <CampSite />
            <CampSite />
            <CampSite />
          </View>
        </ImageBackground>
    // </CampsiteContext.Provider>
  );
}

const titles = require('./assets/fonts/VastShadow-Regular.ttf')

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
    fontFamily: titles,
    color: 'black',
    fontSize: 96,
  }

});
