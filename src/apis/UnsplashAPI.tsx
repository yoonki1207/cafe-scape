import axios from "axios";
import { api_key } from "../.api_key.js";

const UnsplashAPI = async (areaName: string) => {
  const getSearchImg = async () => {
    console.log("asd");
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${areaName}`,
      {
        params: {
          client_id: api_key,
        },
      }
    );
    console.log(response.data);
    return response.data.results;
  };
  return getSearchImg();
};

export default UnsplashAPI;
