import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const MainMenu = () => {
    return (
      <View style={styles.container}>
      <Text style={styles.Start,styles.button}>Start</Text>
      <Text style={styles.options, styles.button}>options</Text>
      </View>
    )
  }
  
  export default MainMenu;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  Start: 
  {
    position: 'absolute',
    //top: 50,
    //middle: 0,
    bottom: -250,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    //left: 50,
   // right: 0,
    color: "blue",
    opacity: 1.0,
    //height: '50%',
    //width: '50%',
    backgroundColor: "blue",
    borderTopColor: 'rgba(0, 0, 0, 1.0)',
    //width: '100%',
    height: '90%',
    
  },
  options: 
  {
    position: 'absolute',
    //top: 50,
    //middle: 0,
    bottom: -275,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    //left: 50,
   // right: 0,
    color: "blue",
    opacity: 1.0,
    //height: '50%',
    //width: '50%',
    //backgroundColor: "red",
    borderTopColor: 'rgba(0, 0, 0, 1.0)',
    //width: '100%',
    height: '90%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    
},
button: {
    backgroundColor: "red",
    width: '50%',
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
},



})