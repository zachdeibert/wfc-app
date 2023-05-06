"use strict";
const electron = require("electron");
const fs = require("fs");

electron.app.whenReady().then(() => {
    const win = new electron.BrowserWindow({
        "width": 800,
        "height": 600
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
