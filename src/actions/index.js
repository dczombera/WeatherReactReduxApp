import axios from 'axios';

const API_KEY = 'ff490d4fa71d4ef8125f570820f34a00';
const WEATHER_UNIT = 'metric'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=${WEATHER_UNIT}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, de`;
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
