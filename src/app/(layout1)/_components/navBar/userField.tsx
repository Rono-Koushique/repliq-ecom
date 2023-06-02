"use client";
import React from "react";
import Link from "next/link";
import { BiLogInCircle } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import { User } from "@/types/next-auth";
import { FaUserCircle } from "react-icons/fa";

export default function UserField() {
    const { data: session, status } = useSession();
    return (
        <div className="hidden md:flex">
            {status === "authenticated" ? (
                <Logged user={session.user} />
            ) : (
                <NotLogged />
            )}
        </div>
    );
}

function Logged({ user }: { user: User }) {
    return (
        <div
            onClick={() => signOut()}
            className="flex items-center gap-1 hover:translate-y-[-0.1rem] duration-200 cursor-pointer"
        >
            <p className="text-slate-500 text-sm font-semibold uppercase">
                {user.name}
            </p>
            <FaUserCircle className="text-slate-500 text-[2rem]" />
        </div>
    );
}

function NotLogged() {
    return (
        <Link
            href="/auth/login"
            className="flex items-center gap-1 px-3 py-2.5 text-slate-600 hover:bg-slate-200 hover:text-slate-600 transition duration-100 ease-in-out rounded"
        >
            <div className="text-slate-500 text-sm font-semibold uppercase">
                Login
            </div>
            <BiLogInCircle className="text-2xl" />
        </Link>
    );
}
