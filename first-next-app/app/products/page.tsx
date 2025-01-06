import ProductList from "../ProductList";
export const dynamic = 'force-dynamic';

export default async function ProductPage() {
    console.log(process.env.NEXT_PUBLIC_URL);
    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/products', {
        cache: 'no-cache',
    });
    const products = await response.json();

    const response2 = await fetch(process.env.NEXT_PUBLIC_URL + '/api/users/2/cart', {
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