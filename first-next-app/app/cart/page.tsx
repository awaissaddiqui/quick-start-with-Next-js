import ShoppingCart from "./ShoppingCart";

export const dynamic = 'force-dynamic';

export default async function CartPage() {
    const resp = await fetch(process.env.NEXT_PUBLIC_URL + '/api/users/2/cart');
    const products = await resp.json();
    return (
        <ShoppingCart initialProducts={products} />
    )
}