"use client";

import BooksTable from "@/components/table/BooksTable";
import Header from "@/components/ui/header";
import { useBookQuery } from "@/hooks/useBooksQuery";
import { useState } from "react";

export default function Home() {
	const { data: books, isLoading } = useBookQuery();
	const [searchQuery, setSearchQuery] = useState("");

	// Handle the search query change
	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};
	return (
		// bg-[#FAFBFF]
		<main className='flex min-h-screen flex-col items-center bg-black p-8'>
			<Header onSearch={handleSearch} />
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<BooksTable books={books || []} searchQuery={searchQuery} />
			)}
		</main>
	);
}
