import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { countriesApi } from "./apis/countriesApi";
import { countryApi } from "./apis/countryApi";
import { weatherApi } from "./apis/weatherApi";

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(countriesApi.middleware)
      .concat(weatherApi.middleware)
      .concat(countryApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchCountriesQuery,
  useFetchCountryQuery,
} from "./apis/countriesApi";

export {
  useFetchCountryInfoQuery,
  useUpdateCountryNameMutation,
  useUpdateCountryLatlngMutation,
} from "./apis/countryApi";

export { useGetWeatherQuery } from "./apis/weatherApi";
