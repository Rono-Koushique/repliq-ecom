"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import HomeBtn from "../_components/homeBtn";
import { signIn } from "next-auth/react";

type FormData = {
    email: string;
    password: string;
};

type Props = {};

export default function LoginForm({}: Props) {
    const [formData, setFormData] = React.useState<FormData>({
        email: "",
        password: "",
    });

    const [emailInvalid, setEmailInvalid] = React.useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: true,
            callbackUrl: "/",
        });
    };

    React.useEffect(() => {
        setEmailInvalid(
            formData.email !== "" &&
                !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
                    formData.email
                )
        );
    }, [formData]);

    // const mobileNumberInvalid =
    //     formData.mobileNumber !== "" &&
    //     !/^(?:\+88|88)?(01[2-9]\d{8})$/.test(formData.mobileNumber);

    return (
        <form
            className="bg-white rounded-lg px-12 py-12 w-full max-w-md shadow-2xl relative z-30 overflow-hidden"
            onSubmit={handleSubmit}
        >
            <HomeBtn />
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold leading-snug text-gray-800">
                    Sign In
                </h1>
                <div className="w-full flex flex-col gap-5 mt-6">
                    <div className="relative z-0">
                        <input
                            type="text"
                            id="email"
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer focus:outline-none focus:ring-0 ${
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
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email Address
                        </label>
                        {emailInvalid && (
                            <p className="text-sm text-red-500">
                                * Email Address is invalid
                            </p>
                        )}
                    </div>
                    <div className="relative z-0">
                        <input
                            type="password"
                            id="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-400 py-3 text-white w-full rounded transition duration-200 ease-in-out"
                        >
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
                </div>
            </div>
        </form>
    );
}
