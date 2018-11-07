import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class VideoCard extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={{ uri: "https://via.placeholder.com/414x233/0000FF/0000FF" }}
        >
          <Icon name="arrow-dropright-circle" size={24} color="#d3d6dd" />
        </ImageBackground>
        <View>
          <Text>Video's Title Here</Text>
          <Button>Watch Video</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  thumbnail: {
    width: 414,
    height: 233
  }
});
