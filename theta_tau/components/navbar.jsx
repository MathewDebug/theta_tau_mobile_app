import React from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.navbar}>
            <Pressable style={styles.button} onPress={() => {navigation.navigate('Homepage'), console.log("Test")}}>
                <Image source={require('../assets/house-icon.webp')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.button} onPress={() => {navigation.navigate('Brothers'), console.log("Test")}}>
                <Image source={require('../assets/people-icon.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.button} onPress={() => {navigation.navigate('Calender'), console.log("Test")}}>
                <Image source={require('../assets/calender-icon.png')} style={styles.icon} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: '#710000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
    marginTop: 50,
    width: Dimensions.get('window').width,
    position: 'bottom',
  },
  button: {
    resizeMode: 'contain',
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,  
  }
});

export default Navbar;
