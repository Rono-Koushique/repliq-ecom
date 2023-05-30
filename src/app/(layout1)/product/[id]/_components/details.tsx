"use client";
import React from "react";
import {
    cartProductCountSelector,
    updateInCart,
} from "@/lib/redux/slices/cartSlice";
import { Product } from "@/types/products";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import RatingViewer from "./ratingViewer";

type Props = {
    product: Product;
};

export default function Details({ product }: Props) {
    const { id, title, price, rating, brand, stock } = product;
    const currentQuantityInCart = useAppSelector((state) =>
        cartProductCountSelector(state, id)
    );

    const [quantity, setQuantity] = React.useState(
        currentQuantityInCart ? currentQuantityInCart : 0
    );

    const dispatch = useAppDispatch();

    /* -------------------------------------------------------------------------- */
    /*                              utility functions                             */
    /* -------------------------------------------------------------------------- */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const data = event.target.value;
        setQuantity(parseInt(data));
    };

    const addOne = () => {
        setQuantity((currentAmount: number) => {
            if (currentAmount < parseInt(stock)) return currentAmount + 1;
            return currentAmount;
        });
    };

    const removeOne = () => {
        setQuantity((currentAmount: number) => {
            if (currentAmount > 0) return currentAmount - 1;
            return 0;
        });
    };

    const handleAddToCart = () => {
        dispatch(updateInCart({ product: product, updateInfo: { quantity } }));
    };

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="text-2xl font-medium">{title}</h1>
                <h2 className="text-sm">{brand}</h2>
            </div>
            <div className="flex">
                <RatingViewer rating={Math.round(parseInt(rating))} />
            </div>
            <div>
                <p className="text-3xl text-slate-600">{`$${price}`}</p>
            </div>
            <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                dignissimos ratione tempora voluptatum delectus fuga repellat!
                Vel impedit eligendi beatae, unde id quos dolorem laudantium
                quis officiis voluptatibus. Deleniti, vero.
            </p>
            <div>
                <p className="text-gray-600 text-sm">
                    Available in Stock: {stock}
                </p>
            </div>
            <div className="flex items-center mt-8">
                <p>Quantity: </p>
                <input
                    className="text-right border border-gray-300 px-1 w-8 rounded ml-1"
                    value={quantity}
                    onChange={handleChange}
                />
                <button
                    className="ml-4 leading-none w-8 h-8 rounded-full bg-gray-500 text-white text-xl flex items-center justify-center hover:bg-gray-600 active:bg-gray-400 "
                    onClick={addOne}
                >
                    <FaChevronUp className="text-sm" />
                </button>
                <button
                    className="ml-1 leading-none w-8 h-8 rounded-full bg-gray-500 text-white text-xl flex items-center justify-center hover:bg-gray-600 active:bg-gray-400"
                    onClick={removeOne}
                >
                    <FaChevronDown className="text-sm" />
                </button>
            </div>
            <div>
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 py-3 text-white w-full rounded transition duration-200 ease-in-out"
                >
                    {!currentQuantityInCart ? "Add to cart" : "Update in cart"}
                </button>
            </div>
        </div>
    );
}
