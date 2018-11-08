import React, { Component } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  WebView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import VideoPlayer from "./VideoPlayer";

export default class VideoThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIsActive: false
    };
  }

  onThumbnailPressed = () =>
    this.setState({ videoIsActive: !this.state.videoIsActive });

  render() {
    const { videoIsActive } = this.state;
    const { videoUrl } = this.props;

    return (
      <TouchableHighlight
        style={styles.contianer}
        activeOpacity={1}
        onPress={this.onThumbnailPressed}
      >
        {!videoIsActive ? (
          <ImageBackground
            style={styles.thumbnail}
            source={{
              uri: "https://via.placeholder.com/368x207/0000FF/0000FF"
            }}
          >
            <Icon
              name="play-circle"
              size={75}
              color="#d3d6dd"
              style={{ alignItems: "center" }}
            />
          </ImageBackground>
        ) : (
          <WebView
            source={{ uri: videoUrl }}
            style={styles.videoPlayer}
            mediaPlaybackRequiresUserAction={false}
          />
        )}
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
  },
  videoPlayer: {
    width: 368,
    height: 207
  }
});
