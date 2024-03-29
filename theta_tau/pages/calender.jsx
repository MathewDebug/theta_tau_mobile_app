import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/navbar"
import Extra from "../components/extra"
import Event from "../components/event"
import Data from "../data/data.json"
const Brother = (props) => {
  const navigation = useNavigation();

  // Image sources
  const placeholderImages = [
    require('../assets/IMG_7473.png'), //info session
    require('../assets/IMG_7472.png'), //info session II
    require('../assets/IMG_7471.png'), // game night
    require('../assets/IMG_7470.png'), // meet the brothers
    require('../assets/IMG_7469.png'), // pizza night
    require('../assets/IMG_7467.png'), // paint night
    require('../assets/IMG_7468.png'), // DIY BRACELETS
    
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>RUSH EVENTS</Text>
        <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
      </View>
      <Event desc={Data.eventData[0].description} title="Info Session 1" imageSource = {placeholderImages[0]} />
      <Event desc={Data.eventData[1].description} title="Info Session 2" imageSource = {placeholderImages[1]} />
      <Event desc={Data.eventData[2].description} title="Game Night" imageSource = {placeholderImages[2]} />
      <Event desc={Data.eventData[3].description} title="Meet The Brothers" imageSource = {placeholderImages[3]} />
      <Event desc={Data.eventData[4].description} title="Pizza Night" imageSource = {placeholderImages[4]} />
      <Event desc={Data.eventData[5].description} title="Paint Night" imageSource = {placeholderImages[5]} />
      <Event desc={Data.eventData[6].description} title="D.I.Y. Bracelets" imageSource = {placeholderImages[6]} />
      <Extra />
      <Navbar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#501315',
    padding: 10,
  },
  safeContainer: {
    margin: 0,
  },
  title: {
    marginTop: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    width: 200,
    height: 200,
  },
  row: {
    width: '100%',
    marginTop: 10, 
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 41,
    position: 'absolute',
    right: 20,
    marginTop: 50,
  }
});

export default Brother;