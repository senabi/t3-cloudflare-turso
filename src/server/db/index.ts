import { drizzle } from "drizzle-orm/libsql";

import { env } from "@/env";
import * as schema from "./schema";
import { createClient } from "@libsql/client/web";

export const db = drizzle(
  createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  }),
  { schema },
);
