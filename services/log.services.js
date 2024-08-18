import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.red("ERROR:"), err);
};

const printSuccess = (msg) => {
  console.log(chalk.green("SUCCESS:"), msg);
};

const printHelp = () => {
  console.log(dedent`
        ${chalk.cyan("HELP")}
        -s [CITY] for install city
        -t [TOKEN] for saving token
        -h for get help`);
};

export { printError, printSuccess, printHelp };
