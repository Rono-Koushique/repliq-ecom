"use client";
import { addOneToCart } from "@/lib/redux/slices/cartSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { Product } from "../../../types/products";
import React from "react";

type Props = {
    product: Product;
};

export default function AddToCartBtn({ product }: Props) {
    const dispatch = useAppDispatch();
    return (
        <button
            className="bg-slate-500 hover:bg-slate-600 active:bg-slate-400 py-2 text-white w-full rounded-full transition duration-200 ease-in-out"
            onClick={() => dispatch(addOneToCart({ product }))}
        >
            Add to Basket
        </button>
    );
}
