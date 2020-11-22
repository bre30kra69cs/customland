const {logger} = require('../logger');

const {TYPES} = require('../../const');

// TODO: validation rules manager
function validate(action) {
  const {args, argsTyping, types} = action;
  if (types === TYPES.NONE) {
    logger.exit(`Command not found`);
  }
  argsTyping.forEach((typing, index) => {
    const {name, required} = typing;
    const arg = args[index];
    if (!arg && required) {
      logger.exit(`Argument "${name}" is required`);
    }
  });
}

function validateMiddlewares(action) {
  validate(action);
  return action;
}

module.exports = {
  validateMiddlewares,
};
