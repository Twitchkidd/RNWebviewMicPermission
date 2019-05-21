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

Oh, wait, no, that's dumb, it needs to run ... from the webview ... so ...

Oh, maybe it's webkitGetUserMedia ... oh now nothing is working ...

Oh no it's been so long I wrote in this, okay, I went for a walk and a coffee and I have new ideas on how to do this and also I tried a standing desk arrangement and my back still hurts lol.

So the touch points are going to be App.js and now I've got OldApp.js because I don't know why I was messing with branches right now but here we are. We're also going to split out a src/native/WebView with an index.js and index.android.js, and there are the AndroidManifest.xml files and proguard-rules.pro to tackle if need be.

Okeeday, now it's a little tidier, still not tied together yet, and I added the whole listproject folder and like alllll the permissions in AndroidManifest from that repo we were looking at
