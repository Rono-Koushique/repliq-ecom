import { removeFromCart } from "@/lib/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

type Props = {};

export default function CartList({}: Props) {
    const cartProducts = useAppSelector((state) => state.cart.cartProducts);
    const dispatch = useAppDispatch();

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
                            <tr
                                key={cartProduct.id}
                                className="bg-white border-b"
                            >
                                <td className="pr-6 py-2">
                                    <Image
                                        className="object-contain w-[200px] h-[160px]"
                                        src={cartProduct.images[0]}
                                        width={200}
                                        height={200}
                                        alt={cartProduct.title}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    {cartProduct.title}
                                </td>
                                <td className="px-6 py-4">
                                    {cartProduct.price}
                                </td>
                                <td className="px-6 py-4">
                                    {cartProduct.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {cartProduct.quantity *
                                        parseFloat(cartProduct.price)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                removeFromCart(cartProduct)
                                            )
                                        }
                                    >
                                        <AiFillDelete className="text-2xl text-rose-500 hover:text-rose-600 active:text-rose-400" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}
