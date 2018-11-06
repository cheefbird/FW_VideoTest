import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import VideoPlayer from "../Components/VideoPlayer";

import { playlist } from "../Fixtures/videos";

export default class VideoPlayerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIndex: 0
    };
  }

  goToVideo = index => {
    let videoIndex = index;

    if (videoIndex < 0) {
      videoIndex = playlist.length - 1;
    } else if (videoIndex >= playlist.length) {
      videoIndex = 0;
    }

    this.setState({ videoIndex });
  };

  render() {
    const { service, video } = playlist[this.state.videoIndex];
    return (
      <View>
        <VideoPlayer service={service} video={video} width={500} height={270} />
        <Text>{service}: </Text>
        <Text>{video}</Text>
        <Button
          title="Previous"
          color="red"
          onPress={this.goToVideo(this.state.videoIndex - 1)}
        />
        <Button
          title="Next"
          color="green"
          onPress={this.goToVideo(this.state.videoIndex + 1)}
        />
      </View>
    );
  }
}
