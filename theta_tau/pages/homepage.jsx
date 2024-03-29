import { StyleSheet, Text, View, Image, Pressable, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import React, { useState, useCallback } from "react";
import Navbar from "../components/navbar";
import Extra from "../components/extra"
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const [isDropped1, setIsDropped1] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);
  const [isDropped3, setIsDropped3] = useState(false);
  const [isDropped4, setIsDropped4] = useState(false);
  const navigation = useNavigation();


  const handleArrowPress1 = () => {
    setIsDropped1(!isDropped1)
  };
  const handleArrowPress2 = () => {
    setIsDropped2(!isDropped2)
  };
  const handleArrowPress3 = () => {
    setIsDropped3(!isDropped3)
  };
  const handleArrowPress4 = () => {
    setIsDropped4(!isDropped4)
  };

  return (
    <View style={styles.container} >
    <Pressable onPress={() => {navigation.navigate('EasterEgg')}}><Text style={{color: '#f2f2f2'}}>Easter</Text></Pressable>
      <Image
        style={styles.image}
        source={require("../assets/theta_tau_coa.png")}
      />
      <Text style={{ fontSize: 40, color: "#710000" }}>
        Theta Tau
      </Text>
      <Text style={{ fontSize: 20, color: "#710000" }}>
        Professional Engineering Fraternity
      </Text>

      <ScrollView>
        <Text style={styles.purpose}>
          The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.
        </Text>




        <TouchableOpacity onPress={() => handleArrowPress1()}>
          <View style={styles.dropdownRow}>
            <View style={styles.dropdownRow2}>
              <Text style={styles.aboutMe}>About Theta Tau</Text>
            </View>
              <View style={{ paddingRight: 10}}>
              {isDropped1 ? <Text>&#9650;</Text> : <Text>&#9660;</Text>}
              </View>
          </View>
        </TouchableOpacity>
          {isDropped1 && (
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Since its founding at the University of Minnesota in October 15, 1904.</Text>
            </View>
          )}

        <TouchableOpacity onPress={() => handleArrowPress2()}>
          <View style={styles.dropdownRow}>
            <View style={styles.dropdownRow2}>
              <Text style={styles.aboutMe}>About Mu Gamma Chapter</Text>
            </View>
              <View style={{ paddingRight: 10}}>
              {isDropped2 ? <Text>&#9650;</Text> : <Text>&#9660;</Text>}
              </View>
          </View>
        </TouchableOpacity>
          {isDropped2 && (
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>The Mu Gamma Theta Tau chapter was chartered and certified on April 5th, 2003 at the University at Buffalo in Buffalo, New York. </Text>
            </View>
          )}

        <TouchableOpacity onPress={() => handleArrowPress3()}>
          <View style={styles.dropdownRow}>
            <View style={styles.dropdownRow2}>
              <Text style={styles.aboutMe}>Open Motto</Text>
            </View>
              <View style={{ paddingRight: 10}}>
                {isDropped3 ? <Text>&#9650;</Text> : <Text>&#9660;</Text>}
              </View>
          </View>
        </TouchableOpacity>
          {isDropped3 && (
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>“Whatsoever thy hand findeth to do, do it with thy might;...” ~Ecclesiastes 9:10</Text>
            </View>
          )}
      
        <TouchableOpacity onPress={() => handleArrowPress4()}>
          <View style={styles.dropdownRow}>
            <View style={styles.dropdownRow2}>
              <Text style={styles.aboutMe}>Pillars</Text>
            </View>
              <View style={{ paddingRight: 10}}>
                {isDropped4 ? <Text>&#9650;</Text> : <Text>&#9660;</Text>}
              </View>
          </View>
        </TouchableOpacity>
          {isDropped4 && (
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>Professionalism, Brotherhood, Community Service</Text>
            </View>
          )}
      <Extra />
      </ScrollView>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    marginBottom: 100,
    fontWeight: 'bold',
  },
  row: {
    height: 50,
    backgroundColor: '#710000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 30,
    width: Dimensions.get('window').width,
  },
  purpose: { 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    marginTop: 20, 
    fontSize: 20, 
    color: "#E29900", 
    backgroundColor: "#710000",
    textAlign: 'center',
  },
  aboutMe: { 
    color: "#710000", 
    textAlign: 'center',
    fontSize: 20,
  },
  dropdownRow: { 
    backgroundColor: "#E29900",
    marginTop: 30, 
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',
    paddingVertical: 12,
  },
  dropdownRow2: {
    flex: 1,
  },
  dropdownContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#710000",
    width: '100%',
  },
  dropdownText: {
    color: "#E29900", 
    paddingVertical: 20,
  },
  image: {
    height: 68,
    width: 40,
  },
});

export default Homepage;