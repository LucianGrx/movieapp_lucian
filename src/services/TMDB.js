import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//https://developer.themoviedb.org/docs/getting-started

const tmbdApiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
const page = 1

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //Get movies by TYPE
    getMovies: builder.query({
      query: () => {
        return `/movie/popular?page=${page}&api_key=${tmbdApiKey}`;
      },
    }),
  }),
});

export const {
    useGetMoviesQuery,
} = tmdbApi;