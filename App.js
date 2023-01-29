import * as React from 'react';
import { useEffect, setState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';
import QuizScreen from './screens/QuizScreen';
import CatchScreen from './screens/CatchScreen';
import { Camera } from 'expo-camera';
import { Accelerometer } from 'expo-sensors';
import { Audio } from 'expo-av';

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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={HomeScreen}/>
        <Stack.Screen name="Inventory" component={InventoryScreen}/>
        <Stack.Screen name="Catch" component={CatchScreen}/>
        <Stack.Screen name="Quiz" component={QuizScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

