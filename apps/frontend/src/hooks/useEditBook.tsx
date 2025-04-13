import { CreateBookProps } from "@/types/book.types";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";

type EditBookPayload = {
	bookId: string;
	bookData: CreateBookProps;
};

export function useEditBook() {
	return useMutation({
		mutationFn: async ({ bookId, bookData }: EditBookPayload) => {
			const response = await axios.put(`http://localhost:3001/book/edit/${bookId}`, bookData);
			if (!response.data.success) {
				throw new Error("Failed to edit book");
			}
			console.log("Edited book:", response.data);
			return response.data.data;
		},
	});
}
