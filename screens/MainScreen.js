import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import inventoryIcon from '../assets/icons/inventory.png'

const HomeScreen = () => {
  const navigation = useGlobalNavigation();

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera}
        type={CameraType.back}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Inventory')}
      >
        <Image
          source={inventoryIcon}
        />
      </TouchableOpacity>
    </View>
  )
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    // container style for the main view
    container: {
      flex:1
    },
    button: {
      position: 'absolute',
      left: 30,
      top: 60,
    },
    camera: {
      flex: 1,
    },
  
  })
