"use client";

import { useEditBook } from "@/hooks/useEditBook";
import { useSingleBook } from "@/hooks/useSingleBook";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const EditBookForm = ({ bookId }: { bookId: string }) => {
	const router = useRouter();
	const { data: book, isLoading } = useSingleBook(bookId);
	const { mutate, error } = useEditBook();

	const initialValues = {
		namaBuku: book?.namaBuku || "",
		kategoriBuku: book?.kategoriBuku || "",
		penerbit: book?.penerbit || "",
		isbn: Number(book?.isbn) || 0,
		issn: Number(book?.issn) || 0,
		pembuat: book?.pembuat || "",
		tahunPembuatan: book?.tahunPembuatan || 0,
		harga: book?.harga || 0,
		keterangan: book?.keterangan || "",
	};

	const validationSchema = Yup.object({
		namaBuku: Yup.string().required("Judul Buku wajib diisi"),
		kategoriBuku: Yup.string().required("Kategori wajib diisi"),
		penerbit: Yup.string().required("Penerbit wajib diisi"),
		isbn: Yup.number().typeError("ISBN harus berupa angka").required("ISBN wajib diisi"),
		issn: Yup.number().typeError("ISSN harus berupa angka").required("ISSN wajib diisi"),
		pembuat: Yup.string().required("Penulis wajib diisi"),
		tahunPembuatan: Yup.number()
			.typeError("Tahun Pembuatan harus berupa angka")
			.required("Tahun Pembuatan wajib diisi"),
		harga: Yup.number()
			.typeError("Harga Buku harus berupa angka")
			.required("Harga Buku wajib diisi"),
		keterangan: Yup.string(),
	});

	const handleSubmit = (values: typeof initialValues) => {
		console.log("Firing submit", values);
		mutate(
			{ bookId: bookId, bookData: values },
			{
				onSuccess: (data) => {
					console.log("Book updated!", data);
					router.push("/");
				},
				onError: (err) => {
					console.error("Failed to update book", err);
				},
			}
		);
	};

	const handleCancel = () => {
		router.push("/");
	};

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className='w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4'>
				{[
					{ name: "namaBuku", label: "Judul Buku" },
					{ name: "kategoriBuku", label: "Kategori" },
					{ name: "penerbit", label: "Penerbit" },
					{ name: "isbn", label: "ISBN" },
					{ name: "issn", label: "ISSN" },
					{ name: "pembuat", label: "Penulis" },
					{ name: "tahunPembuatan", label: "Tahun Pembuatan" },
					{ name: "harga", label: "Harga Buku" },
					{ name: "keterangan", label: "Keterangan" },
				].map((field) => (
					<div key={field.name} className='mb-4 flex flex-col'>
						<label htmlFor={field.name}>{field.label}</label>
						<Field
							type='text'
							id={field.name}
							name={field.name}
							className='w-full h-10 px-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
						/>
						<ErrorMessage
							name={field.name}
							component='div'
							className='text-red-500 text-sm mt-1'
						/>
					</div>
				))}
				<div className='gap-x-4 w-full'>
					<button
						type='submit'
						className='w-1/2 h-10 mt-4 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
					>
						Submit
					</button>
					<button
						onClick={handleCancel}
						className='w-1/2 h-10 mt-4 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
					>
						Cancel
					</button>
				</div>
			</Form>
		</Formik>
	);
};

export default EditBookForm;
