const {readFile} = require('fs');
const {log, error} = require('../logger');

const defaultConfig = {
  base: './',
};

function readConfig(pathToConfig) {
  try {
    log('Привет мир!');
    // log('Привет мир 1!');
    // error({
    //   title: 'Привет мир 2!',
    // });
    // log('Привет мир 1!');
    // log('Привет мир!');
    // log('Привет мир 1!');
    // error({
    //   title: 'Привет мир 2!',
    // });
    // log('Привет мир 1!');
    // error({
    //   title: 'Привет мир 2!',
    // });
    // error({
    //   title: 'Привет мир 2!',
    // });
  } catch (err) {
    error(err);
  }
}

function parseConfig(pathToConfig) {
  readConfig();
}

module.exports = {
  parseConfig,
};
