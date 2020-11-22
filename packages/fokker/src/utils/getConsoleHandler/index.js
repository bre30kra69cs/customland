const {noop} = require('../../../../../infrastructure/utils/noop');

function getConsoleHandler() {
  const log = console?.log ?? noop;
  const error = console?.error ?? log;
  const warn = console?.warn ?? log;
  const consoleHandler = {log, error, warn};
  return consoleHandler;
}

module.exports = {
  getConsoleHandler,
};
