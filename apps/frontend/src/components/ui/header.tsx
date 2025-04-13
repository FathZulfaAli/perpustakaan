"use client";

import React, { useState } from "react";
import Magnifier from "../../../public/magnifier";
import { useRouter } from "next/navigation";

function Header({ onSearch }: { onSearch: (query: string) => void }) {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
		onSearch(event.target.value);
	};

	const onClick = () => {
		router.push("/book/create");
	};

	return (
		<div className='flex flex-row w-full items-center justify-between py-10 px-4 text-center text-black bg-white rounded-t-3xl'>
			<h1 className='text-3xl font-bold'>Perpustakaan</h1>
			<div className='flex flex-row items-center justify-center'>
				<div className='flex items-center pl-2 w-80 h-10 rounded-lg bg-gray-300 focus:outline-none focus:border-blue-500 '>
					<Magnifier />
					<input
						type='text'
						placeholder='Search'
						value={searchQuery}
						onChange={handleSearchChange}
						className='focus:outline-none pl-2'
					/>
				</div>
				<button
					onClick={onClick}
					className='w-1/2 h-10 ml-2 cursor-pointer bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition'
				>
					Buat Index Buku
				</button>
			</div>
		</div>
	);
}

export default Header;
