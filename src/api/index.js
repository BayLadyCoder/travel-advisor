import axios from "axios";

export const getPlacesData = async (sw, ne) => {
  try {
    const URL =
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
      },
    };

    const response = await axios.get(URL, options);

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
