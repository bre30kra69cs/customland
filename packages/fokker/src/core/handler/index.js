const defaultHandler = {
  log(action) {
    const {messages} = action;

    console?.log?.(...messages);
  },
  error(action) {
    const {messages} = action;

    console?.error?.(...messages);
  },
  warn(action) {
    const {messages} = action;

    console?.warn?.(...messages);
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
