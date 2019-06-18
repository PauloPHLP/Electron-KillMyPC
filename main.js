const { app, ipcMain } = require('electron');
const electron = require('electron');
const mainWindow = require('./renderer/windows/mainWindow');

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

app.on('ready', () => {
  mainWindow.createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow.createWindow();
  }
});