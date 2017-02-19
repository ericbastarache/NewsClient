const {app, BrowserWindow, Menu} = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config();
/*require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});*/

let win;

createWindow = () => {
  win = new BrowserWindow({width: 1000, height: 800});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  const template = [
    {
      label: 'News Client',
      submenu: [
        {
          label: 'About ...',
          click: () => {
            require('electron').shell.openExternal('http://github.com/ericbastarache/NewsClient')
          }
        },
        {
          label: 'Quit',
          click: () => {
            app.quit();
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
