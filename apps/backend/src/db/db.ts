import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";

const TURSO_KEY =
	"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDQ0NDM1NjYsImlkIjoiZTdjOGI2YzMtY2FiNy00ODBkLTkxYWEtZmRhMDI4YTgzNjdjIiwicmlkIjoiNmY5M2IwMDMtNTQyYS00MDdlLTkxNDUtZTZkYWI0ZDE5ZTg3In0.dOwqrS7sGAoHFblDHBYANjOAJjx0y5xnOUNnuUvb8ZL_LpneeaC3mvSugbVt9--M_54SwcppQPzdf-Ozods_Bg";
const TURSO_URL = "libsql://perpustakaan-database-fathzulfaali.aws-ap-northeast-1.turso.io";

const client = createClient({
	url: TURSO_URL,
	authToken: TURSO_KEY,
});

export const db = drizzle({ client });
