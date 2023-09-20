"use client";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ButtonRecept from "../../components/button/Button";
import Products from "../../public/products.json";
interface product {
	name: string;
	Inhalt: string;
	Inhaltsstoffe: string;
	category: string;
	image: string;
}

interface data {
	products: product;
	setProducts: React.Dispatch<React.SetStateAction<product>>;
}

export default function Home() {
	const [products, setProducts] = useState<any>(Products);
	const [search, setSearch] = useState("");
	const [changeValue, setChangeValue] = useState(true);
	const [showFaq, setShowFaq] = useState<[] | null>();

	const toggle = (item: []) => {
		if (showFaq == item) {
			return setShowFaq(null);
		}
		setShowFaq(item);
	};

	return (
		<main className='bg-white-900'>
			<Header
				search={{ search, setSearch }}
				changeValue={{ changeValue, setChangeValue }}
			/>

			{changeValue
				? products
						?.filter((i: { name: string }) => {
							return search.toLowerCase() === ""
								? i
								: i.name.toLowerCase().includes(search);
						})
						.map((item: any, index: any) => {
							return (
								<div
									key={index}
									className='py-2 flex flex-col justify-center items-center  border m-6 bg-[white]'>
									<h2 className='text-xl text-[#434342]'>{item.name}</h2>
									<img className='w-42' src={`${item.image}`} alt='' />
									<button
										onClick={() => toggle(item)}
										className='  py-2 px-4 m-2'>
										<ButtonRecept />
									</button>
									<div
										className='p-2'
										style={
											showFaq == item
												? {
														opacity: 1,
														height: "auto",
														maxHeight: "9999px",
														transition: " all 0.5s cubic-bezier(1, 0, 1, 0)",
												  }
												: {
														opacity: 0,
														maxHeight: 0,
														overflow: "hidden",
														transition: " all 0.5s cubic-bezier(0, 1, 0, 1)",
												  }
										}>
										<p className='text-center text-[#434342]'>
											{item.Inhaltsstoffe}
										</p>
									</div>
								</div>
							);
						})
				: products
						?.filter((i: { category: any }) => {
							return search.toLowerCase() === ""
								? i
								: i.category.toLowerCase().includes(search);
						})
						.map((item: any, index: any) => {
							return (
								<div
									key={index}
									className='py-2 flex flex-col justify-center items-center  border m-6'>
									<h2 className='text-[#434342]'>{item.name}</h2>
									<img className='w-42' src={`${item.image}`} alt='' />

									<button
										onClick={() => toggle(item)}
										className=' py-2 px-4 m-2'>
										<ButtonRecept />
									</button>

									<div
										className=' w-full p-2'
										style={
											showFaq == item
												? {
														opacity: 1,
														height: "auto",
														maxHeight: "9999px",
														transition: " all 0.5s cubic-bezier(1, 0, 1, 0)",
												  }
												: {
														opacity: 0,
														maxHeight: 0,
														overflow: "hidden",
														transition: " all 0.5s cubic-bezier(0, 1, 0, 1)",
												  }
										}>
										<p className='text-center text-[#434342]'>
											{item.Inhaltsstoffe}
										</p>
									</div>
								</div>
							);
						})}
			{/* {Products.map((item,index) =>{
  
  return(
    <div key={index} className="flex flex-col justify-center items-center p-6 ">
    <input onChange={(e) => setSearch(e.target.value)} type="text" />
      <h2>{item.name}</h2>
      <img className="w-42" src={`${item.image}`} alt="" />
      <p className="text-center">{item.Inhaltsstoffe}</p>
    </div>
  )
  
})} */}
		</main>
	);
}
