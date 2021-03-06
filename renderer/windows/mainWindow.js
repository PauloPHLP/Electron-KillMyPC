const {BrowserWindow} = require('electron');

exports.win

exports.createWindow = () => {
  this.win = new BrowserWindow({
    width: 400,
    height: 600,
    minWidth: 400,
    maxWidth: 400,
    minHeight: 600,
    maxHeight: 600,
    frame: false,
    maximizable: false,
    fullscreenable: false,
    useContentSize: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  this.win.loadURL(`file://${__dirname}/../views/mainWindow.html`);

  this.win.on('closed', () => {
    this.win = null;
  });
}