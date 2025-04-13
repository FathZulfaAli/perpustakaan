"use client";

import EditBookForm from "@/components/form/editBookForm";
import { useParams } from "next/navigation";
import React from "react";

export default function EditBook() {
	const { bookId } = useParams() as { bookId: string };

	return (
		<div className='w-auto py-10 px-4 text-black bg-white rounded-3xl text-sm m-8 flex'>
			<div className='w-full flex flex-col items-left justify-start'>
				<h1 className='text-2xl font-bold'>Editing {bookId} Book</h1>
				<EditBookForm bookId={bookId} />
			</div>
		</div>
	);
}
