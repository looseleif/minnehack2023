import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import useGlobalNavigation from './Navigation';
import backIcon from '../icons/back.png'
 
const BotIcons = () => {
  const navigation = useGlobalNavigation();

  //handles navigation to inventory screen
  //TODO: change to "Debrief" screen
  const handleInventory = () => {
    navigation.navigate("Main");
  };

  const styles = StyleSheet.create({
    inventoryButton: {
        position: 'absolute',
        left: 30,
        bottom: 60,
      },
  });
  
  return (
    <TouchableOpacity 
    style={styles.inventoryButton}
    onPress={() => handleInventory()}
    >
    <Image source={backIcon} style={{maxWidth:80, maxHeight: 80}}/>
    </TouchableOpacity>
  );
};

export default BotIcons;