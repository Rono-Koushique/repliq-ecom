export type Product = {
    id: string;
    title: string;
    description: string;
    price: string;
    rating: string;
    stock: string;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export type CartProduct = Product & {
    quantity: number;
};
