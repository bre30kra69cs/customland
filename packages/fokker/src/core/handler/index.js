const defaultHandler = {
  log(action) {
    const {result} = action;

    console?.log?.(...result);
  },
  error(action) {
    const {result} = action;

    console?.error?.(...result);
  },
  warn(action) {
    const {result} = action;

    console?.warn?.(...result);
  },
};

function createHandlerMiddleware(handlers) {
  return function handlerAction(action) {
    const {level} = action;

    handlers.forEach((handler) => {
      const levelHandler = handler[level];

      levelHandler(action);
    });
  };
}

module.exports = {
  createHandlerMiddleware,
  defaultHandler,
};
