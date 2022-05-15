const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 980,
        height: 600,
        resizable: false,
        title: "Wordle"
    })

    win.loadFile('./build/index.html')
}

app.whenReady().then(() => {
    createWindow();
})