import { createContext, useEffect, useReducer } from "react";
import {ProductReducer,initialState} from "../Api/Reducer";

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const AddFavorite = (product) => {
    if (state.favorites.find((item) => item.id === product.id)) {
      //ürün favorilerde varmı varsa sil
      dispatch({ type: "REMOTE_FAVORITE", product });
    } else {
      //yoksa favorilere ekle
      dispatch({ type: "ADD_FAVORITE", product });
    }
  };
  const addBasket = (product, quantity) => {
    dispatch({ type: "ADD_BASKET", product: {...product, quantity } });
  };
  

  const Remove_Basket = (product) => {
    //sepetten sil
    dispatch({ type: "REMOVE_BASKET", product });
  };

  const updateQuantity = (product, newQuantity) => { //Adet bilgisi güncelleme
    dispatch({
      type: "UPDATE_QUANTITY",
      product, 
      quantity: parseInt(newQuantity)
    });
  };


  const isFavorite = (product) => {
    //Ürün Favorilerde varmı kontrol et
    return state.favorites.some((fav) => fav.id === product.id);
  };


  const HandleSearch=(e)=>{
    //ürün filtreleme
    dispatch({type:"QUERY",payload:e.target.value})
  }

  const HandleSelect=(e)=>{
    //Kategori filtreleme
    dispatch({type:"CATEGORY",payload:e.target.value})
  }
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    localStorage.setItem("basket", JSON.stringify(state.basket));

  },[state.favorites,state.basket])

  const values = {
    favorites: state.favorites,
    basket: state.basket,
    AddFavorite,
    isFavorite,
    addBasket,
    Remove_Basket,
    updateQuantity,
    HandleSearch,
    query:state.query,
    HandleSelect,
    categorys:state.categorys,   
 
  };


  return (
    <Productcontext.Provider value={values}>{children}</Productcontext.Provider>
  );
};

export const Productcontext = createContext();
