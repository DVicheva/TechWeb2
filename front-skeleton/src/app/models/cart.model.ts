import { Users } from './users.model';
import { Products } from './products.model';

export interface Cart {
  cartId: number;
  user: Users;
  product: Products;
  quantity: number;
}
