"use strict";
const electron = require("electron");
const fs = require("fs");

electron.app.whenReady().then(() => {
    const win = new electron.BrowserWindow({
        "width": 1920 / 2,
        "height": 1080 / 2,
        "frame": false
    });
    fs.readFile("../app/src/main/res/raw/wrapper.js", (err, data) => {
        if (err) {
            console.error(err);
        }
        win.loadURL("https://online.westsidefamily.church/").then(() => {
            win.webContents.executeJavaScript(data)
        });
    });
});
