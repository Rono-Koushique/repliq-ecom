import Image from "next/image";
import ProductList from "./productList";

async function getAllProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
}

export default async function Home() {
    const products = await getAllProducts();
    return (
        <main className="flex min-h-screen flex-col bg-slate-100">
            <h1>Homepage</h1>
            {products && <ProductList products={products} />}
        </main>
    );
}
