import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class VideoThumbnail extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.contianer}
        activeOpacity={1}
        onPress={() => console.log("THUMBNAIL PRESSED")}
      >
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
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    alignItems: "center",
    backgroundColor: "red",
    paddingHorizontal: 18,
    paddingVertical: 8
  },
  thumbnail: {
    width: 368,
    height: 207,
    justifyContent: "center",
    alignItems: "center"
  }
});
