import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default class WatchButton extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableHighlight
        style={styles.container}
        activeOpacity={1}
        underlayColor="green"
        onPress={onPress}
      >
        <Text style={styles.text}>Watch Video</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginVertical: 5,
    marginHorizontal: 12,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  }
});
