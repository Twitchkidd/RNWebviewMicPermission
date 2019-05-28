package com.rnwebviewmicpermission.micpermissionwebview;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class MicPermissionWebviewViewManager extends SimpleViewManager<MicPermissionWebviewView> {

    public static final String REACT_CLASS = "MicPermissionWebviewViewManager";
    private String source;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public MicPermissionWebviewView createViewInstance(ThemedReactContext context) {
        return new MicPermissionWebviewView(context); //If your customview has more constructor parameters pass it from here.
    }
    
    @ReactProp(name = "sourceUri")
    public void setSource(MicPermissionWebviewView view, String source) {
        view.loadUrl(source);
    }
}