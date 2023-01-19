import React from 'react';
import {StyleSheet, Text, Image, View, Modal, Button,SafeAreaView} from 'react-native';
import {Navicon, Wishlist} from '../assets/images';

const Navbar = () => {

    const rightButtonConfig = {
        title: 'Next',
        handler: () => alert('hello!'),
      };
      
      const titleConfig = {
        title: 'Hello, world',
      };


  return (
    <>
      <View style={styles.navbarmain} transparent={true}>
        <View style={styles.navbar_maindiv}>
          <View>
            <Image style={styles.menubar} source={Navicon} />
          </View>
          <View>
            <Image style={styles.Wishlist} source={Wishlist} />
          </View>
        </View>
      </View>

    </>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarmain: {
    position: 'relative',
  },
  navbar_maindiv: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menubar: {
    width: 35,
    height: 35,
    margin: 10,
  },
  Wishlist: {
    width: 35,
    height: 35,
    margin: 10,
  },
});
