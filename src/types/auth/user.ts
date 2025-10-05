import type { User as SupabaseUser } from "@supabase/supabase-js";

type UserMetadata = {
  display_name?: string;
  sub?: string;
  email_verified?: boolean;
  phone_verified?: boolean;
};

export type User = SupabaseUser & {
  user_metadata: UserMetadata;
};
