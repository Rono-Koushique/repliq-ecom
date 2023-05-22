"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import HomeBtn from "../_components/homeBtn";

type FormData = {
    mobileNumber: string;
    password: string;
};

type Props = {};

export default function LoginForm({}: Props) {
    const [formData, setFormData] = React.useState<FormData>({
        mobileNumber: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    };

    return (
        <div className="bg-white rounded-lg px-12 py-12 w-full max-w-md shadow-2xl relative z-30 overflow-hidden">
            <HomeBtn />
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold leading-snug text-gray-800">
                    Sign In
                </h1>
                <form className="w-full flex flex-col gap-5 mt-6">
                    <div className="relative z-0">
                        <input
                            type="text"
                            id="mobileNumber"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="mobile-number"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Mobile Number
                        </label>
                    </div>
                    <div className="relative z-0">
                        <input
                            type="text"
                            id="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>
                    <Link
                        href="/"
                        className="self-end text-sm w-fit text-gray-400 leading-none hover:underline underline-offset-2"
                    >
                        Forgot Password?
                    </Link>
                    <div className="mt-5">
                        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 py-3 text-white w-full rounded transition duration-200 ease-in-out">
                            Sign In
                        </button>
                    </div>
                    <div className="self-center">
                        <p className="text-sm text-gray-600 leading-none">
                            Not a member?{" "}
                            <Link
                                href="/auth/register"
                                className="text-blue-500 hover:underline underline-offset-2"
                            >
                                Sign Up now
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
