package com.rnwebviewmicpermission.micpermissionwebview;
import android.content.Context;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.PermissionRequest;
import android.webkit.WebSettings;

public class MicPermissionWebviewView extends WebView{
    
    private Context context;
    
    public MicPermissionWebviewView(Context context) {
        super(context);
        this.context = context;

        this.setWebViewClient(new WebViewClient());

        WebSettings webSettings = this.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setUseWideViewPort(true);
        webSettings.setDomStorageEnabled(true);

        this.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                request.grant(request.getResources());
            }
        });
    }
}