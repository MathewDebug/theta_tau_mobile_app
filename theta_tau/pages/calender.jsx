import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Navbar from "../components/navbar"


const Calender = ({ navigation }) => {

  return (
    <SafeAreaView>
        <Text>Calander Brothers Page</Text>
    <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Calender;
