import Link from "next/link";
import React from "react";

export default function BrandLogo() {
    return (
        <Link
            href="/"
            className="flex flex-col w-fit hover:translate-y-[-0.1rem] duration-200"
        >
            <h1 className="leading-none m-0 text-3xl font-bold tracking-tight text-slate-700">
                QMart
            </h1>
            <p className="leading-none self-end text-[0.5rem] font-light text-slate-600 uppercase ">
                Online Shopping
            </p>
        </Link>
    );
}
