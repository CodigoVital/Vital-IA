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
            options: { data: { display_name: credentials.displayName } },
          });
          if (error) return { error };
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),

    recovery: builder.mutation({
      async queryFn(email) {
        try {
          const { data, error } = await supabase.auth.resetPasswordForEmail(
            email,
            {
              redirectTo: "https://vital-ia-dev2.onrender.com/auth/recovery/reset",
            }
          );
          if (error) return { error };
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
    resetPassword: builder.mutation({
      async queryFn(newPassword: string) {
        try {
          const { data, error } = await supabase.auth.updateUser({
            password: newPassword,
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

export const {
  useLoginMutation,
  useRegisterMutation,
  useRecoveryMutation,
  useResetPasswordMutation,
} = authApi;
