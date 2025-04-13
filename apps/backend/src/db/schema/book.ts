import * as s from "drizzle-orm/sqlite-core";

export const bookScheme = s.sqliteTable("books", {
	id: s.text("id").primaryKey(),
	namaBuku: s.text("nama_buku").notNull(),
	kategoriBuku: s.text("kategori_buku").notNull(),
	penerbit: s.text("penerbit").notNull(),
	isbn: s.text("isbn").notNull(),
	issn: s.text("issn").notNull(),
	pembuat: s.text("pembuat").notNull(),
	tahunPembuatan: s.integer("tahun_pembuatan").notNull(),
	harga: s.integer("harga").notNull(),
	keterangan: s.text("keterangan").notNull(),
	createdAt: s.integer("created_at", { mode: "timestamp" }),
	updatedAt: s.integer("updated_at", { mode: "timestamp" }),
	deletedAt: s.integer("deleted_at", { mode: "timestamp" }),
});
