import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  Adventure,
  Beach,
  Culture,
  Mountain,
  Temple,
  Town,
  Waterfall,
  Winter,
} from '../assets/images/categoryicon';
import {Chalal, Dharamshala, Goa, Hampi, Jaipur, Jibhi, Kasol, Kovalam, Mahabalipuram, Manali, Mysore, Nainital, Pondicherry, Pushkar, Rishikesh, Shillong, Udaipur, Varanasi, Varkala, Ziro} from '../assets/images/place';
import { MapIcon } from '../assets/images/icons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Homepage = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={styles.Homepage}>
        <ScrollView>
          <View style={styles.explore}>
            <Text style={styles.headone}>Explore</Text>
            <View style={styles.category}>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Beach} />
                <Text style={styles.cattext}>BEACHES</Text>
              </View>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Mountain} />
                <Text style={styles.cattext}>MOUNTAINS</Text>
              </View>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Temple} />
                <Text style={styles.cattext}>TEMPLES</Text>
              </View>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Waterfall} />
                <Text style={styles.cattext}>WATERFALLS</Text>
              </View>
            </View>

            <View style={styles.categorytwo}>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Town} />
                <Text style={styles.cattext}>TOWN & CITIES</Text>
              </View>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Culture} />
                <Text style={styles.cattext}>CULTURE &</Text>
                <Text style={{color: 'black', fontSize: 9, textAlign: 'center'}}>HERITAGE</Text>
              </View>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Adventure} />
                <Text style={styles.cattext}>ADVENTURE</Text>
              </View>
              <View style={styles.catImage}>
                <Image style={styles.Beach} source={Winter} />
                <Text style={styles.cattext}>WINTER</Text>
              </View>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.mylist}>
            <View style={styles.mylisthead}>
              <View>
                <Text style={styles.headleft}>My Travel List</Text>
              </View>
              <View>
                <Text style={styles.headright}>+</Text>
              </View>
            </View>

            <View style={styles.listMain}>

              {/* gid 1 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Chalal} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Chalal</Text>
                      <Text style={styles.contstate}>Himachal Pradesh</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Dharamshala} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Dharamshala</Text>
                      <Text style={styles.contstate}>Himachal Pradesh</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 2 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Hampi} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Hampi</Text>
                      <Text style={styles.contstate}>Karnataka</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Jaipur} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Jaipur</Text>
                      <Text style={styles.contstate}>Rajasthan</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 3 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Jibhi} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Jibhi</Text>
                      <Text style={styles.contstate}>Himachal Pradesh</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Kasol} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Kasol</Text>
                      <Text style={styles.contstate}>Himachal Pradesh</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 4 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Kovalam} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Kovalam</Text>
                      <Text style={styles.contstate}>Kerela</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Mahabalipuram} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Mahabalipuram</Text>
                      <Text style={styles.contstate}>Tamil Nadu</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 5 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Manali} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Manali</Text>
                      <Text style={styles.contstate}>Himachal Pradesh</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Mysore} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Mysore</Text>
                      <Text style={styles.contstate}>Karnataka</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 6 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Nainital} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Nainital</Text>
                      <Text style={styles.contstate}> Uttarakhand</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Pondicherry} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Pondicherry</Text>
                      <Text style={styles.contstate}>UT</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 7 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Pushkar} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Pushkar</Text>
                      <Text style={styles.contstate}>Rajasthan</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Rishikesh} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Rishikesh</Text>
                      <Text style={styles.contstate}>Uttarakhand</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 8 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Goa} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Goa</Text>
                      <Text style={styles.contstate}>Goa</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Shillong} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Shillong</Text>
                      <Text style={styles.contstate}>Meghalaya</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 9 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Udaipur} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Udaipur</Text>
                      <Text style={styles.contstate}>Rajasthan</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Varanasi} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Varanasi</Text>
                      <Text style={styles.contstate}>Uttar Pradesh</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* grid 10 */}
              <View style={styles.listSub}>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Varkala} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Varkala</Text>
                      <Text style={styles.contstate}>Kerela</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.list}>
                  <Image style={styles.listImg} source={Ziro} />
                  <View style={styles.listContent}>
                    <View style={styles.contImg}>
                      <Image
                        style={styles.mapicon} 
                        source={MapIcon} 
                      />
                    </View>
                    <View style={styles.contTitle}>
                      <Text style={styles.contplace}>Ziro</Text>
                      <Text style={styles.contstate}>Arunachal Pradesh</Text>
                    </View>
                  </View>
                </View>
              </View>
              
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  dummy: {
    color: 'black',
    fontSize: 22,
  },
  Homepage: {
    height: screenHeight,
    width: screenWidth,
    // backgroundColor: 'rgb(255, 253, 231)',
    backgroundColor: 'white',
    flex: 1,
  },
  headone: {
    marginLeft: 25,
    fontSize: 26,
    marginBottom: 10,
    fontWeight: '900',
    color: 'black',
  },
  category: {
    marginLeft: 25,
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categorytwo: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catImage: {
    borderRadius: 20,
  },
  Beach: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 20,
  },
  cattext: {
    color: 'black',
    fontSize: 9,
    textAlign: 'center',
    marginTop: -18,
  },
  mylisthead: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    // borderWidth:  2,
  },
  headleft: {
    color: 'black',
    fontSize: 22,
    // marginBottom: 20,
    // marginTop: 20,
    fontWeight: '900',
    paddingTop: 14,
    paddingBottom: 10,
  },
  headright: {
    color: 'black',
    fontSize: 30,
    // marginBottom: 20,
    // marginTop: 20,
    fontWeight: '900',
    padding: 10,
    color: 'rgb(41, 182, 246)',
  },
  listMain: {},
  listSub: {
    marginLeft: 25,
    marginRight:25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  list: {
    width: '48%',
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  listImg: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 20,
  },
  listContent: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    position:'absolute',
    backgroundColor: 'rgba(0,0,0,.5)',
    bottom: 0,
    width: '100%',
    // padding: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contTitle:{
    zIndex: 1,
    marginLeft: 15,
  },
  contplace:{
    color:'white',
    fontWeight:'900',
 },
  contstate:{
    color:'white',
  },
  mapicon: {
    width: 20,
    height: 20,
    // marginRight: 5,
    backgroundColor: 'white',
    marginTop: -20,
    display: 'none',
  },
  line:{
    marginLeft: 25,
    marginRight: 25,
    height:1,
    backgroundColor: 'rgb(207, 216, 220)',
    marginTop: 10,
  }
});
