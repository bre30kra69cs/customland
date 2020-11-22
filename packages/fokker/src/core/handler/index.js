const {getConsoleHandler} = require('../../utils/getConsoleHandler');

const consoleHandler = getConsoleHandler();

const defaultHandler = {
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

function createHandlerMiddleware(handlers) {
  return function handlerAction(action) {
    const {level} = action;
    handlers.forEach((handler) => {
      const levelHandler = handler[level] || defaultHandler.log;
      levelHandler(action);
    });
  };
}

module.exports = {
  createHandlerMiddleware,
  defaultHandler,
};
