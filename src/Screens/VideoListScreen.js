import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";

import VideoCard from "../Components/VideoCard";

import { playlist } from "../Fixtures/videos";

export default class VideoListScreen extends Component {
  _keyExtractor = (item, index) => index.toString();

  renderCard = ({ item }) => (
    <VideoCard videoUrl={item.videoUrl} onPressButton={this.onPressButton} />
  );

  onPressButton = url => console.log(url);

  render() {
    return (
      <FlatList
        data={playlist}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderCard}
      />
    );
  }
}
