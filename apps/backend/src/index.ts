import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
const PORT = 3001;

app.get("/", async (c) => {
	try {
		c.text("📚 Backend is live!");
	} catch (error) {
		console.error(error);
		return c.text("Error", 500);
	}
});
console.log(`Backend server running at http://localhost:${PORT}`);

serve({
	fetch: app.fetch,
	port: PORT,
});
