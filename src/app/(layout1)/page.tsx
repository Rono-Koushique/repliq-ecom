import ProductList from "./_components/productList";
import { getProducts } from "./_utils/productQuery";

export default async function Home() {
    const products = await getProducts(1);
    return (
        <main className="flex flex-col min-h-screen bg-slate-100 md:bg-white">
            <div className="px-8 py-20 md:py-24 md:px-16 lg:px-20">
                {products && <ProductList products={products} />}
            </div>
        </main>
    );
}
