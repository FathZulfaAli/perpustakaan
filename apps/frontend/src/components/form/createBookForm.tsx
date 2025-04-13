"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateBookForm = () => {
	const initialValues = {
		namaBuku: "",
		kategori: "",
		penerbit: "",
		isbn: "",
		issn: "",
		pembuat: "",
		tahunPembuatan: "",
		harga: "",
	};

	const validationSchema = Yup.object({
		namaBuku: Yup.string().required("Judul Buku wajib diisi"),
		kategori: Yup.string().required("Kategori wajib diisi"),
		penerbit: Yup.string().required("Penerbit wajib diisi"),
		isbn: Yup.string().required("ISBN wajib diisi"),
		issn: Yup.string().required("ISSN wajib diisi"),
		pembuat: Yup.string().required("Penulis wajib diisi"),
		tahunPembuatan: Yup.string().required("Tahun Pembuatan wajib diisi"),
		harga: Yup.string().required("Harga Buku wajib diisi"),
	});

	const handleSubmit = (values: typeof initialValues) => {
		console.log("Form values:", values);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className='flex flex-col items-left justify-start w-full mt-4'>
				{[
					{ name: "namaBuku", label: "Judul Buku" },
					{ name: "kategori", label: "Kategori" },
					{ name: "penerbit", label: "Penerbit" },
					{ name: "isbn", label: "ISBN" },
					{ name: "issn", label: "ISSN" },
					{ name: "pembuat", label: "Penulis" },
					{ name: "tahunPembuatan", label: "Tahun Pembuatan" },
					{ name: "harga", label: "Harga Buku" },
				].map((field) => (
					<div key={field.name} className='mb-4'>
						<label htmlFor={field.name}>{field.label}</label>
						<Field
							type='text'
							id={field.name}
							name={field.name}
							className='w-1/3 h-10 px-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
						/>
						<ErrorMessage
							name={field.name}
							component='div'
							className='text-red-500 text-sm mt-1'
						/>
					</div>
				))}

				<button
					type='submit'
					className='w-1/3 h-10 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
				>
					Submit
				</button>
			</Form>
		</Formik>
	);
};

export default CreateBookForm;
