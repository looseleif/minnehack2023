import { StyleSheet, View, Image, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import TopIcons from '../assets/components/TopIcons';
import billBall from '../assets/icons/billBall.png';

const QuizScreen = () => {
  const navigation = useGlobalNavigation();

  const [billBallRotation, setBillBallRotation] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      if (billBallRotation === 25) {
        setBillBallRotation(-25);
      } else {
        setBillBallRotation(25);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [billBallRotation]);

  return (
    <View style={styles.container}>
        <View style={styles.cameraContainer}>
            <Camera 
            style={styles.camera}
            type={CameraType.back}
            />
            <Image
            style={[styles.image, {transform: [{rotate: `${billBallRotation}deg`}]}]}
            source={billBall}
            />
        </View>
        <TopIcons />
        <View style={styles.questionContainer}>
            <Text style={styles.questionHeader}>The lawmon is resisting! It wants to know...</Text>
            <Text style={styles.questionText}>What is the capital of France?</Text>
            <View style={styles.answerContainer}>
                <Button title="Paris" />
                <Button title="Berlin" />
                <Button title="London" />
                <Button title="Rome" />
            </View>
        </View>
    </View>
    )
  }
  
  export default QuizScreen;

  const styles = StyleSheet.create({
    // container style for the main view
    container: {
        flex: 1,
      },
      cameraContainer: {
        flex: 1,
        position: 'relative',
      },
      camera: {
        flex: 1,
      },
      image: {
        width: '50%',
        height: '50%',
        resizeMode: 'center',
        position: 'absolute',
        left: '25%',
        top: '45%',
      },
      questionContainer: {
        backgroundColor: 'white',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      questionHeader: {
        fontSize: 24,
        position: 'absolute',
        top: "10%",
      },
      questionText: {
        fontSize: 24,
        padding: 20
      },
      answerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10
      }
  
  })