export interface BookDetailProps {
	id: string;
	namaBuku: string;
	kategoriBuku: string;
	penerbit: string;
	isbn: string;
	issn: string;
	pembuat: string;
	tahunPembuatan: number;
	harga: number;
	keterangan: string;
	createdAt?: Date;
	updatedAt?: Date;
}
