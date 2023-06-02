import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {};

export default function GoogleButton({}: Props) {
    return (
        <button className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
                <FcGoogle className="text-2xl" />
                <span className="ml-4">Log in with Google</span>
            </div>
        </button>
    );
}
