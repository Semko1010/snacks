"use client"
import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Products from "../../public/products.json"
export default function Home() {
  const [products,setProducts] = useState(Products)
  const [search,setSearch] = useState("")
  
 
 

  return (
    <main className="">
     <Header search={{search,setSearch}}/>
     
     {products?.filter((i: { name: string }) => {
     
      
							return search.toLowerCase() === ""
								? i
								: i.name.toLowerCase().includes(search);
						}).map((item,index)=>{
              return(
                <div key={index} className="flex flex-col justify-center items-center p-6 ">
                
                  <h2>{item.name}</h2>
                  <img className="w-42" src={`${item.image}`} alt="" />
                  <p className="text-center">{item.Inhaltsstoffe}</p>
                </div>
              )
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
  )
}
