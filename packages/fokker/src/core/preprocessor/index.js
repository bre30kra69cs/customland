const {pipe} = require('../../../../../infrastructure/utils/pipe');

const {createCounter} = require('../counter');
const {createHandlerMiddleware, defaultHandler} = require('../handler');
const {createFormatterMiddleware, defaultFormatter} = require('../formatter');

const {LEVELS, TYPES} = require('../../const');

const LOGGER_CONFIG = {
  handlers: [defaultHandler],
  middelwares: [],
  countInit: 0,
};

const FORMATTER_CONFIG = {
  formatter: defaultFormatter,
  type: TYPES.COMMON,
  level: LEVELS.LOG,
  count: false,
  timestamp: false,
};

function createLogger(initLoggerConfig = LOGGER_CONFIG) {
  const loggerConfig = {...LOGGER_CONFIG, ...initLoggerConfig};
  const {handlers, middelwares, countInit} = loggerConfig;
  const handlerMiddleware = createHandlerMiddleware(handlers);
  const counter = createCounter(countInit);
  return function createDispatcher(initFormatterConfig = FORMATTER_CONFIG) {
    const formatterConfig = {...FORMATTER_CONFIG, ...initFormatterConfig};
    const formatterMiddleware = createFormatterMiddleware(formatterConfig, counter);
    const dispatch = pipe(formatterMiddleware, ...middelwares, handlerMiddleware);
    return dispatch;
  };
}

module.exports = {
  createLogger,
};
