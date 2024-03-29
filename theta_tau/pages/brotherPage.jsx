import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Pressable} from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import { useNavigation } from '@react-navigation/native';
import Extra from "../components/extra"

const BrotherPage = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.topRow}>
            <Pressable onPress={() => {navigation.navigate('Brothers')}}><Text style={styles.back}>Back</Text></Pressable>
        </View>
        
    <Extra />
    <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topRow: {
    backgroundColor: '#B99B73',
    paddingVertical: 20,
  },
  back: {
    color: 'white',
    paddingLeft: 30,
    fontSize: 30,
  }
});

export default BrotherPage;
