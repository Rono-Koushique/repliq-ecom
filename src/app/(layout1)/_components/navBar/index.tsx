import Link from "next/link";
import React from "react";
import SearchField from "./searchField";
import UserField from "./userField";
import CartField from "./cartField";
import BrandLogo from "./brandLogo";
import Hamburger from "./hamburger";

/* -------------------------------------------------------------------------- */
/*               also includes BrandLogo and Navlinks components              */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
    return (
        <nav className="flex flex-col h-[4rem] md:h-[4.25rem] gap-2 w-full px-4 sm:px-8 bg-white md:bg-slate-100 sticky top-0 z-50 border-b">
            <div className="max-w-screen-2xl w-full h-full mx-auto flex items-center gap-6 lg:gap-8">
                <BrandLogo />
                <Navlinks addClass="hidden md:flex" />
                <SearchField addClass="hidden md:flex" />
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto">
                    <CartField />
                    <UserField />
                    <Hamburger addClass="md:hidden" />
                </div>
            </div>
        </nav>
    );
}

type NavLink = {
    title: string;
    href: string;
};

function Navlinks({ addClass = "" }: { addClass?: string }) {
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
        <div className={addClass}>
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
