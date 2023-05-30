import React from "react";
import { Product } from "../../../../types/products";
import Gallery from "./_components/gallery";
import Details from "./_components/details";

type Props = {
    params: {
        id: string;
    };
};

export default async function ProductDetails({ params }: Props) {
    const product = await getProductDetails(params.id);

    return (
        <main className="flex min-h-screen flex-col">
            <div className="py-16 px-20 grid grid-cols-9 gap-x-24">
                {/* image viewer */}
                <div className="col-span-5">
                    <Gallery images={product.images} />
                </div>
                <div className="col-span-4">
                    <Details product={product} />
                </div>
            </div>
        </main>
    );
}

async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products;
    return products.map((product: Product) => {
        return { id: product.id };
    });
}

async function getProductDetails(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
}
