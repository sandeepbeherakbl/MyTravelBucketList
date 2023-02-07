import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Daringbadi, Kedarnath} from '../assets/images/Myplans';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Navicon, Wishlist} from '../assets/images';
import Navbar from './navbar';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Myplan = props => {
  const {navigation} = props;
  return (
    <>
      <View style={{height: '100%', width: '100%'}}>
        <View style={styles.maindiv}>
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

        
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            pagingEnabled={true}>
            {/* img 1 */}
            <View style={styles.imgone}>
              <View style={styles.imagecont}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    height: '98%',
                    width: '98%',
                    marginLeft: '1%',
                    marginTop: '1%',
                  }}
                  source={Daringbadi}
                />
              </View>
              <View style={styles.imagecontent}>
                <View style={styles.contentdiv}>
                  <Text style={styles.titelcontent}>DARINGBADI</Text>
                  <Text style={styles.subcontent}>The kashmir of odisha</Text>
                  <Text style={styles.desccontent}>
                    Daringbadi is a hill station in Kandhmal district of Odisha
                    state in eastern India.
                  </Text>
                </View>
              </View>
              <View style={styles.expbutton}>
                <Button
                  color="rgb(41, 182, 246)"
                  onPress={() => {
                    navigation.navigate('ITERNARY');
                  }}
                  title="Explore"
                />
              </View>
            </View>

            <View style={styles.imgtwo}>
              <View style={styles.imagecont}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    height: '98%',
                    width: '98%',
                    marginLeft: '1%',
                    marginTop: '1%',
                  }}
                  source={Kedarnath}
                />
              </View>
              <View style={styles.imagecontent}>
                <View style={styles.contentdiv}>
                  <Text style={styles.titelcontent}>Kedarntah</Text>
                  <Text style={styles.subcontent}>
                    one of the 12 Jyotir Lingams
                  </Text>
                  <Text style={styles.desccontent}>
                    Kedarnath is a holy Hindu town located in Rudraprayag
                    district of Uttarakhand in India
                  </Text>
                </View>
              </View>
              <View style={styles.expbutton}>
                <Button color="rgb(41, 182, 246)" title="Coming Soon" />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Myplan;

const styles = StyleSheet.create({
  planpage: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: 'black',
  },
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
  maindiv: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
  },
  imgone: {
    width: screenWidth,
    height: screenHeight,
  },
  imgtwo: {
    width: screenWidth,
    height: screenHeight,
  },
  bgimage: {
    // borderRadius: 8,
  },
  titelcontent: {
    color: 'white',
    fontWeight: '900',
    fontSize: 32,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  subcontent: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  desccontent: {
    color: 'white',
    fontSize: 11,
    paddingBottom: 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imagecontent: {
    // marginLeft: '5%',
    // marginRight: '5%',
    // bottom: 100,
    position: 'absolute',
    bottom: 20,
  },
  contentdiv: {
    // marginLeft: '4%',
    // marginRight: '4%',
    // marginTop: -60,
    width: screenWidth,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  expbutton: {
    position: 'absolute',
    bottom: 25,
    width: 200,
    right: 5,
  },
});
