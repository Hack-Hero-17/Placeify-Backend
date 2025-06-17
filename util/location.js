require("dotenv").config();

const axios = require("axios");
const HttpError = require("../models/http-error");
const API_KEY = process.env.API_KEY;

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  console.log(response);
  //   console.log(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //       address
  //     )}&key=${API_KEY}`
  //   );

  //   if (!response.ok) {
  //     throw new HttpError(
  //       "Could not fetch location for the specified address.",
  //       422
  //     );
  //   }

  const data = await response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;
