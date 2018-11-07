import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import WatchButton from "./WatchButton";

export default class VideoCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.thumbnail}
          source={{ uri: "https://via.placeholder.com/368x207/0000FF/0000FF" }}
        >
          <Icon
            name="play-circle"
            size={75}
            color="#d3d6dd"
            style={{ alignItems: "center" }}
          />
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.videoTitle}>Video Title Here</Text>
          <WatchButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 10,
    padding: 8
  },
  thumbnail: {
    width: 368,
    height: 207,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    alignItems: "stretch"
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5
  }
});
