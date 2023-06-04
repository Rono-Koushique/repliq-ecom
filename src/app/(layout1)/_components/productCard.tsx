"use client";
import AddToCartBtn from "./addToCartBtn";
import { Product } from "../../../types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingViewer from "../product/[id]/_components/ratingViewer";

type Props = {
    product: Product;
    lastRef?: (element: any) => void;
};

export default function ProductCard({ product, lastRef }: Props) {
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
        <div
            className="relative z-30 bg-white w-full h-full rounded-3xl p-4 shadow-md md:shadow-xl shadow-slate-200 group flex flex-col items-start"
            ref={lastRef ? lastRef : null}
        >
            {/* -------------------------------- category -------------------------------- */}
            <div className="hidden md:flex -top-4 absolute left-0 z-0 justify-center w-full h-16 text-xs rounded-bl-none bg-slate-100 text-slate-400 rounded-t-3xl">
                {category}
            </div>

            <div className="absolute top-0 left-0 z-10 w-full h-full rounded-3xl bg-white" />

            {/* ------------------------------- main image ------------------------------- */}
            <div className="relative z-20 w-full overflow-hidden rounded-lg h-60">
                <Image
                    className="object-contain group-hover:object-contain"
                    src={images[0]}
                    fill={true}
                    alt={title}
                />
            </div>

            {/* ----------------------- title, brand & description ----------------------- */}
            <div className="relative z-20 px-2 mt-4">
                <Link href={`/product/${id}`}>
                    <span className="text-xl font-medium leading-tight text-slate-700">
                        {title}
                    </span>
                </Link>
                <p className="mt-1 text-xs font-semibold tracking-tight uppercase rounded-sm cursor-pointer w-fit text-slate-400 hover:underline underline-offset-2">
                    {brand}
                </p>
                <p className="mt-2 text-xs line-clamp-2 text-slate-500">
                    {description}
                </p>
            </div>

            {/* ----------------------------- rating & price ----------------------------- */}
            <div className="relative z-20 flex items-end justify-between w-full px-2 pt-2 mt-auto">
                <div>
                    <span className="text-xs leading-none text-slate-400">
                        Rating:
                    </span>
                    <div className="flex">
                        <RatingViewer rating={Math.round(parseInt(rating))} />
                    </div>
                </div>
                <div className="text-xl font-medium text-slate-500">{`$${price}`}</div>
            </div>

            {/* ------------------------------- add to cart ------------------------------ */}
            <div className="relative z-20 w-full mt-3">
                <AddToCartBtn product={product} />
            </div>
        </div>
    );
}
