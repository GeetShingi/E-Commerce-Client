import { Comment } from './comment';
export class Product {
	_id: string;
	name: string;
	price: string;
	description: string;
	image: string[];
	comments: Comment[];
	xsmall: number;
	small: number;
	medium: number;
	large: number;
	xlarge: number;
	xxlarge: number;
	xxxlarge: number;
}