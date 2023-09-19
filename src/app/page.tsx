"use client"
import Header from "../../components/header/Header"
import Products from "../../public/products.json"
export default function Home() {
  console.log("Prodducts",Products);
  
  
  return (
    <main className="">
     <Header/>
{Products.map((item,index) =>{
  console.log(item);
  return(
    <div key={index} className="flex flex-col justify-center items-center p-6 ">
    
      <h2>{item.name}</h2>
      <img className="w-42" src={`${item.image}`} alt="" />
      <p className="text-center">{item.Inhaltsstoffe}</p>
    </div>
  )
  
})}
    </main>
  )
}
