const { app, BrowserWndow } = require('electron');

let mainWindow ;
app.on('ready', creat);
function creat() {
    mainWindow = new BrowserWndow({
        width:800,
        height: 600
    });
    mainWindow.loadFile('index.html');
}