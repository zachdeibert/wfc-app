"use strict";

(function () {
    var checkForLoadComplete = [];
    checkForLoadComplete[0] = function() {
        var iframes = document.querySelectorAll("iframe[title='iframePlayer']")
        if (iframes.length > 0) {
            var style = document.createElement("style");
            style.innerText =
                "* {" +
                    "outline: none;" +
                    "visibility: hidden !important;" +
                "}" +
                "iframe {" +
                    "visibility: visible !important;" +
                    "position: fixed !important;" +
                    "top: 0 !important;" +
                    "left: 0 !important;" +
                    "bottom: 0 !important;" +
                    "right: 0 !important;" +
                "}" +
                "iframe#hubspot-conversations-iframe {" +
                    "display: none !important;" +
                "}";
            document.body.appendChild(style);
            for (var i = 0; i < iframes.length; ++i) {
                var iframe = iframes.item(i);
                var checkForLoadComplete2 = [];
                checkForLoadComplete2[0] = function() {
                    var videos = iframe.contentDocument.getElementsByTagName("video");
                    if (videos.length > 0) {
                        var style = iframe.contentDocument.createElement("style");
                        style.innerText =
                            "* {" +
                                "outline: none;" +
                            "}";
                        iframe.contentDocument.body.appendChild(style);
                    } else {
                        setTimeout(checkForLoadComplete2[0], 100);
                    }
                };
                checkForLoadComplete2[0]();
            }
        } else {
            setTimeout(checkForLoadComplete[0], 100);
        }
    };
    checkForLoadComplete[0]();
})();
