import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";

const client = createClient({
	url: process.env.TURSO_URL!,
	authToken: process.env.TURSO_KEY!,
});

export const db = drizzle({ client });
