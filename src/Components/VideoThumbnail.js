import React, { Component } from "react";
import {
  StyleSheet,
  View,
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
      <View>
        {videoIsActive ? (
          <View>
            <Icon.Button
              backgroundColor="black"
              name="times"
              size={30}
              color="red"
              onPress={this.onThumbnailPressed}
            >
              Text
            </Icon.Button>
            <WebView
              source={{ uri: videoUrl }}
              style={styles.videoPlayer}
              mediaPlaybackRequiresUserAction={false}
            />
          </View>
        ) : (
          <TouchableHighlight
            style={styles.container}
            activeOpacity={1}
            onPress={this.onThumbnailPressed}
          >
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
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "red"
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
