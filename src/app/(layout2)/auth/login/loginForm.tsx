"use client";
import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
import { LoginFormData as FormData } from "@/types/formData";
import { useSearchParams } from "next/navigation";
import { handleSubmit } from "./handleSubmit";

type Props = {};

export default function LoginForm({}: Props) {
    const searchParams = useSearchParams();
    const callbackURL = searchParams.get("callbackURL");

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const [emailInvalid, setEmailInvalid] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    };

    useEffect(() => {
        setEmailInvalid(
            formData.email !== "" &&
                !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
                    formData.email
                )
        );
    }, [formData]);

    return (
        <form className="mt-4" action={handleSubmit}>
            <div className="relative z-0 pt-2">
                <input
                    type="text"
                    id="email"
                    name="email"
                    className={`block py-4 px-3 w-full text-gray-900 bg-transparent border rounded-lg border-gray-300 hover:border-gray-400 appearance-none peer focus:outline-none focus:ring-0  placeholder-shown:border ${
                        emailInvalid
                            ? "border-red-600 focus:border-red-600"
                            : "border-blue-600 focus:border-blue-600"
                    }`}
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                />
                <label
                    htmlFor="email"
                    className={`absolute ${
                        emailInvalid ? "text-red-500" : "text-slate-500"
                    } left-1 top-2 scale-75 -translate-y-1/2 p-2 bg-white ease-linear duration-150 rounded-full origin-left peer-focus:top-2 peer-focus:scale-75 ${
                        emailInvalid
                            ? "peer-focus:text-red-500"
                            : "peer-focus:text-blue-500"
                    } peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-[calc(50%+4px)]`}
                >
                    Email Address
                </label>
                {emailInvalid && (
                    <p className="text-sm text-red-500">
                        * Email Address is invalid
                    </p>
                )}
            </div>

            <div className="relative z-0 pt-2 mt-2">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-3 py-4 text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none hover:border-gray-400 peer focus:outline-none focus:ring-0 focus:border-blue-500"
                    placeholder=" "
                    value={formData.password}
                    onChange={handleChange}
                />
                <label
                    htmlFor="password"
                    className={`absolute text-slate-500 left-1 top-2 scale-75 -translate-y-1/2 p-2 bg-white ease-linear duration-150 rounded-full origin-left peer-focus:top-2 peer-focus:scale-75 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-[calc(50%+4px)]`}
                >
                    Password
                </label>
            </div>

            <div className="flex justify-end mt-4">
                <Link
                    href="/"
                    className="text-sm leading-none text-gray-400 w-fit hover:underline underline-offset-2"
                >
                    Forgot Password?
                </Link>
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full py-3 text-white transition duration-200 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600 active:bg-blue-400"
                >
                    Sign In
                </button>
            </div>
        </form>
    );
}
