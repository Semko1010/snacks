"use client"
import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Products from "../../public/products.json"
interface product{
      name: string,
      Inhalt:string,
      Inhaltsstoffe:string,
      category:string,
      image:string
}

interface data{
    products:product
    setProducts:React.Dispatch<React.SetStateAction<product>>
}

export default function Home() {
  const [products,setProducts] = useState<any>(Products)
  const [search,setSearch] = useState("")
  const [changeValue,setChangeValue] = useState(true)
  const [showFaq, setShowFaq] = useState<[] | null>()

  const toggle = (item: []) => {
    if (showFaq == item) {
      return setShowFaq(null)
    }
    setShowFaq(item)
  }
 



  return (
    <main className="bg-white-900">
     <Header search={{search,setSearch}} changeValue={{changeValue,setChangeValue}}/>
     
     {changeValue ? products?.filter((i: { name: string }) => {
     
      
							return search.toLowerCase() === ""
								? i
								: i.name.toLowerCase().includes(search);
						}).map((item:any,index:any)=>{
              return(
                <div key={index} className="flex flex-col justify-center items-center p-6 border m-6 bg-[white]">
                
                  <h2>{item.name}</h2>
                  <img className="w-40" src={`${item.image}`} alt="" />
                  <button onClick={() => toggle(item)} className="animate-bounce border py-2 px-4 m-2">Mehr anzeigen</button>
                  {showFaq == item ? <div>
                  <p className="text-center">{item.Inhaltsstoffe}</p>
                  </div> : null }
                  
                  
                </div>
              )
            }) : products?.filter((i: {
              category: any
}) => {
     
      
							return search.toLowerCase() === ""
								? i
								: i.category.toLowerCase().includes(search);
						}).map((item:any,index:any)=>{
              return(
                <div key={index} className="flex flex-col justify-center items-center p-6 border m-6">
                
                  <h2>{item.name}</h2>
                  <img className="w-42" src={`${item.image}`} alt="" />
                  <button onClick={() => toggle(item)} className="border py-2 px-4 m-2 animate-bounce">Mehr anzeigen</button>
                  
                  {showFaq == item ? <div>
                  <p className="text-center">{item.Inhaltsstoffe}</p>
                  </div> : null }
                  
                  
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
