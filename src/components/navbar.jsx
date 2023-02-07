import { log } from 'console';
import React from 'react';
import {StyleSheet, Text, Image, View, Modal, Button,SafeAreaView,TouchableOpacity} from 'react-native';
import {Navicon, Wishlist} from '../assets/images';

const Navbar = (props) => {
  const navigation = props;

  return (
    <>
       <View style={styles.navbarmain} transparent={true}>
              <View style={styles.navbar_maindiv}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate('HOMEPAGE')
                  }}>
                  <Image style={styles.menubar} source={Navicon} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate('MYPLAN')
                  }}>
                  <Image style={styles.Wishlist} source={Wishlist} />
                </TouchableOpacity>
              </View>
            </View>

    </>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar_maindiv: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: '100%',
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
