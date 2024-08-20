import getArgs from "./helpers/args.js";
import { getIcons, getWeahter } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
  printWeather,
} from "./services/log.services.js";
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token isn't exist!");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess(`Token [${token}] saved!`);
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City isn't exist!");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess(`City saved!`);
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const response = await getWeahter(city);
    printWeather(response, getIcons(response.weather[0].icon))
  } catch (error) {
    if (error?.response?.status == 404) {
      printError("City not found");
    } else if (error?.response?.status == 401) {
      printError("Invalid token");
    } else if (
      error?.message == "getaddrinfo ENOTFOUND api.openweathermap.org"
    ) {
      printError(error.message + " " + "( Did you connect to the internet? )");
    } else {
      printError(error.message);
    }
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

startCLI();
