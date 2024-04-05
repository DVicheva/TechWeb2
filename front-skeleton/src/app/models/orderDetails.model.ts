import {Products} from "./products.model";
import {Orders} from "./orders.model";

export interface OrderDetails {
  orderDetailId: number;
  order: Orders;
  quantity: number;
  price: number;
  product: Products;
}
