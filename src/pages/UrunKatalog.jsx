import React, { useContext } from "react";
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Api/Api";
import { Productcontext } from "../context/ProductContext";
import { FaSearch } from 'react-icons/fa';

function UrunKatalog() {
  const { AddFavorite,isFavorite,addBasket,HandleSearch,query,HandleSelect,categorys} = useContext(Productcontext);

  const navigate = useNavigate();
  const { data, error, isLoading } = useProducts();

  const navigateProduct = (id) => {
    navigate(`/UrunDetay/${id}`);
  };
  const filteredProducts = data ? data.filter(product =>
 
    (product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())) &&
    (categorys === "" || categorys === "All Categories" || product.category.toLowerCase() === categorys.toLowerCase())
  ) : [];


  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <div className="flex flex-col ">
     
  
     <div className="relative flex justify-center items-center p-2 bg-slate-400">
     <select onChange={HandleSelect} value={categorys} className="m-4 border-2 border-collapse rounded-sm w-48">
     <option value="All Categories">All Categories</option>
   
    <option value="men's clothing">men's clothing</option>
    <option value="Women's clothing">Women's clothing</option>
    <option value="Electronics">Electronics</option>


    </select>
  <div className="relative w-80">
 
    <input
      onChange={HandleSearch}
      type="text"
      value={query}
      className="border border-gray-300 rounded pl-10 pr-4 py-2 w-full"
      placeholder="Ürün,Marka veya kategori arayınız"
     
    />
 
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>
  
</div>

      <div className="px-4">
        {filteredProducts.map((product) => (
          <div
            className="relative flex border-solid border-2 rounded-md m-2"
            key={product.id}
          >
            <img
              className="w-[100px] m-2 "
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
            <div className="text-[16px] p-3 m-5">
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
           
            </div>

            <div className="flex ml-auto justify-center items-center text-center ">
              <button
                className="bg-red-400 p-2 m-3  border-solid  w-auto  border-1 rounded-md hover:bg-red-300"
                onClick={() => navigateProduct(product.id)}
              >
                Ürün Detay{" "}
              </button>
              <button
                className="bg-green-400 p-2 m-3  border-solid border-1 rounded-md hover:bg-green-300"
                onClick={() => addBasket(product,product.quantity || 1)}
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
