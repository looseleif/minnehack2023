import * as React from 'react';
import {useEffect, setState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import { Camera } from 'expo-camera';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async() => {
    let { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      console.log("Permissions for the camera were not granted");
      return;
    } else {
      console.log("Permissions granted");
    }
  }

  return (
    <NavigationContainer>
      <View> style={styles.Start}
      <Text style={[styles.start, styles.buttonText]}>Start</Text>
      <Text style={[styles.options, styles.buttonText]}>options</Text>

      </View>   
     

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
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
