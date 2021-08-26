import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

const CampSite = ({props}) => {
  // console.log('campprops', props)
  console.log('campprops', props['$'])

  return(
    <View style={styles.container}>
      <ScrollView>
      <Text>
      {props['$'].facilityName}
      {"\n"}
      {"\n"}
      <View style={styles.image}>
        <Image source={{uri:`https://www.reserveamerica.com/webphotos/ELSI/pid740253/0/80x53.jpg`,}} />
      </View>
      {props['$'].latitude}
      {props['$'].longitude}
      </Text>

      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 200,
    marginTop: '5%',
    borderWidth: 2,
    borderRadius: 5,
  },
  image: {

    width: 50,
    height: 50,
  }
})

export default CampSite;