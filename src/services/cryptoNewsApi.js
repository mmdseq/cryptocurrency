import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "c62dc2e715mshdfd06526c105514p1f6e59jsn7fe7230bff58",
};



const baseUrl = `https://bing-news-search1.p.rapidapi.com`


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
  }),
  });

  export const {
    useGetCryptoNewsQuery,
  } = cryptoNewsApi;




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-BingApis-SDK': 'true',
// 		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'c62dc2e715mshdfd06526c105514p1f6e59jsn7fe7230bff58'
// 	}
// };

// fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
