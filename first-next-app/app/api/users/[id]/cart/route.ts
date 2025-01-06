import { NextRequest } from "next/server";
import { products } from "@/app/product-data";
import { ConnectToDb } from "@/app/api/db";
import { ReturnDocument } from "mongodb";

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
    const userId = await params.id;
    const { db } = await ConnectToDb();

    const cartShopping = await db.collection('carts').find({ userId }).toArray();

    console.log(cartShopping);
    if (!cartShopping) {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {

            }
        })
    }
    // Map over the product IDs in the user's cart, finding the corresponding product object from the `products` array.
    // `cartProducts` will contain an array of product objects or `undefined` for missing products.
    ;
    const cartIds = cartShopping.flatMap(cart => cart.cartIds);
    // console.log(cartIds);
    const cartProducts = await db.collection('products').find({ id: { $in: cartIds } }).toArray();
    // console.log(cartProducts);
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
    const { db } = await ConnectToDb();
    const { productId }: CartBody = await request.json();

    const updatedCart = await db.collection('carts').findOneAndUpdate(
        { userId: id },
        { $push: { cartIds: productId } },
        { upsert: true, returnDocument: 'after' }
    )
    const cartProducts = await db.collection('products').find({ id: { $in: updatedCart?.cartIds } }).toArray();
    return new Response(JSON.stringify(cartProducts), {
        status: 201,
        headers: {
            'content-type': 'application/json'
        }
    })
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
    const { id } = await params;
    const { db } = await ConnectToDb();
    const { productId } = await request.json();

    const updatedCart = await db.collection('carts').findOneAndUpdate(
        { userId: id },
        { $pull: { cartIds: productId } },
        { returnDocument: 'after' }
    )
    if (!updatedCart) {
        return new Response(JSON.stringify([]), {
            status: 202
        })
    }
    const cartProducts = await db.collection('products').find({ id: { $in: updatedCart?.cartIds } }).toArray();
    return new Response(JSON.stringify(cartProducts), {
        status: 202
    })
}