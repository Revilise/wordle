const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 980,
        height: 600,
        resizable: false,
        title: "Wordle",
        icon: "./icon.png"
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
})