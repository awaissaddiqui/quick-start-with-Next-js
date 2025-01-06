import ShoppingCart from "./ShoppingCart";

export default async function CartPage() {
    const resp = await fetch('http://localhost:3000/api/users/2/cart');
    const products = await resp.json();
    return (
        <ShoppingCart initialProducts={products} />
    )
}