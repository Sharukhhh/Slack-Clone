import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('slackUserToken');

        if(token) headers.set('Authorization' , `Bearer ${token}`);
        return headers;
    }
})

const userServicesApi = createApi({

    reducerPath: 'slack_userServices',
    baseQuery,
    tagTypes: ['workspaces'],

    endpoints: (builder) => ({
        createWorkspace: builder.mutation({
            query: (body) => ({
                url: '/workspace/new_workspace',
                method: 'POST',
                body
            }),
            invalidatesTags: ['workspaces']
        }),

        fetchWorkSpace: builder.query({
            query: () => ({
                url: '/workspace/fetch',
                method: 'POST',
            }),
            providesTags: ['workspaces']
        })
    })
});


export const {useCreateWorkspaceMutation ,  useFetchWorkSpaceQuery } = userServicesApi;