import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const CampSite = () => {
  return(
    <View style={styles.container}>
      <Text>

      HELLO FROM CAMPSITE
      </Text>
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
    borderWidth: 2,
    borderRadius: 20,
  }
})

export default CampSite;