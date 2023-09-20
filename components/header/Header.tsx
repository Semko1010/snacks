import { SetStateAction, useEffect, useState } from "react"

interface search {
  search:{
    search:string,
    setSearch:React.Dispatch<SetStateAction<string>>
  }
  changeValue:{
    changeValue:boolean
    setChangeValue:React.Dispatch<SetStateAction<boolean>>
  }
}

const Header = (props:search) => {
const [showMenu, setShowMenu] = useState<boolean>(false)

const menu = () =>{
  // props.changeValue.setChangeValue(false)
  setShowMenu(!showMenu)
}
const searchMenu = (e:any) =>{
  props.changeValue.setChangeValue(true)
  props.search.setSearch(e.target.value.toLowerCase())
}
const Home = () =>{
  props.changeValue.setChangeValue(false)
  props.search.setSearch("")
  setShowMenu(false)
}
const Chips = () =>{
  props.changeValue.setChangeValue(false)
  props.search.setSearch("chips")
  setShowMenu(false)
}
const Candys = () =>{
  props.changeValue.setChangeValue(false)
  props.search.setSearch("candys")
  setShowMenu(false)
}
const Drinks = () =>{
  props.changeValue.setChangeValue(false)
  props.search.setSearch("drinks")
  setShowMenu(false)
}
const Pickles = () =>{
  props.changeValue.setChangeValue(false)
  props.search.setSearch("pickles")
  setShowMenu(false)
}

    return (
       
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dellen-Snack</span>
    </a>
    <button onClick={menu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {showMenu ? <div className=" w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"><button onClick={Home}>Home</button></a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><button onClick={Chips}>Chips</button></a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><button onClick={Candys}>Candys</button></a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><button onClick={Drinks}>Drinks</button></a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><button onClick={Pickles}>Pickles</button></a>
        </li>
      </ul>
    </div> : null}
  </div>
  <div className="flex justify-center">
  <input placeholder="Suchen" className="border text-center py-2 px-8" onChange={searchMenu} type="text" />
  </div>
  
</nav>


  )
}
export default Header