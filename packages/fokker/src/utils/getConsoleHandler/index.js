const {noop} = require('../../../../../infrastructure/utils/noop');

function getConsoleHandler() {
  const log = console?.log ?? noop;
  const error = console?.error ?? log;
  const warn = console?.warn ?? log;

  return {
    log,
    error,
    warn,
  };
}

module.exports = {
  getConsoleHandler,
};
