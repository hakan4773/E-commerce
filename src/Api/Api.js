import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export  const useProducts = () => {
    const { data, error, isLoading } = useQuery({
      queryKey: ['products'],
      queryFn: () =>
        axios.get('https://fakestoreapi.com/products').then(res => res.data)
    });
  
    return { data, error, isLoading };
  };
  
  export const ProductDetail = (id) => {
    const {data, error, isLoading} =useQuery({
      queryKey: ['product', id],
      queryFn: () => axios.get(`https://fakestoreapi.com/products/${id}`).then(res => res.data),
      enabled: !!id, // ID varsa sorguyu etkinleştir
    });
    return { data, error, isLoading };

  };

  