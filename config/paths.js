const path = require('path');

const ROOT_PATH   = path.join(__dirname, '../');
const APP_PATH    = path.join(ROOT_PATH, 'app');
const STATIC_PATH = path.join(ROOT_PATH, 'public');

const PUBLIC_PATH = '/';

module.exports = {
  ROOT_PATH,
  APP_PATH,
  STATIC_PATH,
  PUBLIC_PATH
}
