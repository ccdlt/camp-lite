import React from 'react';
import { Pressable, View, Image, StyleSheet, Text, ScrollView, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const CampSite = ({props}) => {
  console.log('campprops', props['$'])

  const urlTransform = (name, facID) => {
    let facilityId = Number(facID)
    let hyphenated = name.split(' ').join('-').toLowerCase();
    let base = `https://reserveamerica.com/explore/${hyphenated}/${props['$'].contractID}/${facilityId}/overview`;
    return base;
  }

  const handlePress = () => {
    const link = urlTransform(props['$'].facilityName, props['$'].facilityID);
    // WebBrowser.openBrowserAsync(link);
    Linking.openURL(link);
  }

  return(
    <View style={styles.container}>
      <View style={styles.site}>
        <Pressable
          onPress={handlePress}>
          <ScrollView>
          <Text style={{fontSize: 20, fontFamily: 'Tahoma-Bold', marginBottom: 10,}}>
          {props['$'].facilityName}
          {"\n"}
          </Text>
          <Text>
          <View style={styles.image}>
            <Image source={{uri: require('../assets/stockImages/autumn.png'), width: 100, height: 50, marginTop: 5, marginBottom: 10}} />
          </View>
          {"\n"}
          <Text>Pets Allowed? </Text>{props['$'].sitesWithPetsAllowed}
          {"\n"}
          {props['$'].latitude}
          {"\n"}
          {props['$'].longitude}
          </Text>
          </ScrollView>
        </Pressable>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    width: 200,
    marginTop: '5%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius:20,
  },
  site: {
    margin: 10,
    marginLeft: 10,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  }
})

export default CampSite;
