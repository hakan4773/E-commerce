import React, { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../Api/Api";
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Productcontext } from "../context/ProductContext";
import { useNavigate } from 'react-router-dom';

function UrunDetay() {
  const navigate = useNavigate();

  const { id } = useParams(); // URL parametresinden ID'yi al
  const { AddFavorite,isFavorite,addBasket,basket,updateQuantity} = useContext(Productcontext);
  const { data, error, isLoading } = ProductDetail(id); // Ürünü çekmek için kancayı kullan

  if (isLoading) return <div>Loading...</div>; // Yükleniyor durumunu kontrol et
  if (error) return <div>Error loading product: {error.message}</div>; // Hata durumunu kontrol et
  if (!data) return <div>No product found.</div>; // Ürün bulunamazsa
 
  const goBack = () => {
    navigate(-1); // Bir önceki sayfaya yönlendirir
  };
  const productInBasket = basket.find(item => item.id === data.id);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-500">
      <div className="relative w-fullsm:w-[500px] h-auto border-solid border-2 rounded-lg m-5 bg-white ">
    
     <div className="absolute "><button className="hover:bg-gray-400 rounded-full" onClick={goBack}> 
     <IoArrowBackCircleOutline size={30} />
      </button>
      </div>

        <div className="absolute top-2 right-2 p-1">
        <button
                className={`p-2 rounded-full ${isFavorite(data) ? 'bg-red-500' : 'bg-white'}`}
                onClick={() => AddFavorite(data)}
                >
                  {isFavorite(data) ? <MdFavorite size={20} /> : <MdFavoriteBorder size={20} />}
                  </button>
        </div>
        <div className="flex justify-center items-center  p-8 ">
          <img
            className="w-[100px] h-[100px] rounded-sm"
            src={data.image}
            alt={data.name}
          />
        </div>

        <div className="flex flex-col text-start justify-start items-start m-5 p-2">
          <p className="font-serif">
            {" "}
            <span className="font-semibold text-red-500">Ürün Adı:</span>{" "}
            {data.title} 
          </p>
          <hr className="text-black text-bold"></hr>
          <p className="font-serif">
            <span className="font-semibold text-red-500">Ürün Fiyatı: </span>
            {data.price} TL 
          </p>
          <hr className="text-black text-bold"></hr>
          <p className="font-serif">
            <span className="font-semibold text-red-500">Bilgi: </span>{" "}
            {data.description}
          
          </p>
          <hr className="text-black text-bold"></hr>{" "}
          <p className="font-serif">
            <span className="font-semibold text-red-500">Kategori: </span>{" "}
            {data.category} 
          </p>
          <p className="font-semibold">
                <span className="font-semibold text-red-500">Adet: </span>
               
                <input
                  type="number"
                  min={1}
                  value={productInBasket ? productInBasket.quantity : 1} // Eğer ürün sepette değilse 1 değeri gösterilir
                  onChange={(e) =>       
                  updateQuantity(data,e.target.value)}      
                  className="w-12 h-[30px] p-1 text-center border border-gray-300"
                 
                />

              </p>
             
          <hr className="text-black text-bold"></hr>
          {productInBasket &&   `sepetinizde bu üründen ${productInBasket.quantity} adet ürün bulunmaktadır` }
        </div>

        <button className="border-solid border-1 rounded-md bg-green-500 m-2 p-2 hover:bg-slate-300  text-white"
        onClick={() => addBasket(data,data.quantity)}

        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default UrunDetay;
