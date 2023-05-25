import React from "react";
import Link from "next/link";

type Props = {};

export default function SigninBtn({}: Props) {
    return (
        <Link
            href="/auth/login"
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-6 py-2.5 text-white rounded-full transition duration-200 ease-in-out"
        >
            Sign In
        </Link>
    );
}
