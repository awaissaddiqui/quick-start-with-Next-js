import { Product } from "./product-data";
import Image from "next/image";
import Link from "next/link";
export default function ProductList({ products }: { products: Product[] }) {
    return (
        <>
            <div>
                {
                    products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <Image src={'/' + product.imageUrl} alt={product.name} width={200} height={200} />
                            <h3>{product.name}</h3>
                            {/* <p>{product.description}</p> */}
                            <p>${product.price}</p>
                        </Link>
                    ))
                }
            </div>
        </>
    )

}