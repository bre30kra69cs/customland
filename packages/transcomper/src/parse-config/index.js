const {readFile} = require('fs');
const {log, error} = require('../logger');

const defaultConfig = {
  base: './',
};

function readConfig(pathToConfig) {
  try {
    log('TSST1', 21323);
    log('Привет мир!');
    log('Привет мир 1!');
    error({
      title: 'Привет мир 2!',
    });
    log('Привет мир 1!');
    log('Привет мир!');
    log('Привет мир 1!', 'Привет мир 1!', 'Привет мир 1!');
    error({
      title: 'Привет мир 2!',
    });
    log('Привет мир 1!', {
      title: 'Привет мир 2!',
    });
    error({
      title: 'Привет мир 2!',
    });
    error({
      title: 'Привет мир 2!',
    });
    log(
      {
        title: 'Привет мир 2!',
        title1: 'Привет мир 2!',
        title2: 'Привет мир 2!',
        data: {
          title: 'Привет мир 2!',
          title1: 'Привет мир 2!',
          title2: 'Привет мир 2!',
        },
      },
      {
        title: 'Привет мир 2!',
      },
    );
    log();
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
