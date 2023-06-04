import AddToCartBtn from "@/app/(layout1)/_components/addToCartBtn";
import RatingViewer from "@/app/(layout1)/product/[id]/_components/ratingViewer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

async function getAProduct() {
    const res = await fetch("https://dummyjson.com/products/1");
    const data = await res.json();
    return data;
}

export default async function page({}: Props) {
    const product = await getAProduct();
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
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-screen-sm">
                <div className="relative bg-white w-full max-w-xs h-full rounded-3xl p-4 shadow-[0_3px_10px_rgba(0,0,0,0.2)] shadow-slate-200 group flex flex-col items-start">
                    {/* -------------------------------- category -------------------------------- */}
                    <div className="absolute left-0 flex justify-center w-full h-16 rounded-bl-none -z-10 -top-4 bg-slate-100 rounded-t-3xl">
                        <span className="text-xs text-slate-400">
                            {category}
                        </span>
                    </div>

                    {/* ------------------------------- main image ------------------------------- */}
                    <div className="relative w-full overflow-hidden rounded-lg h-60">
                        <Image
                            className="object-contain group-hover:object-contain"
                            src={images[0]}
                            fill={true}
                            alt={title}
                        />
                    </div>

                    {/* ----------------------- title, brand & description ----------------------- */}
                    <div className="px-2 mt-4">
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
                    <div className="flex items-end justify-between w-full px-2 pt-2 mt-auto">
                        <div>
                            <span className="text-xs leading-none text-slate-400">
                                Rating:
                            </span>
                            <div className="flex">
                                <RatingViewer
                                    rating={Math.round(parseInt(rating))}
                                />
                            </div>
                        </div>
                        <div className="text-xl font-medium text-slate-500">{`$${price}`}</div>
                    </div>

                    {/* ------------------------------- add to cart ------------------------------ */}
                    <div className="w-full mt-3">
                        <AddToCartBtn product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
