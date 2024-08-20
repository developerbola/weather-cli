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

const printWeather = (response, icon) => {
  console.log(dedent`
    ${chalk.yellowBright("WEATHER")} ( of ${response.name} )
    ${icon}  ${response.weather[0].description}
    Tempereture: ${response.main.temp} ( feels like ${response.main.feels_like} )
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed}
    `);
};

export { printError, printSuccess, printHelp, printWeather };
