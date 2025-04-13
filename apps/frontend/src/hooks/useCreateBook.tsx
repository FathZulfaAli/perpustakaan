import { CreateBookProps } from "@/types/book.types";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";

export function useCreateBook() {
	return useMutation({
		mutationFn: async (bookData: CreateBookProps) => {
			const response = await axios.post("http://localhost:3001/book/create", bookData);
			if (!response.data.success) {
				throw new Error("Failed to create book");
			}
			console.log("Created book:", response.data);
			return response.data.data;
		},
	});
}
