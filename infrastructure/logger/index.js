const {createLogger, formatters, handlers} = require('../../packages/fokker');

const consoleHandler = handlers.console({
  type: 'sequence',
});

const createDispatcher = createLogger({
  handlers: [consoleHandler],
});

const logLabel = createDispatcher({
  level: 'log',
  count: true,
  timestamp: true,
  formatter: formatters.label,
});

const errorLabel = createDispatcher({
  level: 'error',
  count: true,
  timestamp: true,
  formatter: formatters.label,
});

const warnLabel = createDispatcher({
  level: 'warn',
  count: true,
  timestamp: true,
  formatter: formatters.label,
});

const logger = {
  log(...args) {
    logLabel('LOG', ...args);
  },
  error(...args) {
    errorLabel('ERROR', ...args);
  },
  warn(...args) {
    warnLabel('WARN', ...args);
  },
};

module.exports = {
  logger,
};
