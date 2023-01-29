import { StyleSheet, View, Image, Text, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import TopIcons from '../assets/components/TopIcons';
import billBall from '../assets/icons/billBall.png';
import QuestionFile1 from '../assets/quizComponents/question1.json';
import QuestionFile2 from '../assets/quizComponents/question2.json';
import QuestionFile3 from '../assets/quizComponents/question3.json';


const QuizScreen = () => {
  const navigation = useGlobalNavigation();

  const questionFiles = [QuestionFile1, QuestionFile2, QuestionFile3]

  const [billBallRotation, setBillBallRotation] = useState(25);

  const handleAnswerPress = (isCorrect) => {
    if (isCorrect) {
        console.log("correct answer!");
    } else {
        console.log("incorrect answer");
    }
  }

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
            <Camera style={styles.camera} type={CameraType.back} />
            <Image
            style={[styles.image, {transform: [{rotate: `${billBallRotation}deg`}]}]}
            source={billBall}
            />
        </View>
        <TopIcons />
        <View style={styles.questionContainer}>
            <Text style={styles.questionHeader}>The lawmon is resisting! It wants to know...</Text>
            <Text style={styles.questionText}>{questionFiles[0].question}</Text>
            <FlatList
                data={questionFiles[0].answers}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.answerContainer}>
                        <Button
                            title={item.text}
                            onPress={() => handleAnswerPress(item.isCorrect)} 
                        />
                    </View>
                )}
            />
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