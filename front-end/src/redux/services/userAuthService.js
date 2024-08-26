import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const userAuthApi = createApi ( {
    reducerPath: 'slack_userAuth_service',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/user/auth'}),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: '/create',
                method: 'POST',
                body
            })
        }),

        siginUser: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            })
        }),

        googleSignup: builder.mutation({
            query: (body) => ({
                url: '/google_signup',
                method: 'POST',
                body
            })
        }),

        gooogleLogin: builder.mutation({
            query: (body) => ({
                url: '/google_login',
                method: 'POST',
                body
            })
        }),

        githubSignup: builder.mutation({
            query: (body) => ({
                url: '/github_auth',
                method: 'POST',
                body
            })
        })
    })
})


export const {useRegisterUserMutation , useSiginUserMutation , 
    useGoogleSignupMutation , useGooogleLoginMutation,
    useGithubSignupMutation

} = userAuthApi;