"use client"
import Link from "next/link";
import { products } from "../product-data"
import { useState } from "react"
import Image from "next/image";
export default function CartPage() {
    const [prodIds] = useState(["123", "345"])
    const product = prodIds.map(id => products.find(p => p.id === id));

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