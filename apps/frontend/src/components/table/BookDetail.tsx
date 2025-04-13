"use client";

import { BookDetailProps } from "@/types/book.types";
import React from "react";

export default function BookDetail({ book }: { book: BookDetailProps }) {
	return (
		<tr>
			<td className='px-2 py-2'>{book.id}</td>
			<td className='px-2 py-2'>{book.namaBuku}</td>
			<td className='px-2 py-2'>{book.kategoriBuku}</td>
			<td className='px-2 py-2'>{book.penerbit}</td>
			<td className='px-2 py-2'>{book.isbn}</td>
			<td className='px-2 py-2'>{book.issn}</td>
			<td className='px-2 py-2'>{book.pembuat}</td>
			<td className='px-2 py-2'>{book.tahunPembuatan}</td>
			<td className='px-2 py-2'>{book.harga}</td>
			<td className='px-2 py-2'>
				{book.keterangan.split(" ").slice(0, 3).join(" ") +
					(book.keterangan.split(" ").length > 3 ? " ..." : "")}
			</td>
			<td className='px-2 py-2 whitespace-nowrap'>
				<div className='flex justify-center items-center gap-2'>
					<button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Edit</button>
					<button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Hapus</button>
					<button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Detail</button>
				</div>
			</td>
		</tr>
	);
}
