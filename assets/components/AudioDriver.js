import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import useGlobalNavigation from './Navigation';
import { Audio } from 'expo-av';

const [sound, setSound] = React.useState();

export async function playSoundMain() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../sounds/main.wav')
    );
    setSound(sound);
  
    console.log('Playing Sound');
    await sound.playAsync();
}

// export async function playSoundSuspence() {
//   console.log('Loading Sound');
//   const { sound } = await Audio.Sound.createAsync( require('../sounds/tense.wav')
//   );
//   setSound(sound);

//   console.log('Playing Sound');
//   await sound.playAsync();
// }

// export async function playSoundError() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync( require('../sounds/error.wav')
//     );
//     setSound(sound);
  
//     console.log('Playing Sound');
//     await sound.playAsync();
//   }

// export async function playSoundWhoosh() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync( require('../sounds/whoosh.wav')
//     );
//     setSound(sound);
  
//     console.log('Playing Sound');
//     await sound.playAsync();
// }

// export async function playSoundGo() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync( require('../sounds/go.wav')
//     );
//     setSound(sound);
  
//     console.log('Playing Sound');
//     await sound.playAsync();
// }

React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

