const {pipe} = require('../../../../../infrastructure/utils/pipe');

const {createCounter} = require('../counter');
const {createHandlerMiddleware, defaultHandler} = require('../handler');
const {createFormatterMiddleware, defaultFormatter} = require('../formatter');

const defaultLoggerConfig = {
  handlers: [defaultHandler],
  middelwares: [],
  countInit: 0,
};

const defaultFormatterConfig = {
  formatter: defaultFormatter,
  type: 'common',
  level: 'log',
  count: false,
  timestamp: false,
};

function createLogger(initLoggerConfig = defaultLoggerConfig) {
  const loggerConfig = {...defaultLoggerConfig, ...initLoggerConfig};
  const {handlers, middelwares, countInit} = loggerConfig;
  const handlerMiddleware = createHandlerMiddleware(handlers);
  const counter = createCounter(countInit);

  return function createDispatcher(initFormatterConfig = defaultFormatterConfig) {
    const formatterConfig = {...defaultFormatterConfig, ...initFormatterConfig};
    const formatterMiddleware = createFormatterMiddleware(formatterConfig, counter);
    const dispatch = pipe(formatterMiddleware, ...middelwares, handlerMiddleware);
    return dispatch;
  };
}

module.exports = {
  createLogger,
};
