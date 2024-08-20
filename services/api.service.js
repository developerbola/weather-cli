import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getIcons = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧";
    case "10":
      return "🌦";
    case "11":
      return "🌩";
    case "13":
      return "❄️";
    case "50":
      return "🌫";
  }
};

const getWeahter = async (city) => {
  const token = await getKeyValue(process.env.TOKEN ?? TOKEN_DICTIONARY.token);
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

  // 355227495210c83dcc4f7cb00e980869

  return data;
};

export { getWeahter, getIcons };
