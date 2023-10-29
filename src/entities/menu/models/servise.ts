import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {PaginatorMenu} from '@shared/api';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({baseUrl});

export const menuApiService = createApi({
    reducerPath: 'menu/api',
    baseQuery,
    endpoints: (build) => ({
        getMenuById: build.query<
            PaginatorMenu,
            {id?: number; limit?: number; page?: number; active?: string; name?: string; filial?: string; tt?: string}
        >({
            query: ({id, limit = 10, page = 1, active, name, filial, tt}) => ({
                url: `/filial/${id}/menu/`,
                method: 'GET',
                params: {
                    limit,
                    page,
                    active,
                    name,
                    filial,
                    tt,
                },
            }),
        }),
    }),
});

export const {useGetMenuByIdQuery} = menuApiService;
