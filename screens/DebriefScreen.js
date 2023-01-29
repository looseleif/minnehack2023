import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import React from 'react';
import prof from "../assets/prof.png";
import caphill from "../assets/backgroundSplash.png"
import inventory from "../assets/inventory.png"
const DebriefScreen = () => {

    let curAmendmentnum = 0;
    let curAmendment = ''
    let storeAmend = ["This amendment gives you  the power of  expression. This means the citizens of the United states can freely express their beliefs openly. This is your first mission so please approach carefully. The amendments only befriend people who remember them!", " This amendment guarantees the right to bear arms. Not actual bear arms silly! This means that people in the United States have the right to own  weapons for protection and hunting. Beware of the bear!", "This amendment allows us the right to stay silent in court if a citizen doesn’t want to testify. Don’t be mad if this one doesn’t respond to you he’s kind of a mute. Remember kids, better call saul!"]
    let caught = false
    let i = 0
    if (caught == true){
        storeAmend[i] += 1


      }



    return (
        <View style={styles.container}>
                <ImageBackground source={caphill} resizeMode="cover" style={styles.image}>
                <Image style={styles.tinyimg} source={prof}/>
                <View style={styles.textbox}/>
                <View style={styles.buffer}/>
                <View style={styles.bubble}/>
                <View style={styles.select}>
                

                </View>
                <Image style={styles.imagebag} source={inventory}/>
                <Text style={styles.Touch}> Touch! </Text>
            
                <Text style={styles.Texting}>
            
        
        
           
                    {storeAmend[i]} 

                </Text>
                </ImageBackground>
            

        </View>
      )
// red border blue background white text

}
export default DebriefScreen;

const styles = StyleSheet.create({
    Texting: {
        fontFamily: 'sans-serif',
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
    fontFamily: 'sans-serif',
    bottom: -345,
    //middle: -250,
    textAlign: 'center',
    fontSize: 20,
    color: "yellow",
    fontWeight: '500',
},
imagebag: {
    width: 50,
    height: 50,
    //resizeMode: 'center',
    position: 'absolute',
    left: 10,
    top: 40,
  },


})