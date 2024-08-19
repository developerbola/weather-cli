import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWeahter = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error("Token isn't exist, -t [TOKEN] for saving token");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );

  return data;
};

export { getWeahter };
