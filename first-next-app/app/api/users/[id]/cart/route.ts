import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type Params = {
    id: string
}

type ShoppingCart = Record<string, string[]>;
// Defines a type `ShoppingCart` where the keys (user IDs) are strings, and the values are arrays of product IDs (strings).
const cart: ShoppingCart = {
    '1': ['234', '123'],
    '2': ['345', '456'],
    '3': ['234']
}
export async function GET(request: NextRequest, { params }: { params: Params }) {
    const userId = params.id;
    const cartShopping = cart[userId];
    if (cartShopping == undefined) {
        return new Response("", {
            status: 200,
            headers: {

            }
        })
    }
    // Map over the product IDs in the user's cart, finding the corresponding product object from the `products` array.
    // `cartProducts` will contain an array of product objects or `undefined` for missing products.
    const cartProducts = cartShopping.map(id => products.find(prod => prod.id == id));

    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            'content-type': 'application/json'
        }
    })
}

type CartBody = {
    productId: string
}
export async function POST(request: NextRequest, { params }: { params: Params }) {
    const { id } = await params;

    const { productId }: CartBody = await request.json();
    cart[id] = cart[id] ? cart[id].concat(productId) : [productId];

    const addToCartProducts = cart[id].map(c => products.find(p => p.id === c));
    console.log(cart);
    return new Response(JSON.stringify(addToCartProducts), {
        status: 201,
        headers: {
            'content-type': 'application/json'
        }
    })
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
    const { id } = await params;

    const { productId } = await request.json();

    cart[id] = cart[id] ? cart[id].filter(pid => pid !== productId) : [];


    const RemainProduct = cart[id].map(prod => products.find(p => p.id === prod));
    return new Response(JSON.stringify(RemainProduct), {
        status: 202
    })
}