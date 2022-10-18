import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '08760f9eb5msh7c95f080d5a1ee1p1ff3a3jsn8d9100f18d4c');

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query:() => '/charts/world' }),
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi