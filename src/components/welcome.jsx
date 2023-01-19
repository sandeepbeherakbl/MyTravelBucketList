import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import {Loginimg} from '../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Welcome = () => {
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
            <Text style={styles.textthree}>Pack your things and make more memories outdoor</Text>
          </View>
          <View style={styles.styleLoginBtn}>
            <Button
            title="Lets Go" 
            color="#ff5c5c"
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
  textBox:{
    marginTop: 100,
  },
  textone: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texttwo:{
    color: 'white',
    fontSize: 28,
    marginTop: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  textthree:{
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
});
