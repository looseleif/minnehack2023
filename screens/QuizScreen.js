import { StyleSheet, View, Image, Text, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import useGlobalNavigation from '../assets/components/Navigation';
import billBall from '../assets/icons/billBall.png';
import { gameloopVariable } from '../assets/components/GameloopVariable';

import QuestionFile1 from '../assets/quizComponents/question1.json';
import QuestionFile2 from '../assets/quizComponents/question2.json';
import QuestionFile3 from '../assets/quizComponents/question3.json';
import QuestionFile4 from '../assets/quizComponents/question4.json';
import QuestionFile5 from '../assets/quizComponents/question5.json';
import QuestionFile6 from '../assets/quizComponents/question6.json';
import QuestionFile7 from '../assets/quizComponents/question7.json';
import QuestionFile8 from '../assets/quizComponents/question8.json';
import QuestionFile9 from '../assets/quizComponents/question9.json';
import QuestionFile10 from '../assets/quizComponents/question10.json';


const QuizScreen = () => {
  const navigation = useGlobalNavigation();

  const questionFiles = [QuestionFile1, QuestionFile2, QuestionFile3, QuestionFile4, QuestionFile5, QuestionFile6, QuestionFile7, QuestionFile8, QuestionFile9, QuestionFile10]

  const [billBallRotation, setBillBallRotation] = useState(25);

  const handleAnswerPress = (isCorrect) => {
    if (isCorrect) {
        navigation.replace("Congrats");
    } else {
        navigation.replace("Catch");
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
        <View style={styles.questionContainer}>
            
              <Text style={styles.questionHeader}>The wild GOVERNMON is curious!
              </Text>
              <Text style={styles.questionText}>{questionFiles[gameloopVariable].question}</Text>
            
            <FlatList
                data={questionFiles[gameloopVariable].answers}
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
        textAlign: 'center',
        padding: 0
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
        padding: 5,
        backgroundColor: 'white',
        height: '35%',
      },
      questionHeader: {
        fontSize: 18,
        textAlign: 'center',
      },
      questionText: {
        fontSize: 18,
        textAlign: 'center',
        padding: 5,
      },
      answerContainer: {
        flexDirection: 'row',
        padding: 5
      },
  
  })