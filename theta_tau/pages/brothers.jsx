import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native';
import Navbar from "../components/navbar"
import Brother from "../components/brother"
import Extra from "../components/extra"
const Brothers = () => {

  return (
    <ScrollView>
      <View style={styles.outside}>
        <Text style={styles.title}></Text>
        <SafeAreaView>
            <Text style={styles.title}>E-BOARD</Text>
            <Image style={styles.logo} source={require('../assets/theta_tau_coa.png')} />
            <Brother style={styles.brother} name="Elise Dougherty" title="Regent" imageSource = {require('../assets/eliseD.png')} />
            <Brother style={styles.brother} name="Daniel Klein" title="Vice Regent" imageSource ={require('../assets/daniel_klein.png')}/>
            <Brother style={styles.brother} name="Marissa Gabbamonte" title="Corressponding Secretary" imageSource ={require("../assets/Marissa_Gabbamonte.jpeg")}/>
            <Brother style={styles.brother} name="Yuanjie Xu" title="Treasurer" imageSource = {require('../assets/yuanjie.png')} />
            <Brother style={styles.brother} name="Hao Zhu" title="Scribe" imageSource = {require('../assets/hao_zhu.png')} />
            <Brother style={styles.brother} name="Manvir Singh" title="Pledge Marshal" imageSource = {require('../assets/manvir.png')} />

            <Text style={styles.title}>ACTIVE BROTHERS</Text>
            <Brother style={styles.brother} name="David Huang" title=""  imageSource = {require('../assets/david_huang.png')} />
            <Brother style={styles.brother} name="Felix Bermudez" title=""  imageSource = {require('../assets/manvir.png')} />
            <Brother style={styles.brother} name="David Zaretsky" title=""  imageSource = {require('../assets/eliseD.png')} />
            <Brother style={styles.brother} name="Billy Grippi" title=""  imageSource = {require('../assets/billy_grippi.png')} />
            <Brother style={styles.brother} name="Max Gustin" title=""  imageSource = {require('../assets/max_gustin.png')} />
            <Brother style={styles.brother} name="Del Hart" title=""  imageSource = {require('../assets/del_hart.png')} />
            <Brother style={styles.brother} name="Matthew Amato" title=""  imageSource = {require('../assets/matthew_amato.png')} />
            <Brother style={styles.brother} name="Dennis Cetaj" title=""  imageSource = {require('../assets/dennis_cetaj.png')} />
            <Brother style={styles.brother} name="Kelly Chan" title=""  imageSource = {require('../assets/kelly_chan.png')} />
            <Brother style={styles.brother} name="Edward Masalimov" title=""  imageSource = {require('../assets/edward.png')} />
            <Brother style={styles.brother} name="Tenzin Pema" title=""  imageSource = {require('../assets/tenzin_pema.png')} />
            <Brother style={styles.brother} name="Chloe Tullius" title=""  imageSource = {require('../assets/chloe_tullius.png')} />
            <Brother style={styles.brother} name="Gabriel Thornton" title=""  imageSource = {require('../assets/gabriel.png')} />
            <Brother style={styles.brother} name="James Fattorusso" title=""  imageSource = {require('../assets/manvir.png')} />
            <Brother style={styles.brother} name="Jeffrey Kou" title=""  imageSource = {require('../assets/jeffrey_kou.png')} />
            <Brother style={styles.brother} name="Andrew Li" title=""  imageSource = {require('../assets/Andrew Li.png')} />
            <Brother style={styles.brother} name="Victor Lin" title=""  imageSource = {require('../assets/victor.png')} />
            <Brother style={styles.brother} name="Myles Pauquette" title=""  imageSource = {require('../assets/manvir.png')} />
            <Brother style={styles.brother} name="Juan Quintero" title=""  imageSource = {require('../assets/juan.png')} />
            <Brother style={styles.brother} name="Adrian Sin" title=""  imageSource = {require('../assets/adrian_sin.png')} />
            <Brother style={styles.brother} name="Justin Siwa" title=""  imageSource = {require('../assets/manvir.png')} />
            <Brother style={styles.brother} name="Alex Yevzerov" title=""  imageSource = {require('../assets/manvir.png')} />
            <Brother style={styles.brother} name="Zachary Clark" title=""  imageSource = {require('../assets/zachary.png')} />
            <Brother style={styles.brother} name="James Henry" title=""  imageSource = {require('../assets/jph.png')} />
            <Brother style={styles.brother} name="Anna Kane" title=""  imageSource = {require('../assets/anna_kane.png')} />
            <Brother style={styles.brother} name="Isabella Nguyen" title=""  imageSource = {require('../assets/bella.png')} />
            <Brother style={styles.brother} name="Rrucha Singh" title=""  imageSource = {require('../assets/manvir.png')} />
            <Brother style={styles.brother} name="Jenny Zhu" title=""  imageSource = {require('../assets/jenny.png')} />
            

    
        </SafeAreaView>
        <Navbar />
      </View>
    </ScrollView>
    

  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    color: '#FFFFFF',
    backgroundColor: '#501315', 
    fontWeight: 'bold',
    fontSize: 30, 
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 25,
    height: 41,
    position: 'absolute',
    right: 20,
  },
  rectangle: {
    height: 2,
    width: 200,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});

export default Brothers;
