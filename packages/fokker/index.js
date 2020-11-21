const {createLogger} = require('./src/core/preprocessor');
const {commonFormatter} = require('./src/presets/formatters/common');
const {labelFormatter} = require('./src/presets/formatters/label');
const {createConsoleHandler} = require('./src/presets/handlers/console');
const {createFileHandler} = require('./src/presets/handlers/file');

const formatters = {
  common: commonFormatter,
  label: labelFormatter,
};

const handlers = {
  console: createConsoleHandler,
  file: createFileHandler,
};

module.exports = {
  createLogger,
  formatters,
  handlers,
};
