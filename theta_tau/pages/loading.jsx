import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { Component } from "react";
import Homepage from "./pages/homepage";

const App = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.title}>
      <Text style={{ fontSize: 80, color: "#e29900" }}>
        Theta Tau
      </Text>
      <Image
        style={styles.image}
        source={require("./assets/theta_tau_coa.png")}
      />
      <Button
        title="Homepage"
        onPress={() => this.props.navigation.navigate('url')}  
      />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#710000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    alignItems: "center",
    marginBottom: 100,
    fontWeight: 'bold',
  }
});

export default App;