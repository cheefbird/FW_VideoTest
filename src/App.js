import React, { Component } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import VideoListScreen from "./Screens/VideoListScreen";
import VideoPlayerScreen from "./Screens/VideoPlayerScreen";

const Navigator = createStackNavigator(
  {
    List: VideoListScreen,
    Player: VideoPlayerScreen
  },
  {
    initialRouteName: "List",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "orange"
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
