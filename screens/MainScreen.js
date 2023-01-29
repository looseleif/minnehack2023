import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import TopIcons from '../assets/components/TopIcons';

const HomeScreen = () => {
  const navigation = useGlobalNavigation();

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera}
        type={CameraType.back}
      />
      <TopIcons />
    </View>
  )
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    // container style for the main view
    container: {
      flex:1
    },
    camera: {
      flex: 1,
    },
  
  })
