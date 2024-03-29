import React from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();


  return (
      <View style={styles.navbar}>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Homepage')}}>
              <Image source={require('../assets/white_homePage.png')} style={styles.icon} />
          </Pressable>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Brothers')}}>
              <Image source={require('../assets/Brothers_Tab.png')} style={styles.icon} />
          </Pressable>
          <Pressable style={styles.button} onPress={() => {navigation.navigate('Calender')}}>
              <Image source={require('../assets/rushIcon.png')} style={styles.icon} />
          </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({

  navbar: {
    backgroundColor: '#710000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: Dimensions.get('window').width,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5
  
  },
  icon: {
    marginHorizontal: 38,
    width: 40,
    height: 40,  
  },
})

export default Navbar;
