import Link from "next/link";
import React from "react";
import SearchField from "./searchField";
import UserField from "./userField";
import CartField from "./cartField";

/* -------------------------------------------------------------------------- */
/*               also includes BrandLogo and Navlinks components              */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
    return (
        <div className="w-full px-4 sm:px-8 py-3 lg:py-2.5 bg-slate-100">
            <div className="container mx-auto flex items-center gap-6 lg:gap-8">
                <BrandLogo />
                <Navlinks />
                <SearchField />
                <div className="hidden sm:flex items-center gap-6">
                    <UserField />
                    <CartField />
                </div>
            </div>
        </div>
    );
}

function BrandLogo() {
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

type NavLink = {
    title: string;
    href: string;
};

function Navlinks() {
    const links: NavLink[] = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Admin",
            href: "/admin",
        },
    ];
    return (
        <div className="hidden md:flex">
            {links.map((link, idx) => {
                return (
                    <Link
                        href={link.href}
                        key={idx}
                        className="text-slate-500 px-3 py-3 text-sm font-semibold rounded uppercase hover:bg-slate-200 hover:text-slate-600 transition duration-100 ease-in-out"
                    >
                        {link.title}
                    </Link>
                );
            })}
        </div>
    );
}
