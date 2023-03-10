import { StyleSheet, Text, View, Image,ImageBackground, Button } from 'react-native';
import React from 'react';
import prof from "../assets/icons/prof.png";
import caphill from "../assets/icons/backgroundSplash.png"
import useGlobalNavigation from '../assets/components/Navigation'
import { incrementGameloopVariable, gameloopVariable } from '../assets/components/GameloopVariable'
import inventory from '../assets/components/Inventory';

import Mon1 from '../assets/mons/1.png';
import Mon2 from '../assets/mons/2.png';
import Mon3 from '../assets/mons/3.png';
import Mon4 from '../assets/mons/4.png';
import Mon5 from '../assets/mons/5.png';
import Mon6 from '../assets/mons/6.png';
import Mon7 from '../assets/mons/7.png';
import Mon8 from '../assets/mons/8.png';
import Mon9 from '../assets/mons/9.png';
import Mon10 from '../assets/mons/10.png';

const Mon = {
  0: Mon1,
  1: Mon2,
  2: Mon3,
  3: Mon4,
  4: Mon5,
  5: Mon6,
  6: Mon7,
  7: Mon8,
  8: Mon9,
  9: Mon10
}

const CongratsScreen = () => {
  const Navigation = useGlobalNavigation();

    let congrats = ["Good job you caught that governmon! Lets go see what the next amendment Professor Washington wants to give us is.",
    "You caught all the amendments! Now you know that you have rights! I have a secret. I am secertly George Washingtons Decendent. On behalf of him i than you."]
    

    return (
        <View style={styles.container}>
                <ImageBackground source={caphill} resizeMode="cover" style={styles.image}>
                <Image style={styles.tinyimg} source={prof}/>
                <View style={styles.textbox}/>
                <View style={styles.bubble}/>
                <View style={styles.select}>
                

                </View>
                <Button
                            title="Go find out about the next amendment"
                            onPress={() => {
                              Navigation.replace("Main");
                              inventory.addMonToInventory(`Mon${gameloopVariable}`, Mon[gameloopVariable]);
                              incrementGameloopVariable()
                            }} 
                        />
                <Text style={styles.Texting}>
            
        
        
           
                    {gameloopVariable === 10 ? congrats[1] : congrats[0]} 

                </Text>
                </ImageBackground>
            

        </View>
      )
// red border blue background white text

}
export default CongratsScreen;

const styles = StyleSheet.create({
    Texting: {
        bottom: -150,
        //middle: -250,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  textbox: {
    position: 'absolute',
    width: 412,
    height: 200,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    bottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:
  {
    position: 'absolute',
    bottom: -825,
    width: 412,
    height: 810,
    backgroundColor:'blue',
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,



},
buffer:
{
    position: 'absolute',
    top: -15,
    width: 411,
    height: 110,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,

},
bubble:
{
    position: 'absolute',
    width: 409,
    height: 160,
    backgroundColor: 'white',
    bottom: 40,
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,

},
tinyimg: {
    width: 250,
    height: 250,
    right: -200,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 412 ,
  },

select:
{
    position: 'absolute',
    width: 412,
    height: 40,

    backgroundColor: 'blue',
    bottom: -10,
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,


},
Touch:
{
    bottom: -345,
    //middle: -250,
    textAlign: 'center',
    fontSize: 20,
    color: "yellow",
    fontWeight: '500',
},

})