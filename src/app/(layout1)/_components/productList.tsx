"use client";
import { Product } from "../../../types/products";
import React, {
    Dispatch,
    SetStateAction,
    useRef,
    useState,
    useEffect,
} from "react";
import ProductCard from "./productCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../_utils/productQuery";
import { useIntersection } from "@mantine/hooks";
import Loading from "./loading";

type Props = {
    products: Product[];
};

export default function ProductList({ products }: Props) {
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ["query"],
        async ({ pageParam = 1 }) => {
            const response = await getProducts(pageParam);
            return response;
        },
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1;
            },
            initialData: {
                pages: [products],
                pageParams: [1],
            },
        }
    );

    const lastPostRef = useRef<HTMLElement>(null);
    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1,
    });

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage();
    }, [entry, fetchNextPage]);

    const posts = data?.pages.flatMap((page) => page);

    return (
        <>
            <div className="grid w-full max-w-screen-xl grid-flow-row-dense mx-auto gap-x-8 gap-y-8 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                {posts?.map((product: Product, idx) => {
                    if (idx === posts.length - 1)
                        return (
                            <ProductCard
                                lastRef={ref}
                                product={product}
                                key={product.id}
                            />
                        );
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>

            {isFetchingNextPage && <Loading />}
        </>
    );
}
