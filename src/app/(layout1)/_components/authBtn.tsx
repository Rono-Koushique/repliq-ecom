"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

type Props = {};

export default function AuthBtn({}: Props) {
    const { data: session, status } = useSession();
    if (status === "authenticated") {
        return (
            <button
                onClick={() => signOut()}
                className="bg-rose-500 hover:bg-rose-600 active:bg-rose-400 px-6 py-2.5 text-white rounded-full transition duration-200 ease-in-out"
            >
                Sign Out
            </button>
        );
    }
    return (
        <Link
            href="/auth/login"
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-6 py-2.5 text-white rounded-full transition duration-200 ease-in-out"
        >
            Sign In
        </Link>
    );
}
