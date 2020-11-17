function tap(...args) {
  if (!args.length) {
    return undefined;
  }

  if (args.length === 1) {
    return args[0];
  }

  return args;
}

module.exports = {
  tap,
};
