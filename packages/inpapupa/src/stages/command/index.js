const {noop} = require('../../../../../infrastructure/utils/noop');

const {TYPES} = require('../../const');

function command(targetName = '', argsTyping = [], callback = noop) {
  const action = {type: TYPES.COMMAND, targetName, argsTyping, callback};
  return action;
}

module.exports = {
  command,
};
