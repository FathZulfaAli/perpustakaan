"use client";

import { useBookQuery } from "@/hooks/useBooksQuery";
import React from "react";
import BookDetail from "./BookDetail";

function BooksTable() {
	const { data: books, isLoading } = useBookQuery();
	return (
		<div className='w-full py-10 px-4 text-center text-black bg-white rounded-b-3xl text-sm'>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[1000px]'>
					<thead>
						<tr className='border-b-[1px] border-gray-300 text-gray-400'>
							<th className='px-2 py-2'>Id</th>
							<th className='px-2 py-2'>Nama Buku</th>
							<th className='px-2 py-2'>Kategori</th>
							<th className='px-2 py-2'>Penerbit</th>
							<th className='px-2 py-2'>ISBN</th>
							<th className='px-2 py-2'>ISSN</th>
							<th className='px-2 py-2'>Pembuat</th>
							<th className='px-2 py-2'>Tahun</th>
							<th className='px-2 py-2'>Harga</th>
							<th className='px-2 py-2'>Keterangan</th>
							<th className='px-2 py-2'>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{books?.map((book) => (
							<BookDetail key={book.id} book={book} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BooksTable;
