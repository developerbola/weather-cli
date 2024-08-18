const getArgs = require("./helpers/args");

const startCLI = () => {
  const args = getArgs(process.argv);
  // console.log(args);
  if (args.h) {
    console.log();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    // save token
  }
  // result
};

startCLI();
