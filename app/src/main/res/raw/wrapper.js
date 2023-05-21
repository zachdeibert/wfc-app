"use strict";

(function () {
    var checkForLoadComplete = [];
    checkForLoadComplete[0] = function() {
        var iframes = document.getElementsByTagName("iframe");
        if (iframes.length > 0) {
            var style = document.createElement("style");
            style.innerText =
                "* {" +
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
        } else {
            setTimeout(checkForLoadComplete[0], 100);
        }
    };
    checkForLoadComplete[0]();
})();
