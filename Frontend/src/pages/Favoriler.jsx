import React, { useContext } from "react";
import { Productcontext } from "../context/ProductContext";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
function Favoriler() {
  const { favorites, AddFavorite,isFavorite,addBasket } = useContext(Productcontext);
  const navigate = useNavigate();

const navigateProduct=(id)=>{
  navigate(`/UrunDetay/${id}`);
}
  return (
    <div className="flex flex-col">
      <div className="p-5">
        {favorites.map((fav, index) => (
          <div
            className="relative flex border-solid border-2 rounded-md m-2"
            key={index}
          >
            <img className="w-[100px]" src={fav.image} alt={fav.title} />

            <div className="absolute right-2 overflow-hidden">
              <button
                className={`p-2 rounded-full ${isFavorite(fav) ? 'bg-red-500' : 'bg-white'}`}
                onClick={() => AddFavorite(fav)}
              >
                  {isFavorite(fav) ? <MdFavorite size={20} /> : <MdFavoriteBorder size={20} />}
                  </button>
            </div>

            <div className="text-[18px] p-3 m-5">
              <p className="font-semibold">
                {" "}
                <span className="font-semibold text-red-500">
                  Ürün Adı:
                </span>{" "}
                {fav.title}
              </p>
              <p className="font-semibold">
                <span className="font-semibold text-red-500">
                  Ürün Fiyatı:{" "}
                </span>
                {fav.price} TL
              </p>
              <p className="font-semibold">
                <span className="font-semibold text-red-500">Kategori: </span>{" "}
                {fav.category}
              </p>
            </div>

            <div className="flex flex-col  ml-auto sm:pr-8 justify-center items-center text-center sm-flex-row">
              <button
                className="bg-red-400 p-2 m-3  border-solid border-2 rounded-md active:bg-red-500"
                onClick={() => navigateProduct(fav.id)}
              >
                Ürün Detay{" "}
              </button>

              <button
                className="bg-green-400 p-2 m-3  border-solid border-2 rounded-md hover:bg-green-300"
                onClick={() => addBasket(fav)}
              >
               Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoriler;
