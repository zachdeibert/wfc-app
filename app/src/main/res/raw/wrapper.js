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
                    "position: fixed;" +
                    "top: 0;" +
                    "left: 0;" +
                    "bottom: 0;" +
                    "right: 0;" +
                "}";
            document.body.appendChild(style);
        } else {
            setTimeout(checkForLoadComplete[0], 100);
        }
    };
    checkForLoadComplete[0]();
})();
