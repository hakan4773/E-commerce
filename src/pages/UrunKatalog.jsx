import React, { useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Api/Api";
import { Productcontext } from "../context/ProductContext";
import { FaSearch } from 'react-icons/fa';

function UrunKatalog() {
  const { AddFavorite, isFavorite, addBasket, HandleSearch, query, HandleSelect, categorys, basket, updateQuantity } = useContext(Productcontext);

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
    <div className="flex flex-col sm:space-y-6 space-y-4">
      <div className="relative w-screen flex flex-col sm:flex-row justify-center items-center p-2 bg-slate-400 space-y-4 sm:space-y-0">
        <select onChange={HandleSelect} value={categorys} className="m-4 border-2 border-collapse rounded-sm w-48">
          <option value="All Categories">All Categories</option>
          <option value="men's clothing">men's clothing</option>
          <option value="Women's clothing">Women's clothing</option>
          <option value="Electronics">Electronics</option>
        </select>
        <div className="relative sm:w-80">
          <input
            onChange={HandleSearch}
            type="search"
            value={query}
            autoFocus="autofocus"
            className="border border-gray-300 rounded pl-10 pr-4 py-2 w-full"
            placeholder="Ürün, Marka veya kategori arayınız"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          const productInBasket = basket.find(item => item.id === product.id);

          return (
            <div
              className="flex flex-col border-solid border-2 rounded-md m-2"
              key={product.id}
            >
<div>  <button
                    className={`absolute p-2 rounded-full ${isFavorite(product) ? 'bg-red-500' : 'bg-white'}`}
                    onClick={() => AddFavorite(product)}
                  >
                    {isFavorite(product) ? <MdFavorite size={18} /> : <MdFavoriteBorder size={20} />}
                  </button> </div>
              {/* Ürün resmi divi */}
             <div className="flex justify-center text-center items-center">
              
               <img
                className="w-[100px] h-40  rounded-t-md"
                src={product.image}
                alt={product.title}
              /> </div>

              <div className="p-3 flex flex-col flex-grow">

                <div className="relative flex-grow">
                 
                  <p className="font-semibold sm:mr-4">
                    <span className="font-semibold text-red-500">Ürün Adı:</span> {product.title}
                  </p>
                  <p className="font-semibold sm:mr-4">
                    <span className="text-red-500">Ürün Fiyatı:</span> {product.price} TL
                  </p>
                  <p className="font-semibold sm:mr-4">
                    <span className="text-red-500">Kategori:</span> {product.category}
                  </p>
                  <p className="font-semibold sm:mr-4">
                    <span className="font-semibold text-red-500">Adet:</span>
                    <input
                      type="number"
                      value={productInBasket ? productInBasket.quantity : 1} // Eğer ürün sepette değilse 1 değeri gösterilir
                      onChange={(e) => updateQuantity(product, e.target.value)}
                      className="w-12 h-[30px] p-1 text-center border border-gray-300"
                    />
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0">
                  <button
                    className="bg-red-400 p-2 m-3 sm:w-auto border-solid w-full border-1 rounded-md hover:bg-red-300"
                    onClick={() => navigateProduct(product.id)}
                  >
                    Ürün Detay
                  </button>
                  <button
                    className="bg-green-400 p-2 m-3 sm:w-auto w-full border-solid border-1 rounded-md hover:bg-green-300"
                    onClick={() => addBasket(product, product.quantity)}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UrunKatalog;
