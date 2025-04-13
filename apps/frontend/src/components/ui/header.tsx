import React from "react";
import Magnifier from "../../../public/magnifier";

function Header() {
	return (
		<div className='flex flex-row w-full items-center justify-between py-10 px-4 text-center text-black bg-white rounded-t-3xl'>
			<h1 className='text-3xl font-bold'>Perpustakaan</h1>
			<div className='flex flex-col items-center justify-center'>
				<div className='flex items-center pl-2  w-80 h-10 rounded-lg bg-gray-300 focus:outline-none focus:border-blue-500 '>
					<Magnifier />
					<input type='text' placeholder='Search' className='focus:outline-none pl-2' />
				</div>
			</div>
		</div>
	);
}

export default Header;
