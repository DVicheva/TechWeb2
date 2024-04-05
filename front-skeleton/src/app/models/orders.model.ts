import {Users} from "./users.model";
import {OrderDetails} from "./orderDetails.model";

export interface Orders {
  orderId: number;
  orderDate: Date;
  status: string;
  user: Users;
  orderDetails: OrderDetails[];
}
