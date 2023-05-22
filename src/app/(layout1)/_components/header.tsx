import CartButton from "@/app/(layout1)/_components/cartBtn";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
    return (
        <nav className="grid grid-cols-3 px-20 py-4 h-20 bg-white/80 backdrop-blur-xl sticky z-20 top-0 shadow-lg">
            <div className="my-auto">
                <Link href="/" className="text-xl text-gray-800 font-bold">
                    Q-Mart
                </Link>
            </div>
            <div className="flex items-center mx-auto">
                <ul className="flex items-center space-x-6">
                    <Link href="/" className="font-semibold text-gray-700">
                        Home
                    </Link>
                    <Link href="/admin" className="font-semibold text-gray-700">
                        Admin
                    </Link>
                </ul>
            </div>
            <div className="flex gap-3 items-center ml-auto">
                <CartButton />
                <Link
                    href="/auth/login"
                    className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-6 py-2.5 text-white rounded-full transition duration-200 ease-in-out"
                >
                    Sign In
                </Link>
            </div>
        </nav>
    );
}
