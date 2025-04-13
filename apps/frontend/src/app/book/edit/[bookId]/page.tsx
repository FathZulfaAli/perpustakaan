"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function EditBook() {
	const { bookId } = useParams();

	return <div>EditBook{bookId}</div>;
}
