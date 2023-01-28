import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    // render the map view with current location marker
    return (
      <View style={styles.container}>
        <Text>Welcome to the app! this is mainscreen</Text>
      </View>
    )
  }
  
  export default HomeScreen;


const styles = StyleSheet.create({
    // container style for the main view
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});