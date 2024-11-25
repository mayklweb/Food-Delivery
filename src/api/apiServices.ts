import { CategoryesType, OrdersType, ProductsType } from '../types';
import { Axios } from './api';


export const getProducts = async (): Promise<ProductsType[]> => {
  const res = await Axios.get('/products');
  return res.data
};

export const getProductByCategory = async (id: number): Promise<ProductsType[]> => {
  const res = await Axios.get(`/products?categry_id=${id}`);
  return res.data
};

export const getCategories = async (): Promise<CategoryesType[]> => {
  const { data } = await Axios.get('/categories');
  return data;
};

export const postOrder = async (): Promise<OrdersType> => {
  const { data } = await Axios.get('/categories');
  return data;
};

