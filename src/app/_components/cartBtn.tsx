"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { totalCartProductsCountSelector } from "@/lib/redux/slices/cartSlice";
import { useAppSelector } from "@/lib/redux/store";
import Link from "next/link";

type Props = {};

export default function CartButton({}: Props) {
    const cartTotalItems = useAppSelector(totalCartProductsCountSelector);

    return (
        <Link
            href={"/cart"}
            className="bg-slate-500 hover:bg-slate-600 active:bg-slate-400 py-2.5 gap-2 px-4 rounded-full flex items-center"
        >
            <AiOutlineShoppingCart className="text-xl text-white" />
            <div
                className={`leading-none text-sm text-white ${
                    cartTotalItems === 0 ? "hidden" : "flex"
                }`}
            >
                {cartTotalItems}
            </div>
        </Link>
    );
}
