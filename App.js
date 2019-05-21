import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
  render() {
    const runFirst = `
      document.body.style.backgroundColor = 'red';
      window.alert('hi!');
      window.ReactNativeWebView.postMessage('Hello!');
      true; // required else occasional silent errors
    `;
    return (
      <View style={styles.container}>
        <WebView
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

const styles = StyleSheet.create({
  container: { flex: 1 }
});
