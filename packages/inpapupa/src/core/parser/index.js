function parseArgsMiddleware() {
  const [, , currnetName, ...args] = process.argv;
  const action = {currnetName, args};
  return action;
}

module.exports = {
  parseArgsMiddleware,
};
