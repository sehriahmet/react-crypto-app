import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import customData from '../customData';

const cryptoNewsHeaders = {
	'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
	'x-rapidapi-key': customData.apiKey,
}

const baseUrl = 'https://real-time-news-data.p.rapidapi.com/search';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`?query=${newsCategory}&limit=${count}&time_published=7d&lang=en`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;