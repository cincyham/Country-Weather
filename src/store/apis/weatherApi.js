import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.tomorrow.io/v4/weather/",
    fetchFn: (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      getWeather: builder.query({
        query: (latlng) => {
          return {
            url: `realtime?apikey=6zCpeJ6nObqFIEOujyNlN0wdg7PwBeYb&location=${latlng[0]},${latlng[1]}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetWeatherQuery } = weatherApi;
export { weatherApi };
