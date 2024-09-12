import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Productcontext } from "../context/ProductContext";
function Header() {
const {basket}=useContext(Productcontext)
  return (
    <div className="bg-pink-800 w-full h-[50px] flex items-center justify-center text-center">
     <div className="flex-grow flex justify-center font-medium text-zinc-50">
      <ul className="flex  space-x-8 ">
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
      <div className="flex justify-between mx-3 text-3xl text-white">
       
      <div className="text-xl text-white flex text-center justify-center items-center ">{basket.length}</div> 
          <Link className="no-underline  hover:text-gray-400" to="/Sepet">
          
           <FiShoppingCart  />
           
          </Link>
        </div>
    </div>
  );
}

export default Header;
