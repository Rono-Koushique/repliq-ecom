import { Product } from "@/types/products";
import React from "react";
import ProductCard from "./productCard";

type Props = {
    products: Product[];
};

export default function ProductList({ products }: Props) {
    return (
        <div className="grid grid-flow-row-dense gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl w-full mx-auto">
            {products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
            })}
        </div>
    );
}
