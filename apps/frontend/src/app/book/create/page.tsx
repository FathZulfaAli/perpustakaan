import CreateBookForm from "@/components/form/createBookForm";
import React from "react";

export default function CreateBookIndex() {
	return (
		<div className='w-auto py-10 px-4 text-black bg-white rounded-3xl text-sm m-8 flex'>
			<div className='w-full flex flex-col items-left justify-start'>
				<h1 className='text-2xl font-bold'>Create Book</h1>
				<CreateBookForm />
			</div>
		</div>
	);
}
