import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {ExploreDaringbadi} from '../assets/images/explore';
import {
  CoffeeGarden,
  HillView,
  Kalinga,
  Mandasaru,
  Midubanda,
  Pangali,
  Pine,
  Sunset,
} from '../assets/images/daringbadi';
import Timeline from 'react-native-timeline-flatlist';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Iternary = () => {
  const [active, setActive] = useState(1);

  return (
    <View style={styles.maindiv}>
      <View style={styles.imgHead}>
        <Image
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={ExploreDaringbadi}
        />
        <Text style={styles.imgHeadContent}>Daringbadi</Text>
        <Text style={styles.imgSubHead}>The Kashmir of Odisha</Text>
      </View>
      <View style={styles.headButton}>
        <View style={styles.navButtons}>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={styles.daysButton}>
            <Text style={styles.daysButtontext}>DAY 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.daysButton}
            onPress={() => setActive(2)}>
            <Text style={styles.daysButtontext}>DAY 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navAddButtons}>
          <Text style={styles.addNewDay}>+</Text>
        </View>
      </View>
      <ScrollView>{active === 1 ? <ExploreOne /> : <ExploreTwo />}</ScrollView>
    </View>
  );
};

export const ExploreOne = () => {
  const dataDayOne = [
    {
      time: '04:00',
      title: 'Trip Start',
      description: 'Bhubaneswar to daringbadi (260 km)',
    },
    {
      time: '10:00',
      title: '1st checkpoint',
      description: 'Kalinga ghati On the way (210 km)',
    },
    {
      time: '12:00',
      title: 'Hotel Check in',
      description: 'Fresh up and have the lunch',
    },
    {
      time: '14:30',
      title: '2nd Checkpoint',
      description: 'Pangali Valley (12 km). If time permits',
    },
    {
      time: '15:15',
      title: '3rd Checkpoint',
      description: 'Duluri Waterfall',
    },
    {
      time: '16:00',
      title: '4th Checkpoint',
      description: 'Coffee Garden',
    },
    {
      time: '17:00',
      title: 'Final Checkpoint of the day',
      description: 'Sunset point Silent valley',
    },
    {
      time: '18:30',
      title: 'Back to stay',
      description: 'Bonfire with some untold stories',
    },
  ];

  return (
    <>
      <View style={styles.exploremaindiv}>
        <View style={styles.exphead}>
          <Text style={{color: 'black', textAlign: 'center', fontSize: 16}}>
            Plan Of The Day{' '}
          </Text>
        </View>

        <View style={styles.iternaryTimeline}>
          <View style={styles.timelinediv}>
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <Timeline
                data={dataDayOne}
                style={styles.list}
                circleSize={8}
                lineColor="rgb(45,156,219)"
                innerCircle={'dot'}
                descriptionStyle={{
                  color: 'gray',
                  marginTop: -10,
                  padding: 5,
                  width: 200,
                }}
                titleStyle={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: -12,
                  padding: 5,
                }}
                detailContainerStyle={{
                  marginBottom: 20,
                  paddingLeft: 5,
                  paddingRight: 5,
                  backgroundColor: 'rgb(179, 229, 252)',
                  borderRadius: 4,
                }}
              />
            </ScrollView>
          </View>
        </View>

        <View>
          <View style={styles.explorecontaint}>
            <View style={styles.exploreImage}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                source={Kalinga}
              />
            </View>
            <View style={styles.ImageTitle}>
              <Text
                style={{
                  color: 'rgb(2, 136, 209)',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Kalinga Ghati
              </Text>
            </View>
            <View style={styles.expbtn}>
              {/* <Button color="rgb(41, 182, 246)" title="Done"  /> */}
            </View>
          </View>

          <View style={styles.explorecontaint}>
            <View style={styles.exploreImage}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                source={CoffeeGarden}
              />
            </View>
            <View style={styles.ImageTitle}>
              <Text
                style={{
                  color: 'rgb(2, 136, 209)',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Coffee Garden
              </Text>
            </View>
            <View style={styles.expbtn}>
              {/* <Button color="rgb(41, 182, 246)" title="Done"  /> */}
            </View>
          </View>

          <View style={styles.explorecontaint}>
            <View style={styles.exploreImage}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                source={Pangali}
              />
            </View>
            <View style={styles.ImageTitle}>
              <Text
                style={{
                  color: 'rgb(2, 136, 209)',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Pangali Valley
              </Text>
            </View>
            <View style={styles.expbtn}>
              {/* <Button color="rgb(41, 182, 246)" title="Done"  /> */}
            </View>
          </View>

          <View style={styles.explorecontaint}>
            <View style={styles.exploreImage}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                source={Sunset}
              />
            </View>
            <View style={styles.ImageTitle}>
              <Text
                style={{
                  color: 'rgb(2, 136, 209)',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Silent Valley
              </Text>
            </View>
            <View style={styles.expbtn}>
              {/* <Button color="rgb(41, 182, 246)" title="Done"  /> */}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export const ExploreTwo = () => {
  const dataDayTwo = [
    {
      time: '04:00',
      title: '1st Checkpoint',
      description:
        'Mandasaru (35 km), specially to enjoy the sunrise from top of the hill.',
    },
    {
      time: '07:30',
      title: 'Back to room',
      description: 'freshup & have the brkfast',
    },
    {
      time: '09:00',
      title: '2nd checkpoint',
      description: 'Midubandha waterfall (17 km)',
    },
    {
      time: '12:00',
      title: 'lunch',
      description: 'Have some delicious local daringbadi food',
    },
    {
      time: '14:00',
      title: '3rd Checkpoint',
      description: 'pine tree forest',
    },
    {
      time: '16:00',
      title: 'Final Checkpoint',
      description:
        'Buterfly park & Hill view park(spend maximum time in hill view park)',
    },
    {
      time: '19:00',
      title: 'Back to stay',
      description: 'Bonfire and memories',
    },
  ];

  return (
    <>
      <View style={styles.exploremaindiv}>
        <View style={styles.exphead}>
          <Text style={{color: 'black', textAlign: 'center', fontSize: 16}}>
            Plan Of The Day{' '}
          </Text>
        </View>

        <View style={styles.iternaryTimeline}>
          <View style={styles.timelinediv}>
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <Timeline
                data={dataDayTwo}
                style={styles.list}
                circleSize={8}
                lineColor="rgb(45,156,219)"
                innerCircle={'dot'}
                descriptionStyle={{
                  color: 'gray',
                  marginTop: -10,
                  padding: 5,
                  width: 200,
                }}
                titleStyle={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: -12,
                  padding: 5,
                }}
                detailContainerStyle={{
                  marginBottom: 20,
                  paddingLeft: 5,
                  paddingRight: 5,
                  backgroundColor: 'rgb(179, 229, 252)',
                  borderRadius: 4,
                }}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.explorecontaint}>
          <View style={styles.exploreImage}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
              source={Mandasaru}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'rgb(2, 136, 209)',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Mandasaru View Point
            </Text>
          </View>
          <View style={styles.expbtn}>
            {/* <Button color="rgb(41, 182, 246)" title="Done" /> */}
          </View>
        </View>

        <View style={styles.explorecontaint}>
          <View style={styles.exploreImage}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
              source={Midubanda}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'rgb(2, 136, 209)',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Midubanda Waterfall
            </Text>
          </View>
        </View>

        <View style={styles.explorecontaint}>
          <View style={styles.exploreImage}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
              source={Pine}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'rgb(2, 136, 209)',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Pine Tree Forest
            </Text>
          </View>
        </View>

        <View style={styles.explorecontaint}>
          <View style={styles.exploreImage}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
              source={HillView}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'rgb(2, 136, 209)',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Hill View Park
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Iternary;

const styles = StyleSheet.create({
  maindiv: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'white',
  },
  imgHead: {
    width: screenWidth,
    height: '35%',
  },
  imgHeadContent: {
    color: 'white',
    position: 'absolute',
    bottom: 55,
    // top: 80,
    left: 30,
    fontSize: 42,
    fontWeight: '900',
  },
  imgSubHead: {
    color: 'white',
    position: 'absolute',
    bottom: 30,
    left: 30,
    fontSize: 21,
    fontWeight: '900',
    opacity: 0.5,
  },
  headButton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
  },
  addNewDay: {
    color: 'rgb(3, 169, 244)',
    fontSize: 36,
    fontWeight: '900',
    marginRight: 10,
  },
  navButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  daysButton: {
    backgroundColor: 'black',
    marginTop: 10,
    marginLeft: 10,
    height: 32,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 4,
    backgroundColor: 'rgb(179, 229, 252)',
    borderColor: 'rgb(3, 155, 229)',
    borderWidth: 1,
  },
  daysButtontext: {
    color: 'rgb(3, 155, 229)',
    fontWeight: '900',
  },
  explorecontaint: {
    backgroundColor: 'rgb(236, 239, 241)',
    width: '90%',
    marginLeft: '5%',
    height: 200,
    borderRadius: 4,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  exploreImage: {
    width: '100%',
    height: '85%',
  },
  expbtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 100,
    borderRadius: 4,
  },
  ImageTitle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  iternaryTimeline: {
    backgroundColor: 'rgb(236, 239, 241)',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 30,
    marginTop: 10,
  },
  timelinediv: {
    padding: 15,
  },
  exphead: {
    backgroundColor: 'rgb(236, 239, 241)',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 4,
  },
});
