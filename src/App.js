import React, { Component } from "react";
import { StyleSheet, Text, View, WebView } from "react-native";

import VideoPlayerScreen from "./Screens/VideoPlayerScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <WebView
            source={{ uri: "https://player.vimeo.com/video/252213768" }}
            allowsInlineMediaPlayback={true}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>TEXT GOES HERE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#000"
  },
  middleContainer: {
    height: 233,
    backgroundColor: "red"
  },
  textContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginHorizontal: 18,
    marginTop: 20
  },
  text: {
    textAlign: "center",
    color: "red",
    fontSize: 18,
    fontWeight: "bold"
  }
});
