const path = require('path');
const { Module } = require('adapt-authoring-core');
/**
* A React app
* @extends {Module}
*/
class React extends Module {
  /**
  * Initialises the API
  * @param {Module} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    const server = app.getModule('server');
    const builddir = path.resolve(__dirname, '..', 'build');
    server.use(server.static(builddir));
    server.createRouter('/react/*').get('/', (req, res, next) => res.sendFile(path.join(builddir, 'app.html')));
    resolve();
  }
}

module.exports = React;
