import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { bookRoutes } from "./routes/book.routes";

const app = new Hono();
const PORT = 3001;

app.use("*", cors());
app.get("/", async (c) => {
	try {
		return c.text("📚 Backend is live!");
	} catch (error) {
		console.error(error);
		return c.text("Error", 500);
	}
});

app.route("/book", bookRoutes);
console.log(`Backend server running at http://localhost:${PORT}`);

serve({
	fetch: app.fetch,
	port: PORT,
});
