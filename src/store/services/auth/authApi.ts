import { createApi } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/constants";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: async (args) => {
    if (args.type === "login") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: args.email,
        password: args.password,
      });
      if (error) throw error;
      return { data };
    }

    return { data: null };
  },
  endpoints: (builder) => ({
    login: builder.mutation({
      async queryFn(credentials) {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          });
          if (error) return { error };
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
    register: builder.mutation({
      async queryFn(credentials) {
        try {
          const { data, error } = await supabase.auth.signUp({
            email: credentials.email,
            password: credentials.password,
          });
          if (error) return { error };
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
