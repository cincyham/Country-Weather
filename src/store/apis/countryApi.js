import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countryApi = createApi({
  reducerPath: "country",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/names",
    fetchFn: (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchCountryInfo: builder.query({
        query: () => {
          return {
            url: "/1",
            method: "GET",
          };
        },
      }),
      updateCountryName: builder.mutation({
        query: (name) => {
          return {
            url: `/1`,
            method: "PATCH",
            body: {
              name: name,
            },
          };
        },
      }),
      updateCountryLatlng: builder.mutation({
        query: (latlng) => {
          return {
            url: `/1`,
            method: "PATCH",
            body: {
              latlng,
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchCountryInfoQuery,
  useUpdateCountryNameMutation,
  useUpdateCountryLatlngMutation,
} = countryApi;
export { countryApi };
