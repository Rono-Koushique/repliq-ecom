import React from "react";
import LoginForm from "./loginForm";
import HomeBtn from "../_components/homeBtn";
import Image from "next/image";
import BrandLogo from "@/app/(layout1)/_components/navBar/brandLogo";
import Link from "next/link";
import GoogleButton from "../_components/googleButton";

type Props = {};

export default function Page({}: Props) {
    return (
        <main className="min-h-screen flex items-stretch">
            <div className="w-full lg:w-1/2 xl:w-1/3 px-6 md:px-12 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full">
                    <div className="mt-12">
                        <BrandLogo />
                    </div>
                    <h1 className="text-slate-500 text-xl font-bold leading-tight mt-12">
                        Login using Email
                    </h1>
                    <LoginForm />

                    <div className="w-full flex items-center my-8">
                        <div className="w-full h-px bg-slate-300" />
                        <p className="mx-2 text-gray-400 leading-none">or</p>
                        <div className="w-full h-px bg-slate-300" />
                    </div>

                    <div>
                        <GoogleButton />
                    </div>

                    <div className="mt-6">
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
            <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 bg-gray-500 items-center relative">
                <Image
                    className="object-cover"
                    src="https://source.unsplash.com/N3SsG7xR-Dg"
                    fill={true}
                    alt=""
                />
            </div>
        </main>
    );
}
