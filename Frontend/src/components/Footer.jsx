import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
<footer className=" w-screen bg-sky-900 ">
    <h3 className=' text-center font-bold p-4'>Sosyal Medya Hesaplarınız ile paylaşın</h3>
  <div className="flex   justify-center items-center space-x-6">
 
    <Link to={"https://www.instagram.com/accounts/login/"} className='hover:text-white '> <FaInstagram  size={30}/></Link>
    <Link to={"https://x.com/?lang=tr"} className='hover:text-white '> <BsTwitterX  size={30}/></Link>
    <Link to={"https://www.youtube.com/"} className='hover:text-white '> <FaYoutube  size={30}/></Link>
    <Link to={"https://www.facebook.com/?locale=tr_TR"} className='hover:text-white '><FaFacebook  size={30}/></Link>

  
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
