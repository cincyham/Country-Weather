import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
    fetchFn: (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
        fetchCountries: builder.query({
            query: () => {
                return {
                    url: '/all',
                    method: 'GET',
                };
            }
        }),
        fetchCountry: builder.query({
            query: (name) => {
                return {
                  url: `/name/${name}`,
                  method: 'GET',
                };
            }
        })
    }
  }
});

export const {
    useFetchCountriesQuery,
    useFetchCountryQuery,
} = countriesApi;
export { countriesApi };