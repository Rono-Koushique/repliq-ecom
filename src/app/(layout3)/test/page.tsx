import Navbar from "@/app/(layout1)/_components/navBar";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";

type Props = {};

export default function page({}: Props) {
    return (
        <div>
            <Navbar />
        </div>
    );
}
