import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
      <Text style={[styles.start, styles.buttonText]}>Start</Text>
      <Text style={[styles.options, styles.buttonText]}>options</Text>
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
    Start: 
    {
      position: 'absolute',
      top: 0,
      middle: 1,
      bottom: 0,
      left: 0,
      right: 0,
     //alignItems: 'center',
      color: "blue",
      
      opacity: 1.0,
      //width: '100%',
      //height: '10%',
      backgroundColor: "red",
      borderTopColor: 'rgba(0, 0, 0, 0.3)',
    },
    options: 
    {
      position: 'absolute',
      top: 0,
      middle: 1,
      bottom: 0,
      left: 0,
      right: 0,
     //alignItems: 'center',
      color: "blue",
      
      opacity: 1.0,
      //width: '100%',
      height: '95%',
      backgroundColor: "red",
      borderTopColor: 'rgba(0, 0, 0, 0.3)',
    },
    buttonText: {
      color: 'white',
      fontWeight: '400',
      fontSize: 16,
      
  },
  
  
  })
