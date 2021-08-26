import { StatusBar } from 'expo-status-bar';
import { CampsiteContext } from './context/CampsiteContext';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground, Dimensions, View } from 'react-native';
import Search from './components/Search';
import NavBar from './components/NavBar';
import Example from './components/DummyData';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  const [site, setSite] = useState({});
  const campIcon = <Icon name='map-marked' size={30} color="black" />;



  return (
    // <CampsiteContext.Provider value={[site, setSite]}>
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.bgcontainer}>
          <ImageBackground source={require('./bbg.jpg')} style={styles.image}>

              <Text style={styles.title}>CampLite</Text>
              <StatusBar style="auto" />
              <Search />
          </ImageBackground>
          </View>
        </View>
      </NavigationContainer>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  title: {
    fontFamily: 'Verdana-Bold',
    textAlign: 'center',
    color: 'beige',
    fontSize: 70,
    paddingTop: '22%',
    shadowColor: 'grey',
  },
  bgcontainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

});
