import getArgs from "./helpers/args.js";
import { getWeahter } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {

  if(!token.length){
    printError("Token isn't exist!")
    return 
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess(`Token [${token}] saved!`);
  } catch (error) {
    printError(error.message );
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
  
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeahter('uzbekistan')
};

startCLI();
