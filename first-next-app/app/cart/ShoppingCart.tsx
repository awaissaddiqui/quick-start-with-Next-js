"use client"
import Link from "next/link";
import { Product } from "../product-data"
import { useState } from "react"
import Image from "next/image";
export default function ShoppingCart({ initialProducts }: { initialProducts: Product[] }) {
    const [product] = useState(initialProducts);
    // console.log(product);

    return (
        <>
            {
                product.map((prod) => (
                    <Link href={"/products/" + prod?.id} key={prod?.id} >
                        <h1>{prod?.name}</h1>
                        <Image src={"/" + prod?.imageUrl} alt="product cart" width={200} height={200} />
                    </Link>
                ))
            }
        </>
    )
}