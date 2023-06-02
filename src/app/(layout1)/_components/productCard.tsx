"use client";
import AddToCartBtn from "./addToCartBtn";
import { Product } from "../../../types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingViewer from "../product/[id]/_components/ratingViewer";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const {
        id,
        title,
        price,
        description,
        rating,
        stock,
        brand,
        category,
        images,
    } = product;
    return (
        <div className="relative w-full h-full rounded-3xl p-4 shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-30 shadow-slate-200 overflow-hidden group flex flex-col items-start">
            <div className="relative w-full h-60 rounded-lg overflow-hidden">
                <Image
                    className="object-cover group-hover:object-contain"
                    src={images[0]}
                    fill={true}
                    alt={title}
                />
                <div className="absolute bottom-0 right-0 flex items-center justify-between text-xs px-3 py-1 z-10 bg-slate-200 text-slate-400 rounded-lg rounded-tr-none rounded-bl-none border-t-2 border-l-2 border-white">
                    {category}
                </div>
            </div>
            <div className="mt-3">
                <Link href={`/product/${id}`}>
                    <span className="text-xl font-medium leading-tight text-slate-700">
                        {title}
                    </span>
                </Link>
                <p className="text-xs uppercase tracking-tight w-fit rounded-sm mt-1 text-slate-400 font-semibold hover:underline underline-offset-2 cursor-pointer">
                    {brand}
                </p>
                <p className="text-xs line-clamp-2 mt-2 text-slate-500">
                    {description}
                </p>
            </div>
            <div className="mt-auto pt-2 w-full flex items-end justify-between">
                <div>
                    <span className="text-xs leading-none text-slate-400">
                        Rating:
                    </span>
                    <div className="flex">
                        <RatingViewer rating={Math.round(parseInt(rating))} />
                    </div>
                </div>
                <div className="text-xl text-slate-500 font-medium">{`$${price}`}</div>
            </div>
            <div className="mt-3 w-full">
                <AddToCartBtn product={product} />
            </div>
        </div>
    );
}
