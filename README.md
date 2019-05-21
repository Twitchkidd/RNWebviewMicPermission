# React Native Webview Microphone Permission Project

Okay, process:

`react-native init`

make readme

`yarn add react-native-webview`
`react-native link react-native-webview`

try running ... yay

App.js to ... WebView ... check ...

trying to run js onLoad ...

okay, trying to ask for permission onLoad ...

uh, actually let's get a console log going ... yaas!

okay, sweet, silent fail ... wtf ...

alright, `navigator` is returning as undefined, so `navigator.mediaDevices.getUserMedia` is not going to work. Going to try adding `<uses-permission android:name="android.webkit.PermissionRequest" />` to the manifest.

Well, that didn't do it. I'm going to leave it though, seems like the type of thing, you know?

UHHH ... so ... not only is `navigator` undefined, but `window` too, which I'm using to ... get ... the undefined message ... uhhhhhh ...

Okay, so back to failing silently with an undefined error message. I kinda want to try github.com/otalk/getUserMedia to see if throwing more code at this does anything. Time to walk the dog though.
