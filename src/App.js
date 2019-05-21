import React, { Component } from "react";
import { View } from "react-native";
import PermissionWebview from "./native/PermissionWebview";
/*
navigator.webkitGetUserMedia({ audio: true },
  function(stream) {
    window.ReactNativeWebView.postMessage(stream)
  });
*/
export default class App extends Component {
  render() {
    const runFirst = `
      window.ReactNativeWebView.postMessage('eyy');
      true; // required else occasional silent errors
    `;
    console.log(PermissionWebview);
    return (
      <View style={{ flex: 1 }}>
        <PermissionWebview
          source={{
            uri:
              "https://github.com/react-native-community/react-native-webview"
          }}
          injectedJavaScript={runFirst}
          onMessage={event => console.log(event.nativeEvent.data)}
        />
      </View>
    );
  }
}

/*
import { WebView } from "react-native-webview";

export default class App extends Component {
  render() {
    const runFirst = `
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
          window.ReactNativeWebView.postMessage('You let me use your mic!')
        })
        .catch(function(err) {
          window.ReactNativeWebView.postMessage(err)
          window.ReactNativeWebView.postMessage('No mic for you!')
        });
      true; // required else occasional silent errors
    `;
*/
