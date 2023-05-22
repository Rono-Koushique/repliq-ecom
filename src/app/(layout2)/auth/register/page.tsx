import React from "react";
import RegisterForm from "./registerForm";

type Props = {};

export default function page({}: Props) {
    return (
        <main className="flex min-h-screen flex-col bg-slate-100">
            <div className="flex flex-1 items-center justify-center py-24 px-20">
                <RegisterForm />
            </div>
        </main>
    );
}
