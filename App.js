import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground, Dimensions, View } from 'react-native';
import Search from './components/Search';
import NavBar from './components/NavBar'; //To Be Implemented
import { NavigationContainer } from '@react-navigation/native'; //To Be Implemented



export default function App() {
  const [site, setSite] = useState({});

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.bgcontainer}>
          <ImageBackground source={require('./bbg.png')} style={styles.image} >
            <Text style={styles.title}>CampLite</Text>
            <StatusBar style="auto" />
            <ScrollView>
              <Search />
            </ScrollView>
          </ImageBackground>
          </View>
        </View>
      </NavigationContainer>
  );
}

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
