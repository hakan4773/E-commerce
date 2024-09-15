export const initialState = {
    query: "",
    categorys: "",
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
    basket: localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [],
  };
  export function ProductReducer(state, action) {
    switch (action.type) {
      case "ADD_FAVORITE":  // Ürünü favorilere ekleme
        return { ...state, favorites: [...state.favorites, action.product] };
  
      case "REMOTE_FAVORITE": // Ürünü Favorilerden çıkarma
        return { ...state, favorites: state.favorites.filter(item => item.id !== action.product.id) };
  
      case "ADD_BASKET": // Sepete ürün ekleme, aynı üründen sepette varsa adet arttırma
      const existingProduct = state.basket.find(item => item.id === action.product.id);
        if (existingProduct) {
          return {
            ...state,
            basket: state.basket.map(item =>
              item.id === action.product.id ? { ...item, quantity: item.quantity + (action.product.quantity || 1) } : item
            )
          };
        } else {
          return {//şuraya bak
            ...state,
            basket: [...state.basket, { ...action.product,  quantity: action.product.quantity || 1 }]
          };
        }
  
      case "REMOVE_BASKET":  // Sepetten ürünü silme
        return {
          ...state,
          basket: state.basket.filter(item => item.id !== action.product.id)
        };
  
        case "UPDATE_QUANTITY":  // Ürün adedi bilgisini güncelleme
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.product.id ? { ...item, quantity:action.quantity } : item
          )
        };
  
      case "QUERY": // Ürün filtreleme input ile
        return { ...state, query: action.payload };
  
      case "CATEGORY": // Kategori filtreleme select ile
        return { ...state, categorys: action.payload };
  
      default:
        return state;
    }
  }
  