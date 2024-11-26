export interface ProductsType  {
  id: number;
  img: string;
  name: string;
  price: number;
  category_id: number;
  description: string;
  qty?: number
};

export interface CategoryesType {
  id: number;
  name: string;
};

export interface OrdersType {
  address: string;
  phone: string;
  paymentType: 'cash' | 'card';
  items: Array<{
    productId: number;
    quantity: number;
  }>;
  comment?: string;
}
