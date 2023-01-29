import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import useGlobalNavigation from './Navigation';
import inventoryIcon from '../icons/inventory.png'
 
const TopIcons = () => {
  const navigation = useGlobalNavigation();

  //handles navigation to inventory screen
  const handleInventory = () => {
    navigation.replace("Inventory");
  };

  const styles = StyleSheet.create({
    inventoryButton: {
        width: 50,
        height: 50,
        //resizeMode: 'center',
        position: 'absolute',
        left: 10,
        top: 40,
      },
  });
  
  return (
    <TouchableOpacity 
    style={styles.inventoryButton}
    onPress={() => handleInventory()}
    >
    <Image source={inventoryIcon} />
    </TouchableOpacity>
  );
};

export default TopIcons;