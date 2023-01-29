import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import useGlobalNavigation from './Navigation';
import inventoryIcon from '../icons/inventory.png'
 
const TopIcons = () => {
  const navigation = useGlobalNavigation();

  //handles navigation to inventory screen
  const handleInventory = () => {
    navigation.navigate("Inventory");
  };

  const styles = StyleSheet.create({
    inventoryButton: {
        position: 'absolute',
        left: 30,
        top: 60,
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