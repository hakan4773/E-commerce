import { createContext, useEffect, useReducer } from "react";
function favoriteReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE": //Favorilere ekleme
      return { ...state, favorites: [...state.favorites, action.product] };
    case "REMOTE_FAVORITE": //Favorilerden silme
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.product.id
        ),
      };
    case "ADD_BASKET": //Sepete Ekleme
      const existingProduct =state.basket.find(item=>item.id===action.product.id)
      if(existingProduct) {
return {...state, basket: state.basket.map(item=>item.id===action.product.id ? {...item ,quantity:item.quantity + 1} :item       ),}

          }
          else {
 return { 
  ...state, basket: [...state.basket, {...action.product,quantity: 1 }]
      }

          }
     
    case "REMOVE_BASKET":  //sepetten silme
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.product.id),
      };

      case "UPDATE_QUANTİTY" :   //adet bilgisini güncelleme
        return {
          ...state,
            basket :state.basket.map(item=>item.id===action.productid ? {...item,quantity:action.quantity} :item )
        }
    default:
      return state;
  }
}
const initialState = {
  favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
  basket: localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const AddFavorite = (product) => {
    if (state.favorites.find((item) => item.id === product.id)) {
      //ürün favorilerde varmı varsa sil
      dispatch({ type: "REMOTE_FAVORITE", product });
    } else {
      //yoksa favorilere ekle
      dispatch({ type: "ADD_FAVORITE", product });
    }
  };

  const addBasket = (product) => {    //sepete ekle
      dispatch({ type: "ADD_BASKET", product });
   };

  const Remove_Basket = (product) => {
    //sepetten sil
    dispatch({ type: "REMOVE_BASKET", product });
  };

  const updateQuantity=(id,newquantity)=>{ //Adet bilgisini al güncelle
dispatch({type:"UPDATE_QUANTİTY",productid:id,quantity:parseInt(newquantity)})
  }
  const isFavorite = (product) => {
    //Ürün Favorilerde varmı kontrol et
    return state.favorites.some((fav) => fav.id === product.id);
  };
 
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
    updateQuantity
  };
  return (
    <Productcontext.Provider value={values}>{children}</Productcontext.Provider>
  );
};

export const Productcontext = createContext();
