package com.github.zachdeibert.wfcapp

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onResume() {
        super.onResume()
        val web = findViewById<WebView>(R.id.webView)
        web.settings.javaScriptEnabled = true
        web.settings.mediaPlaybackRequiresUserGesture = false
        web.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
                resources.openRawResource(R.raw.wrapper).use {
                    val b = ByteArray(it.available())
                    it.read(b)
                    web.evaluateJavascript(String(b)) {}
                }
            }
        }
        web.loadUrl("https://online.westsidefamily.church/")
    }
}
