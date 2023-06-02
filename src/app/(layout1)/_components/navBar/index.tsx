import Link from "next/link";
import React from "react";
import SearchField from "./searchField";
import UserField from "./userField";
import CartField from "./cartField";
import BrandLogo from "./brandLogo";

/* -------------------------------------------------------------------------- */
/*               also includes BrandLogo and Navlinks components              */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
    return (
        <nav className="bg-slate-100 w-full px-4 sm:px-8 py-3 lg:py-2.5 ">
            <div className="max-w-screen-2xl mx-auto flex items-center gap-6 lg:gap-8">
                <BrandLogo />
                <Navlinks />
                <SearchField />
                <div className="hidden sm:flex items-center gap-6">
                    <CartField />
                    <UserField />
                </div>
            </div>
        </nav>
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
