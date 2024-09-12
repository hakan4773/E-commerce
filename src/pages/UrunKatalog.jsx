import React, { useContext } from "react";
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Api/Api";
import { Productcontext } from "../context/ProductContext";

function UrunKatalog() {
  const { AddFavorite,isFavorite,addBasket,updateQuantity } = useContext(Productcontext);

  const navigate = useNavigate();
  const { data, error, isLoading } = useProducts();

  const navigateProduct = (id) => {
    navigate(`/UrunDetay/${id}`);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <div className="">
      <h2 className="text-black text-2xl flex text-center justify-center items-center py-1">
        PRODUCTS
      </h2>

      <div className="p-5">
        {data.map((product) => (
          <div
            className="relative flex border-solid border-2 rounded-md m-2"
            key={product.id}
          >
            <img
              className="w-[100px] "
              src={product.image}
              alt={product.title}
            />

            <div className="absolute top-2 right-2">
            <button
                className={`p-2 rounded-full ${isFavorite(product) ? 'bg-red-500' : 'bg-white'}`}
                onClick={() => AddFavorite(product)}
                >
                  {isFavorite(product) ? <MdFavorite size={20} /> : <MdFavoriteBorder size={20} />}

                  </button>
            </div>
            <div className="text-[18px] p-3 m-5">
              <p className="font-semibold">
                {" "}
                <span className="font-semibold text-red-500">
                  Ürün Adı:
                </span>{" "}
                {product.title}
              </p>
              <p className="font-semibold">
                <span className="font-semibold text-red-500">
                  Ürün Fiyatı:{" "}
                </span>
                {product.price} TL
              </p>
              <p className="font-semibold">
                <span className="font-semibold text-red-500">Kategori: </span>{" "}
                {product.category}
              </p>
              <p className="font-semibold">
                <span className="font-semibold text-red-500">Adet: </span>{" "}
               
                <input type='number' min="1" onChange={(e) => updateQuantity(product.id, e.target.value)}
                 className='w-12 p-1 text-center border border-gray-300' value={product.quantity}></input> 
              </p>
            </div>

            <div className="flex  ml-auto justify-center items-center text-center ">
              <button
                className="bg-red-400 p-2 m-3  border-solid border-2 rounded-md hover:bg-red-300"
                onClick={() => navigateProduct(product.id)}
              >
                Ürün Detay{" "}
              </button>
              <button
                className="bg-green-400 p-2 m-3  border-solid border-2 rounded-md hover:bg-green-300"
                onClick={() => addBasket(product)}
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

export default UrunKatalog;
