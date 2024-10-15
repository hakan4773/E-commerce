import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Productcontext } from "../context/ProductContext";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";

function Header() {
const {basket}=useContext(Productcontext)
  return (
    <div className="bg-sky-900 w-screen h-[50px] flex items-center justify-between px-4">
     <div className="flex-grow flex justify-center font-medium text-zinc-50">
      <ul className="flex  space-x-4 ">
        <li >
          <Link className="no-underline  hover:text-gray-400" to="/">
            Anasayfa
          </Link>
        </li>
        <li>
          <Link className="no-underline hover:text-gray-400" to="/UrunKatalog">
            Urun Katalogu
          </Link>
        </li>
        <li>
          <Link className="no-underline  hover:text-gray-400" to="/Favoriler">
            Favoriler
          </Link>
        </li>
        <li>
          <Link className="no-underline  hover:text-gray-400" to="/İletisim">
            İletişim
          </Link>
        </li>
       
      </ul>
</div>
      <div className=" flex  text-white space-x-5">
       
      <div className="text-sm text-white ">{basket.length}

          <Link className="no-underline  hover:text-gray-400 " to="/Sepet">
          
           <FiShoppingCart size={20} />
           
          </Link>
          </div> 

        <div className="text-white p-2 hover:text-gray-400">
        <a className="no-underline  hover:text-gray-400 " href="/Login">
        <FiLogIn className="border-1 text-blue-600 rounded-full bg-slate-50 p-1 hover:text-gray-400 " size={35}/>
        </a>
        </div>
        <div className="text-white py-2 " >
        <a className="no-underline  hover:text-gray-400 " href="/Register">
        <IoPersonAddOutline className="border-1 text-blue-600 rounded-full  bg-slate-50 p-1  hover:text-gray-400" size={35}/>
        </a>

        </div>
        </div>
       
        </div>
  );
}

export default Header;
