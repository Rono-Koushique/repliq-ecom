import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

type Props = {};

export default function HomeBtn({}: Props) {
    return (
        <Link href="/">
            <div className="absolute top-0 left-0 cursor-pointer p-2 group">
                <AiFillHome className="text-gray-300 leading-none" />
                <div className=" absolute -top-10 -left-10 -z-10 bg-gray-100 w-28 aspect-square rounded-full scale-0 origin-center group-hover:scale-100 transition ease-in-out duration-200" />
            </div>
        </Link>
    );
}
