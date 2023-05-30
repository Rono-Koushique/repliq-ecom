import { useAppSelector } from "@/lib/redux/store";
import React from "react";
import CartProduct from "./cartProduct";

type Props = {};

export default function CartList({}: Props) {
    const cartProducts = useAppSelector((state) => state.cart.cartProducts);

    return (
        <table className="w-full text-sm text-left text-gray-500 mt-6">
            <thead className="text-xs text-gray-700 uppercase bg-white border-y">
                <tr className="h-14">
                    <th scope="col" className="px-6"></th>
                    <th scope="col" className="px-6">
                        Title
                    </th>
                    <th scope="col" className="px-6">
                        Price
                    </th>
                    <th scope="col" className="px-6">
                        Quantity
                    </th>
                    <th scope="col" className="px-6">
                        Subtotal
                    </th>
                    <th scope="col" className="px-6">
                        Remove
                    </th>
                </tr>
            </thead>
            <tbody>
                {cartProducts &&
                    cartProducts.map((cartProduct) => {
                        return (
                            <CartProduct
                                key={cartProduct.id}
                                cartProduct={cartProduct}
                            />
                        );
                    })}
            </tbody>
        </table>
    );
}
