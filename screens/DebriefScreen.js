import { StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, Button} from 'react-native';
import React, { useEffect } from 'react';
import prof from "../assets/icons/prof.png";
import caphill from "../assets/icons/backgroundSplash.png"
import TopIcons from '../assets/components/TopIcons';
import useGlobalNavigation from '../assets/components/Navigation';
import introprompt from '../assets/introprompt.json';
import { gameloopVariable } from '../assets/components/GameloopVariable';

const DebriefScreen = () => {
    const navigation = useGlobalNavigation();

    let displayText = introprompt.prompt.map(prompt => {
      if (prompt.mon === gameloopVariable) {
          return prompt.text;
      }
    });

    return (
        <View style={styles.container}>
                <ImageBackground source={caphill} resizeMode="cover" style={styles.image}>
                <Image style={styles.tinyimg} source={prof}/>

                <View style={styles.textbox}/>
                <View style={styles.bubble}/>
                <View style={styles.select}>
                
                <Button
                            title="Lets catch 'em!"
                            onPress={() => navigation.replace("Catch")} 
                        />
                </View>
                 
                <TopIcons />
                

                
            
                <Text style={styles.Texting}>
          
                    {displayText} 

                </Text>
                
                </ImageBackground>
            

        </View>
      )
// red border blue background white text

}
export default DebriefScreen;

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
    width: 400,
},
imagebag: {
    width: 50,
    height: 50,
    //resizeMode: 'center',
    position: 'absolute',
    left: 10,
    top: 40,
  },
  button: {
    width:4000,
    height:4000
  }


})