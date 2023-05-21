"use client";
import React from "react";
import { Product } from "@/types/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type Props = {
    product: Product;
};

export default function Details({ product }: Props) {
    const [quantity, setQuantity] = React.useState(1);
    const { id, title, price, rating, brand, stock } = product;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const data = event.target.value;
        setQuantity(parseInt(data));
    };

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="text-2xl font-medium">{title}</h1>
                <h2 className="text-sm">{brand}</h2>
            </div>
            <div className="flex">
                {Array(Math.round(parseInt(rating)))
                    .fill("")
                    .map((_, i) => {
                        return (
                            <AiFillStar
                                className="text-xl text-yellow-600"
                                key={i}
                            />
                        );
                    })}
                {Array(5 - Math.round(parseInt(rating)))
                    .fill("")
                    .map((_, i) => {
                        return (
                            <AiOutlineStar
                                className="text-xl text-yellow-600"
                                key={i}
                            />
                        );
                    })}
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
                    onClick={() => setQuantity((prev) => prev + 1)}
                >
                    <FaChevronUp className="text-sm" />
                </button>
                <button
                    className="ml-1 leading-none w-8 h-8 rounded-full bg-gray-500 text-white text-xl flex items-center justify-center hover:bg-gray-600 active:bg-gray-400"
                    onClick={() =>
                        setQuantity((prev) => {
                            return prev > 0 ? prev - 1 : 0;
                        })
                    }
                >
                    <FaChevronDown className="text-sm" />
                </button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 py-3 text-white w-full rounded transition duration-200 ease-in-out">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
