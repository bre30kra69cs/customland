const fs = require('fs');

const FILE_CONFIG = {
  name: 'logs',
  path: './',
};

// TODO: rewrite and add sync manager
function createFileHandler(initFileConfig = FILE_CONFIG) {
  const fileConfig = {...FILE_CONFIG, ...initFileConfig};
  const {name, path} = fileConfig;
  const fileHandler = {
    log(action) {
      try {
        const {messages} = action;
        fs.writeFile(`${path}${name}`, JSON.stringify(messages));
      } catch (err) {
        console?.log?.(err);
      }
    },
    error(action) {
      try {
        const {messages} = action;
        fs.writeFile(`${path}${name}`, JSON.stringify(messages));
      } catch (err) {
        console?.log?.(err);
      }
    },
    warn(action) {
      try {
        const {messages} = action;
        fs.writeFile(`${path}${name}`, JSON.stringify(messages));
      } catch (err) {
        console?.log?.(err);
      }
    },
  };
  return fileHandler;
}

module.exports = {
  createFileHandler,
};
