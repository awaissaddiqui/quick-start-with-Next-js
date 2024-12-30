import { NextRequest } from "next/server";
// NextRequest : an extension of the Web Request API. NextRequest gives you further control over the incoming request, including easily accessing cookies and an extended, parsed,
import { products } from "@/app/product-data";

type Params = {
    id: string,
}
// Params:Defining a TypeScript type for the parameters expected in the route, specifically an `id` of type string.

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const product = products.find(prod => prod.id == params.id);

    if (!product) {
        return new Response("Product not found", {
            status: 404
        })
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            'content-type': 'application/json'
        }
    })
}