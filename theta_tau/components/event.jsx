import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/navbar"
import Extra from "../components/extra"

const Brother = (props) => {
  return (
    <View style={styles.row}>
    <View style={{alignItems: 'center', width: '60%', backgroundColor: '#501315', marginBottom: 10}}>
        <Text style={{color: 'white', fontSize: 20, paddingVertical: 5}}>{props.title}</Text>
    </View>
    <View>
        <Image source={props.imageSource} style={styles.image} />
    </View>
    <Text style={{marginTop: 5, marginHorizontal: 20}}>{props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  row: {
    width: '100%',
    marginTop: 10, 
    alignItems: 'center',
  },
});

export default Brother;