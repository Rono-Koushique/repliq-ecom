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
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 py-3 text-white w-full rounded transition duration-200 ease-in-out"
            onClick={() => dispatch(addOneToCart({ product }))}
        >
            Add to Basket
        </button>
    );
}
