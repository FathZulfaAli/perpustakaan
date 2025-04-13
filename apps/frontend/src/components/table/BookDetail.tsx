"use client";

import { useDeleteBook } from "@/hooks/useDeleteBook";
import { BookDetailProps } from "@/types/book.types";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export default function BookDetail({ book }: { book: BookDetailProps }) {
	const router = useRouter();
	const { mutate, error } = useDeleteBook();
	const queryClient = useQueryClient();

	const handleClickEdit = () => {
		router.push(`/book/edit/${book.id}`);
	};

	const handleClickDelete = () => {
		console.log("firing delete book", book.id);
		mutate(book.id, {
			onSuccess: (data) => {
				console.log("Book deleted!", data);
				queryClient.invalidateQueries({ queryKey: ["books"] });
				router.push("/");
			},
			onError: (err) => {
				console.error("Failed to delete book", err);
			},
		});
	};

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
					<button
						onClick={handleClickEdit}
						className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition'
					>
						Edit
					</button>
					<button
						onClick={handleClickDelete}
						className='bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition'
					>
						Hapus
					</button>
				</div>
			</td>
		</tr>
	);
}
