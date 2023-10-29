import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {Filial} from '@shared/api';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({baseUrl});

export const filialApiService = createApi({
    reducerPath: 'filial/api',
    baseQuery,
    endpoints: (builder) => ({
        getFilial: builder.query<Filial[], void>({
            query: () => ({
                url: '/filial/',
                headers: {
                    accept: 'application/json',
                },
            }),
        }),
    }),
});

export const {useGetFilialQuery} = filialApiService;
