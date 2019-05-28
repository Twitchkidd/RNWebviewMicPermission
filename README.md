# React Native Webview Microphone Permission Project

AAAHHHH!!!!!

I tried to understand what was happening, I thought I wrote approximately the right code, but for the life of me I have no idea why the screen is blank. I'm seeing <MicPermissionWebviewViewManager> with all the props in there in the debugger.

I know the React Native Community WebView component is out there, but I tried that and also failed with it. This new version of my failure is more based off of (https://github.com/Unapedra/rn-android-permission-webview)[https://github.com/Unapedra/rn-android-permission-webview] but for the life of me I don't know what I'm doing wrong, or what I'm doing right, or what I'm doing. I was hoping to get it to work to help out a fellow developer and then open an issue in the (React Native Community Webview repo)[https://github.com/react-native-community/react-native-webview/] ... ahhhh!

Anybody out there?

////////////////////////////////////////////////////

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

Okeeday, now it's a little tidier, still not tied together yet, and I added the whole listproject folder and like alllll the permissions in AndroidManifest from that repo we were looking at ...

Okay, uninstalled and reinstalled app, as I changed java stuff, trying to get it to run ...

Well it's some time later, and if I could possibly explain what is happening on this side ... oh my God ...

Look I've not got high hopes for this, not gonna lie.

2019-05-25

Good morning! Let's see where we're at here ... booting emulator ...

Okay this bothers me a little. Why is this necessary? Does the Google App just turn the microphone to record? `emulator: Revoking microphone permissions for Google App.`

Oh good, that's the same error message as last time, haha.

`Invariant Violation: requireNativeComponent: "PermissionWebviewManager" was not found on the UIManager.`

Okay, so I added, I think, the package to MainApplication, in the getPackages function.

Mmm, well ... package listproject doesn't exist. Cooool ... I'm trying to get this thing to compile by removing all the video stuff from the added 'listproject' stuff ...

LOL I just removed things until it compiled.

Okay, made some changes, going to start a new branch to nuke this thing and get it going with the current way of doing native android modules, because I think Context changed everything. It's maybe starting to look less like giberish to me.
