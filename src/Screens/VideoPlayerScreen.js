import React, { Component } from "react";

import VideoPlayer from "../Components/VideoPlayer";

export default class VideoPlayerScreen extends Component {
  render() {
    const { navigation } = this.props;
    const videoUrl = navigation.getParam(
      "videoUrl",
      "https://vimeo.com/user17218697"
    );
    return <VideoPlayer videoUrl={videoUrl} />;
  }
}
