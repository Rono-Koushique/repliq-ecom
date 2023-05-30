"use client";
import { totalCartProductsCountSelector } from "@/lib/redux/slices/cartSlice";
import { useAppSelector } from "@/lib/redux/store";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartField() {
    const cartTotalItems = useAppSelector(totalCartProductsCountSelector);
    return (
        <Link
            href="/cart"
            className="flex items-center gap-1 text-slate-600 cursor-pointer hover:translate-y-[-0.1rem] duration-200"
        >
            <AiOutlineShoppingCart className="text-2xl" />
            {cartTotalItems !== 0 && (
                <div className="bg-slate-500 rounded-full flex items-center justify-center min-w-[2rem] px-1 aspect-square text-white text-sm font-semibold">
                    {cartTotalItems}
                </div>
            )}
        </Link>
    );
}
