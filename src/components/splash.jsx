import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import {logo} from '../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Splash = props => {
  const {navigation} = props;
  const [value, setValue] = useState('');
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  // console.log("value:- ", value);

  const getValue = async () => {
    await AsyncStorage.getItem('user').then(val => {
      if (val !== null) {
        navigation.navigate('HOMEPAGE');
        // console.log("home");
      } else {
        navigation.navigate('WELCOME');
        // console.log("else");
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getValue();
    }, 2000);
  }, []);

  // useEffect(() => {
    // setTimeout(() => {
     
    // }, 3000);
  // }, [value]);

  return (
    <>
      <View style={styles.Splashdiv}>
        <Animated.Image source={logo} style={[styles.logoimage]} />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoimage: {
    width: 200,
    height: 200,
  },
  Splashdiv: {
    height: screenHeight,
    width: screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
