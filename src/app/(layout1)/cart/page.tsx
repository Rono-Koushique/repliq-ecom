"use client";
import { totalPriceSelector } from "@/lib/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import Link from "next/link";
import React from "react";
import CartList from "./cartList";

type Props = {};

export default function Cart({}: Props) {
    const totalPrice = useAppSelector(totalPriceSelector);

    return (
        <main className="min-h-screen py-16 px-20">
            <div className="grid grid-cols-5 gap-24">
                <div className="col-span-3">
                    <h1 className="text-xl">Shopping Cart</h1>
                    <CartList />
                </div>
                <div className="col-span-2 sticky top-[9rem] z-50 self-start">
                    <h1 className="text-xl">Cart Totals</h1>
                    <table className="w-full text-sm text-left text-gray-500 mt-6">
                        <tbody>
                            <tr className="bg-white border-y h-14">
                                <td className="text-sm pr-6">Subtotal</td>
                                <td className="text-sm text-right">
                                    $ {totalPrice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link
                        href="/checkout"
                        className="text-white flex items-center justify-center py-3 rounded bg-slate-800 hover:bg-slate-900 active:bg-slate-700 mt-6"
                    >
                        Proceed to checkout
                    </Link>
                </div>
            </div>
        </main>
    );
}
