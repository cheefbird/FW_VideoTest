import React, { Component } from "react";
import { StyleSheet, WebView } from "react-native";

export default class VideoPlayer extends Component {
  render() {
    const { videoUrl } = this.props;

    return <WebView source={{ uri: video }} allowsInlineMediaPlayback={true} />;
  }
}
