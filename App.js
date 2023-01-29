import * as React from 'react';
import {useEffect, setState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import { Camera } from 'expo-camera';

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
        <Stack.Screen name="Main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

