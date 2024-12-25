import { products } from "@/app/product-data"
import Image from "next/image";
export default function ProductsDetailPage({ params }: { params: { id: string } }) {
    const product = products.find(prod => prod.id === params.id);

    return (
        <div>
            <Image src={"/" + product?.imageUrl} alt="products" width={200} height={200} />
            <h1>{product?.name}</h1>
            <p>{product?.price}</p>
            <p> {product?.description} </p>
        </div>
    )
}