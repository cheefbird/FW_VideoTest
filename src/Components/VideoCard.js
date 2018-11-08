import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import WatchButton from "./WatchButton";
import VideoThumbnail from "./VideoThumbnail";

export default class VideoCard extends Component {
  onPress = () => {
    const { videoUrl, onPressButton } = this.props;
    onPressButton(videoUrl);
  };

  render() {
    return (
      <View style={styles.container}>
        <VideoThumbnail />
        <View style={styles.textContainer}>
          <Text style={styles.videoTitle}>Video Title Here</Text>
          <WatchButton onPress={this.onPress} />
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
  textContainer: {
    alignItems: "stretch"
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5
  }
});
