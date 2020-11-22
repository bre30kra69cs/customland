const {getConsoleHandler} = require('../../../utils/getConsoleHandler');

const consoleHandler = getConsoleHandler();

const parallel = {
  log(action) {
    const {result} = action;
    consoleHandler.log(...result);
  },
  error(action) {
    const {result} = action;
    consoleHandler.error(...result);
  },
  warn(action) {
    const {result} = action;
    consoleHandler.warn(...result);
  },
};

const sequence = {
  log(action) {
    const {result} = action;
    result.forEach((message) => consoleHandler.log(message));
  },
  error(action) {
    const {result} = action;
    result.forEach((message) => consoleHandler.error(message));
  },
  warn(action) {
    const {result} = action;
    result.forEach((message) => consoleHandler.warn(message));
  },
};

const typeMapper = {
  parallel,
  sequence,
};

const defaultHandlerConfig = {
  type: 'parallel',
};

function createConsoleHandler(initHandlerConfig = defaultHandlerConfig) {
  const handlerConfig = {...defaultHandlerConfig, ...initHandlerConfig};
  const {type} = handlerConfig;
  const handler = typeMapper[type] || parallel;
  return handler;
}

module.exports = {
  createConsoleHandler,
};
