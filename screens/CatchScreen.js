import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import BotIcons from '../assets/components/BotIcons';
import billBall from '../assets/icons/billBall.png';
import Mon1 from '../assets/mons/1.png';
import Mon2 from '../assets/mons/2.png';
import Mon5 from '../assets/mons/5.png';


const CatchScreen = () => {
  const navigation = useGlobalNavigation();

  const mons = [Mon1, Mon2, Mon5];

  return (
    <View style={styles.container}>
        <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={CameraType.back} />
            {/* replace 0 with index*/}
            <TouchableOpacity 
              style={[styles.image]}
              onPress={() => navigation.navigate("Quiz")}
            >
              <Image source={billBall} style={[styles.ball]}/>
            </TouchableOpacity>
        </View>

          <Image source={mons[0]} style={styles.monStyle} />

        <BotIcons />
    </View>
    )
  }
  
  export default CatchScreen;

  const styles = StyleSheet.create({
    // container style for the main view
    container: {
        flex: 1,
      },
      monStyle: {
        width: 300,
        height: 300,
        left: 50,
        top: 150,
        position: 'absolute',
      },
      cameraContainer: {
        flex: 1,
        position: 'relative',
      },
      camera: {
        flex: 1,
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'center',
        position: 'absolute',
        left: 20,
        bottom: '10%',
      },
      ball: {
        width: 200,
        height: 200,
        left: '90%',
        bottom: 0,
      },
      questionContainer: {
        backgroundColor: 'white',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      questionHeader: {
        fontSize: 24,
        position: 'absolute',
        top: "10%",
      },
      questionText: {
        fontSize: 24,
        padding: 20,
        position: 'absolute',
        top: "20%",
      },
      answerContainer: {
        width: '90%',
        padding: 10,
      },
  
  })