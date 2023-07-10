import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const api = createApi({
  reducerPath: "usersApi",
  tagTypes: ["AllUsers"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => {
        return {
          url: "/posts/",
          providesTags: [],
        };
      },
    }),

    getUsers: builder.query({
      query: (args) => {
        const { userId } = args;
        return {
          url: `/users/${userId}`,
          providesTags: [],
        };
      },
    }),

    getUserPosts: builder.query({
      query: (args) => {
        const { userId } = args;
        return {
          url: `/users/${userId}/posts`,
          providesTags: [],
        };
      },
    }),

    getPostComments: builder.query({
      query: (args) => {
        const { postId } = args;
        return {
          url: `/posts/${postId}/comments`,
          providesTags: [],
        };
      },
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetUsersQuery,
  useGetUserPostsQuery,
  useGetPostCommentsQuery,
} = api;
