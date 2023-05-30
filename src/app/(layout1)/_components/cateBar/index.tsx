import React from "react";
import CateScroll from "./cateScroll";

async function getAllCategories() {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    return data;
}

export default async function Index() {
    const categories = await getAllCategories();
    return (
        <div className="w-full bg-slate-100">
            <div className="w-full">
                <CateScroll categories={categories} />
            </div>
        </div>
    );
}
