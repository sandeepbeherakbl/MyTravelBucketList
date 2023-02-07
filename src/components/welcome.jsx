import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Button,
  TextInput,
  Alert,
  BackHandler
} from 'react-native';
import {Loginimg} from '../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Welcome = (props) => {
  const {navigation} = props;
  const [userName , setUserName] = useState("")
  const [value, setValue] = useState('')
  const [name, setName] = useState(false)
  
  const saveValue = async (name) =>{
    if(name) {
      await AsyncStorage.setItem("user", name);
      setName(true)
    }else{
      alert('Enter Your Name')
    }
  }

  React.useEffect(() => {
    if(name){
      navigation.navigate('HOMEPAGE')
    }
  }, [name])

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={Loginimg}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.textBox}>
            <Text style={styles.textone}>Get Ready For</Text>
            <Text style={styles.texttwo}>New Adventure</Text>
            <Text style={styles.textthree}>
              Pack your things and make more memories outdoor
            </Text>
          </View>

          {/* Input Box */}
          <View style={styles.inputBox}>
            <TextInput 
              style={styles.input} 
              value={userName}
              onChangeText={(text) => {setUserName(text)}}
              placeholder="Enter Your First Name" 
            />
          </View>

          <View style={styles.styleLoginBtn}>
            <Button 
            onPress={
            //   () => {
            //   if(saveValue(userName)){
            //     // navigation.navigate('HOMEPAGE')
            //   }
            //   else{
            //     alert('Enter Your Name')
            //   }
            // }
            () => {
              saveValue(userName)
            }
          }
            title="Lets Go" color="#ff5c5c" 
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
  },
  textBox: {
    marginTop: 100,
  },
  textone: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texttwo: {
    color: 'white',
    fontSize: 28,
    marginTop: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  textthree: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  styleLoginBtn: {
    marginLeft: 50,
    marginRight: 50,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  inputBox:{
    paddingTop: 100,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    // padding: 20,
    fontWeight: 'bold',
    borderColor: 'white',
    color: 'white',
  },
});
