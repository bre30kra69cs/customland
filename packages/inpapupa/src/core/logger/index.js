const {createLogger, formatters, handlers} = require('../../../../fokker');

const consoleHandler = handlers.console({
  type: 'parallel',
});

const createDispatcher = createLogger({
  handlers: [consoleHandler],
});

const errorLabel = createDispatcher({
  level: 'error',
  formatter: formatters.label,
});

const logger = {
  exit(...args) {
    errorLabel('EXIT', ...args);
    process.exit();
  },
};

module.exports = {
  logger,
};
