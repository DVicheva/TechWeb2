import {Orders} from "./orders.model"

export interface Users {
  user_id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  orderId: Orders[];
}
