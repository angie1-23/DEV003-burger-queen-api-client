export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
}

export const products = [
	{
		id: 1,
		name: 'Coffee',
		price: 5.00 ,
		description: 'A large phone with one of the best screens'
	},
	{
		id: 2,
		name: 'Latte',
		price: 7.00,
		description: 'A great phone with one of the best cameras'
	},
	{
		id: 3,
		name: 'Natural Juice ',
		price: 7.00,
		description: ''
	}
];