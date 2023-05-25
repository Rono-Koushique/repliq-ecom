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
        <main className="flex min-h-screen flex-col bg-slate-100">
            <div className="py-24 px-20">
                {products && <ProductList products={products} />}
            </div>
        </main>
    );
}