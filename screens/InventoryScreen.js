import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import useGlobalNavigation from '../assets/components/Navigation';
import inventory from '../assets/components/Inventory';


const InventoryScreen = () => {

    const navigation = useGlobalNavigation();
    
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
        {/* adam */}
        </View>
        <ScrollView>
          <View style={styles.itemsContainer}>
            {inventory.items.map((item, index) => (
              <View key={index} style={styles.itemBox}>
                <Image source={item.image} style={styles.itemImage} />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={styles.buttonText}>Back to debrief!</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topBar: {
        height: 80,
        backgroundColor: '#f2f2f2',
        width: '100%',
      },
    itemsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25,
    },
    itemBox: {
      width: 100,
      height: 100,
      backgroundColor: '#f1f1f1',
      margin: 10,
    },
    itemImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        alignItems: 'center',
        width: '100%',
      },
      // style for buttons
      button: {
        backgroundColor: 'black',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      // style for button text
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
  });
  

export default InventoryScreen;
