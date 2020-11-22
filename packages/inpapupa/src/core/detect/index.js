const {TYPES} = require('../../const');

const NOOP_ACTION = {
  types: TYPES.NONE,
};

function selectStage(currnetName, stages) {
  const findedStage = stages.find((stage) => stage.targetName === currnetName);
  const stage = findedStage ?? NOOP_ACTION;
  return stage;
}

function createDetectMiddleware(...stages) {
  return function detectMiddleware(action) {
    const {currnetName} = action;
    const stage = selectStage(currnetName, stages);
    const nextAction = {...action, ...stage};
    return nextAction;
  };
}

module.exports = {
  createDetectMiddleware,
};
