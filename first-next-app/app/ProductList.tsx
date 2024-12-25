import { Product } from "./product-data";
import Image from "next/image";
import Link from "next/link";
export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2"
                    >
                        <div className="flex justify-center">

                            <Image
                                src={'/' + product.imageUrl}
                                alt={product.name}
                                width={200}
                                height={100}
                                className="w-60 h-60 rounded-md object-cover"
                            />
                        </div>
                        <div className="text-center pt-4">
                            <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 font-medium mt-1">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>


    )

}