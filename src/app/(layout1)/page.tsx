import Image from "next/image";
import ProductList from "./_components/productList";

async function getAllProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products;
    return products;
}

export default async function Home() {
    const products = await getAllProducts();
    return (
        <main className="flex min-h-screen flex-col">
            <div className="py-20 md:py-24 px-8 md:px-16 lg:px-20">
                {products && <ProductList products={products} />}
            </div>
        </main>
    );
}
