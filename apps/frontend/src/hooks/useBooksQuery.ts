import { BookDetailProps } from "@/types/book.types";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export function useBookQuery() {
	const { data, isLoading, error } = useQuery<BookDetailProps[]>({
		queryKey: ["books"],
		queryFn: async () => {
			const response = await axios.get("http://localhost:3001/book/all-books");
			if (!response.data.success) {
				throw new Error("Network response was not ok");
			}
			console.log("ini response", response.data);
			return JSON.parse(JSON.stringify(response.data.data));
		},
	});

	return { data, isLoading, error };
}
