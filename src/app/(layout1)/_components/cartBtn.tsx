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
            className="hover:bg-slate-100 gap-2 p-1 rounded flex items-center"
        >
            <AiOutlineShoppingCart className="text-3xl text-gray-700" />
            <div
                className={`leading-none text-lg text-gray-700 ${
                    cartTotalItems === 0 ? "hidden" : "flex"
                }`}
            >
                {cartTotalItems}
            </div>
        </Link>
    );
}
