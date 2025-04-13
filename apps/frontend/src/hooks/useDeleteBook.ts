import { useMutation } from "@tanstack/react-query";

import axios from "axios";

export function useDeleteBook() {
	return useMutation({
		mutationFn: async (bookId: string) => {
			const response = await axios.delete(`http://localhost:3001/book/delete/${bookId}`);
			if (!response.data.success) {
				throw new Error("Failed to delete book");
			}
			return response.data.data;
		},
	});
}
