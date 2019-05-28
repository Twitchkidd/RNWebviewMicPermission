package com.rnwebviewmicpermission.micpermissionwebview;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MicPermissionWebviewPackage implements ReactPackage {

  @Override
    public List<ViewManager> createViewManagers(
            ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
            new MicPermissionWebviewViewManager()
          );
    }

  @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}