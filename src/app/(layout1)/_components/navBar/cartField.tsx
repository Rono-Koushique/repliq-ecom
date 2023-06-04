"use client";
import { totalCartProductsCountSelector } from "@/lib/redux/slices/cartSlice";
import { useAppSelector } from "@/lib/redux/store";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type Props = {
    addClass?: string;
};

export default function CartField({ addClass = "" }: Props) {
    const cartTotalItems = useAppSelector(totalCartProductsCountSelector);
    return (
        <div className={addClass}>
            <Link
                href="/cart"
                className="flex items-center gap-1.5 text-slate-600 cursor-pointer hover:translate-y-[-0.1rem] duration-200"
            >
                <AiOutlineShoppingCart className="text-2xl" />
                {cartTotalItems !== 0 && (
                    <div className="bg-slate-500 rounded-full flex items-center justify-center min-w-[2rem] px-1 aspect-square text-white text-sm font-bold">
                        {cartTotalItems}
                    </div>
                )}
            </Link>
        </div>
    );
}
