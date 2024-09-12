import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
<footer className=" w-full h-[150px] bg-pink-800">
    <h3 className=' text-center font-bold p-4'>Sosyal Medya Hesaplarınız ile paylaşın</h3>
  <div className="flex   justify-center items-center space-x-6">
 
   <button> <FaInstagram  size={30}/></button>
    <button> <BsTwitterX  size={30}/></button>
    <button> <FaYoutube  size={30}/></button>
    <button><FaFacebook  size={30}/></button>

  
    </div>
  <div className="flex  justify-center mt-4">
      <ul className=" flex font-medium  space-x-8 ">
        <li >
          <Link className="  hover:text-gray-400" to="/">
            Anasayfa
          </Link>
        </li>
        <li>
          <Link className=" hover:text-gray-400" to="/UrunKatalog">
            Urun Katalogu
          </Link>
        </li>
        <li>
          <Link className="  hover:text-gray-400" to="/Favoriler">
            Favoriler
          </Link>
        </li>
        <li>
          <Link className="  hover:text-gray-400" to="/İletisim">
            İletişim
          </Link>
        </li>
       
      </ul>
</div>

</footer>
  )
}

export default Footer
