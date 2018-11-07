import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import VideoListScreen from "./Screens/VideoListScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoListScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    marginTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
