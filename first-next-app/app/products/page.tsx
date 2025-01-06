import ProductList from "../ProductList";
// import { products } from "../product-data";
export default async function ProductPage() {
    const response = await fetch('http://localhost:3000/api/products', {
        cache: 'no-cache',
    });
    const products = await response.json();

    const response2 = await fetch('http://localhost:3000/api/users/2/cart', {
        cache: 'no-cache',
    });
    const cartProducts = await response2.json();
    return (
        <>
            {/* <h1 className="text-2xl font-bold mb-2">Products</h1> */}
            <ProductList products={products} initialProducts={cartProducts} />
        </>
    )
}