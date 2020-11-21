const fs = require('fs');

const {promisify} = require('../../../../../../infrastructure/utils/promisify');
const console = require('../console');

const writeFile = fs.writeFileSync;

const defaultFileConfig = {
  name: 'logs',
  path: './',
};

function createFileHandler(initFileConfig = defaultFileConfig) {
  const fileConfig = {...defaultFileConfig, ...initFileConfig};

  const {name, path} = fileConfig;

  return {
    log(action) {
      const {messages} = action;

      try {
        writeFile(`${path}${name}`, JSON.stringify(messages));
      } catch (err) {
        console?.log?.(err);
      }
    },
    error(action) {
      const {messages} = action;

      try {
        writeFile(`${path}${name}`, JSON.stringify(messages));
      } catch (err) {
        console?.log?.(err);
      }
    },
    warn(action) {
      const {messages} = action;

      try {
        writeFile(`${path}${name}`, JSON.stringify(messages));
      } catch (err) {
        console?.log?.(err);
      }
    },
  };
}

module.exports = {
  createFileHandler,
};
