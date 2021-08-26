//To be implemented
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const NavBar = () => {
  return(
    <View style={styles.container}>
      <Text>
      HELLO NAVBAR

      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: 'flex-start',
  }
})

export default NavBar;