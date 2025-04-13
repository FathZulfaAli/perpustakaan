import { Hono } from "hono";
import { db } from "../db/db";
import { bookScheme } from "../db/schema/book";
import { generateRandomId } from "../helpers/generateRandomId";
import { and, eq, isNull } from "drizzle-orm";

export const bookRoutes = new Hono();

bookRoutes.post("/create", async (c) => {
	try {
		const body = await c.req.json();
		const {
			namaBuku,
			kategoriBuku,
			penerbit,
			isbn,
			issn,
			pembuat,
			tahunPembuatan,
			harga,
			keterangan,
		} = body;

		console.log("ini body", body);

		if (
			!namaBuku ||
			!kategoriBuku ||
			!penerbit ||
			!isbn ||
			!issn ||
			!pembuat ||
			!tahunPembuatan ||
			!harga
		) {
			return c.json({ error: "All fields are required." }, 400);
		}

		const randomId = generateRandomId();

		const result = await db.insert(bookScheme).values({
			id: randomId,
			namaBuku,
			kategoriBuku,
			penerbit,
			isbn,
			issn,
			pembuat,
			tahunPembuatan,
			harga,
			keterangan,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		console.log("ini result", result);

		return c.json({ success: true, data: result });
	} catch (error) {
		return c.json({ success: false, error: error }, 500);
	}
});

bookRoutes.put("/edit/:id", async (c) => {
	try {
		const id = c.req.param("id");
		const body = await c.req.json();

		if (!id) {
			return c.json({ error: "ID is required." }, 400);
		}

		const {
			namaBuku,
			kategoriBuku,
			penerbit,
			isbn,
			issn,
			pembuat,
			tahunPembuatan,
			harga,
			keterangan,
		} = body;

		if (!namaBuku || !pembuat) {
			return c.json({ error: "Nama Buku and Pembuat are required." }, 400);
		}

		const result = await db
			.update(bookScheme)
			.set({
				namaBuku,
				kategoriBuku,
				penerbit,
				isbn,
				issn,
				pembuat,
				tahunPembuatan,
				harga,
				keterangan,
				updatedAt: new Date(),
			})
			.where(eq(bookScheme.id, id));

		return c.json({ success: true, updated: result });
	} catch (error) {
		return c.json({ success: false, error: error }, 500);
	}
});

bookRoutes.delete("/delete/:id", async (c) => {
	try {
		const id = c.req.param("id");

		if (!id) {
			return c.json({ error: "ID is required." }, 400);
		}

		const result = await db
			.update(bookScheme)
			.set({
				deletedAt: new Date(),
			})
			.where(eq(bookScheme.id, id));

		return c.json({ success: true, deleted: result });
	} catch (error) {
		return c.json({ success: false, error: error }, 500);
	}
});

bookRoutes.get("/all-books", async (c) => {
	try {
		const result = await db.select().from(bookScheme).where(isNull(bookScheme.deletedAt));

		return c.json({ success: true, data: result });
	} catch (error) {
		return c.json({ success: false, error: error }, 500);
	}
});

bookRoutes.get("/single/:id", async (c) => {
	try {
		const id = c.req.param("id");
		if (!id) return c.json({ success: false, error: "Missing book ID" }, 400);

		const [book] = await db
			.select()
			.from(bookScheme)
			.where(and(eq(bookScheme.id, id), isNull(bookScheme.deletedAt)));

		if (!book) {
			return c.json({ success: false, error: "Book not found" }, 404);
		}

		return c.json({ success: true, data: book });
	} catch (error) {
		console.error(error);
		return c.json({ success: false, error: "Internal server error" }, 500);
	}
});
