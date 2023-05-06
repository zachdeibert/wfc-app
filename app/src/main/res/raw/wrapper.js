"use strict";

setInterval(function() {
    var tags = document.getElementsByTagName("h1");
    if (tags.length > 0) {
        tags[0].innerText = "Hello, world!";
    }
}, 1000);
