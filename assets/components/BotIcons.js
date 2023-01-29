import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import useGlobalNavigation from './Navigation';
import backIcon from '../icons/back.png'
 
const BotIcons = () => {
  const navigation = useGlobalNavigation();
  
  const handleReturn = () => {
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
    onPress={() => handleReturn()}
    >
    <Image source={backIcon} style={{maxWidth:80, maxHeight: 80}}/>
    </TouchableOpacity>
  );
};

export default BotIcons;