import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Camera 
          style={{flex:1}}
          type={CameraType.back}
        />
      </View>
    )
  }
  
  export default HomeScreen;


const styles = StyleSheet.create({
    // container style for the main view
    container: {
        flex:1
    },
});