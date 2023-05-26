"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function UserBox() {
    const { data: session, status } = useSession();
    if (status === "authenticated") {
        return (
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 border-2 border-blue-300 h-9  aspect-square text-white rounded-full transition duration-200 ease-in-out">
                {session.user.email.charAt(0).toUpperCase()}
            </button>
        );
    }
    return null;
}
