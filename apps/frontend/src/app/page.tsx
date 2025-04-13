import BooksTable from "@/components/table/BooksTable";
import Header from "@/components/ui/header";

export default function Home() {
	return (
		// bg-[#FAFBFF]
		<main className='flex min-h-screen flex-col items-center bg-black p-8'>
			<Header />
			<BooksTable />
		</main>
	);
}
