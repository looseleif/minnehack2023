import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import TopIcons from '../assets/components/TopIcons';

const HomeScreen = () => {
  const navigation = useGlobalNavigation();

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back}/>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.replace('Quiz')}
      >
        <Text style={styles.buttonText}>Simulate Quiz</Text>
      </TouchableOpacity>
      <TopIcons />
    </View>
  )
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    // container style for the main view
    container: {
      flex:1,
    },
    camera: {
      flex: 1,
    },
    button: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    },
    backgroundSplash: {
      alignSelf: 'center',
      justifyContent: 'center'
    }
  
  })
