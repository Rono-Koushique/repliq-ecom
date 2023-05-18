import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type Props = {};

export default function Header({}: Props) {
    return (
        <nav className="flex justify-between px-20 py-4 items-center bg-white/80 backdrop-blur-xl sticky z-30 top-0 shadow-lg">
            <Link href="/" className="text-xl text-gray-800 font-bold">
                Q-Mart
            </Link>
            <div className="flex items-center">
                <ul className="flex items-center space-x-6">
                    <Link href="/" className="font-semibold text-gray-700">
                        Home
                    </Link>
                    <Link href="/admin" className="font-semibold text-gray-700">
                        Admin
                    </Link>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <AiOutlineShoppingCart className="text-2xl" />
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-6 py-2.5 text-white rounded-full transition duration-200 ease-in-out">
                    Sign In
                </button>
            </div>
        </nav>
    );
}
