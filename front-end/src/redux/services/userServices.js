import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('slackUserToken');

        if(token) headers.set('Authorization' , `Bearer ${token}`);
        return headers;
    }
})

export const userServicesApi = createApi({

    reducerPath: 'slack_userServices',
    baseQuery,
    tagTypes: ['workspaces' , 'user' , 'messages'],

    endpoints: (builder) => ({
        createWorkspace: builder.mutation({
            query: (body) => ({
                url: '/workspace/new_workspace',
                method: 'POST',
                body
            }),
            invalidatesTags: ['workspaces']
        }),

        fetchAllWorkSpace: builder.query({
            query: () => ({
                url: '/workspace/fetch/all',
                method: 'GET',
            }),
            providesTags: ['workspaces' , 'user']
        }),

        getWorkspaceRelatedToID: builder.query({
            query: (workSpaceId) => ({
                url: `/workspace/fetch/${workSpaceId}`,
                method: 'GET'
            }),
            providesTags: ['user' , 'workspaces' ]
        }),

// *************************************************************************************//

        addChannel: builder.mutation({
            query: (body) => ({
                url: '/workspace/new_channel',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['workspaces']
        }),

// *************************************************************************************//

        getAllUsers: builder.query({
            query: () => ({
                url: '/user/fetch/all',
                method: 'GET'
            }),
            providesTags: ['user']
        }),

        getSingleUser: builder.query({
            query: () => ({
                url: `/user/fetch/single`,
                method: 'GET'
            }),
            providesTags: ['user']
        }),

        updateUser: builder.mutation({
            query: (body) => ({
                url: '/user/edit/',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['user']
        }),

        usersNotInWorkSpace: builder.query({
            query: (body) => ({
                url: '/user/fetch/not_member',
                method: 'GET',
                body
            }),
            providesTags: ['user' , 'workspaces']
        }),

// *************************************************************************************//

        sendMessage: builder.mutation({
            query: (body) => ({
                url: '/message/send',
                method: 'POST',
                body
            }),
            invalidatesTags: ['messages']
        }),

        getMessagesForChannel: builder.query({
            query: (channedlId) => ({
                url: `/message/get/${channedlId}`,
                method: 'GET',
            }),
            providesTags: ['messages']
        })

    })
});


export const {useCreateWorkspaceMutation ,  useFetchAllWorkSpaceQuery, useGetWorkspaceRelatedToIDQuery, 
    useAddChannelMutation,
    useGetAllUsersQuery, useGetSingleUserQuery, useUsersNotInWorkSpaceQuery, useUpdateUserMutation,
    useSendMessageMutation, useGetMessagesForChannelQuery

} = userServicesApi;