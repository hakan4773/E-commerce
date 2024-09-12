import React, { useState } from 'react'
import { Productcontext } from '../context/ProductContext';
import { useContext } from 'react';
function Sepet() {
  const {basket,Remove_Basket,updateQuantity} = useContext(Productcontext);
  return (
    <div className='w-full h-screen flex p-2 '>
    <div>
      <div className='mx-5 border-collapse border w-[400px] p-2'>
<label className='text-bold text-xl'>indirim kodu </label>
        <input className='border-collapse border' ></input>
        <button className='mx-2 border-collapse border px-1 bg-blue-500 hover:bg-green-200'>Uygula</button>
      </div>



    <table className='m-5  border-collapse border border-gray-400 w-[1000px]'>
      
  <thead className='bg-slate-300'>
 
   
    <tr>
      <th className='border border-gray-300 p-2'>Sil</th>
      <th className='border border-gray-300 p-2'>Ürün</th>
      <th className='border border-gray-300 p-2'>Ürün Adı</th>
      <th className='border border-gray-300 p-2'>Kategori</th>
      <th className='border border-gray-300 p-2'>Adet</th>
      <th className='border border-gray-300 p-2'>Fiyat</th>
      <th className='border border-gray-300 p-2'>Tutar</th>
    </tr>
  </thead>
  {basket.map(product=> 
  <tbody key={product.id}>
    <tr>
      <td className='border border-gray-300 p-2'>
        <svg className="h-8 w-8 text-red-500  cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={()=>Remove_Basket(product)}>  
          <path stroke="none" d="M0 0h24v24H0z" />  
          <line x1="18" y1="6" x2="6" y2="18" />  
          <line x1="6" y1="6" x2="18" y2="18" />
         
        </svg>
        
      </td>
      <td className='border border-gray-300 p-2'>
        <img className='w-[100px]' src={product.image}></img>
      </td>
      <td className='border border-gray-300 p-2'>{product.title}</td>
      <td className='border border-gray-300 p-2'>{product.category}</td>
      <td className='border border-gray-300 p-2'><input type='number' min="1" onChange={(e) => updateQuantity(product.id, e.target.value)}
                                                    className='w-12 p-1 text-center border border-gray-300' value={product.quantity}></input> adet</td>
      <td className='border border-gray-300 p-2'>{product.price} TL</td>
      <td className='border border-gray-300 p-2 w-auto'>{product.quantity * product.price}  TL </td>
    </tr>


  </tbody>
  )}
</table>

    </div>
    </div>
  )
}

export default Sepet
