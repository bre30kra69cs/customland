const fokker = require('../../../fokker');

const defaultConfig = {};

function readConfig(path) {
  // const configFile = await readFile(path);
  fokker.log('__dirname', __dirname);
}

module.exports = {readConfig};
