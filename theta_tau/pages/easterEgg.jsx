import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Extra = () => {
  return (
    <SafeAreaView>
        <Text>Hello</Text>
        <Image source={require('../assets/jenny.png')} />
    </SafeAreaView>
  );
};



export default Extra;