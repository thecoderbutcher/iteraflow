import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_URL}),
    reducerPath: "api",
    tagTypes: ["User"],
    endpoints: (build) => ({}),
})

export const {} = api;