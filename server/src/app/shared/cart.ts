import { Product } from './product';
import { User } from './user';
import { CartProducts } from './cartproducts';

export class Cart {
    _id: string;
    user: User;
    products: CartProducts[];
    delivered: boolean;
    createdAt: string;
    updatedAt: string;
}