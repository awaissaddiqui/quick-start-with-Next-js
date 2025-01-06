import NotFoundPage from "@/app/not-found";

export default async function ProductsDetailPage({ params }: { params: { id: string } }) {
    const id = await params.id;
    const resp = await fetch('http://localhost:3000/api/products/' + id);
    const product = await resp.json();

    if (!product) {
        return <NotFoundPage />
    }

    return (
        <div className="flex flex-col md:flex-row items-start gap-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="w-full md:w-1/2">
                <img
                    src={"/" + product[0].imageUrl}
                    alt="products"
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-800">{product[0].name}</h1>
                <p className="text-xl font-semibold text-blue-600 mt-4">${product[0].price}</p>
                <h2 className="text-lg font-bold text-gray-800 mt-6">Description</h2>
                <p className="text-gray-700 mt-2 leading-relaxed">{product[0].description}</p>
            </div>
        </div>


    )
}