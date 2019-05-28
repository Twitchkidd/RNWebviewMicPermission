/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ToastExample from "./ToastExample";
import MicPermissionWebview from "./MicPermissionWebview";

export default class App extends Component {
  buttonPush = () => {
    ToastExample.show("Dooope!", ToastExample.SHORT);
  };
  render() {
    const website = "https://www.google.com";
    return (
      <View style={styles.container}>
        <MicPermissionWebview
          source={{ uri: website }}
          sourceUri={website}
          style={{ flex: 1 }}
          mediaPlaybackRequiresUserAction={false}
          domStorageEnabled={true}
          allowsInlineMediaPlayback={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
