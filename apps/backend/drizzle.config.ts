import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/db/schema",
	dialect: "turso",
	dbCredentials: {
		url: process.env.TURSO_URL!,
		authToken: process.env.TURSO_KEY!,
	},
});
