export interface User {
  email: string,
  password?:string,
  id?: any,
  role: string
}
export interface LoginResponse {
  accessToken: string,
  user: User
}

export interface Product {
  dateEntry: string,
  id: number,
  image: string,
  name: string,
  price: number,
  type: string
}

export interface ProductService {
  product: Product,
  quantity: number
}

export interface NewProduct {
  name: string,
  price: number,
  image: string,
  type: string,
  id: number
}

export interface OrdersProduct {
  qty: number;
  total: number;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
  };
}

export interface Order {
  id?: number;
  userId?: string;
  client?: string;
  products?: ProductService[];
  status: string;
  dataEntry?: any;
  total?: number;
  dateProcessed?: any;
  dataPrepare?: any;
  time?: any;
}
