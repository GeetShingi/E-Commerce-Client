import { User } from './user';
import { OrderProduct } from './orderproduct';

export class Orders
{
    _id: string;
    user: User;
    orders: OrderProduct[];
    createdAt: string;
    updatedAt: string;
}