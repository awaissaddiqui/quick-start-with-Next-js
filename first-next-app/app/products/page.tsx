import ProductList from "../ProductList";
import { products } from "../product-data";
export default function ProductPage() {
    return (
        <>
            <ProductList products={products} />
        </>
    )
}