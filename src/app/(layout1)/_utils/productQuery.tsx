export async function getProducts(page: number) {
    const limit = 20;
    const skip = (page - 1) * limit;
    const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    const products = data.products;
    return products;
}
