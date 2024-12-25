import ProductList from "../ProductList";
import { products } from "../product-data";
export default function ProductPage() {
    return (
        <>
            <div>Product Page</div>
            <ProductList products={products} />
        </>
    )
}