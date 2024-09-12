import React from 'react'
import Footer from '../components/Footer'

function Home() {

  return (
    <div className='flex flex-col items-center justify-center text-center'>{/* w-full h-full flex items-center justify-center text-center */}
      
      <div className="relative inline-block p-10 ">
      <img
        src="https://ld-magento-72.template-help.com/magento_53638/pub/media/wysiwyg/banner-4.jpg"
        alt="Product"
        className="w-full h-[400px]"
      />
      <a href='/UrunKatalog'
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-2 rounded hover:bg-red-200">
       Show Products
      </a>
    </div>
    <Footer />
    </div>
    
  )
}

export default Home
