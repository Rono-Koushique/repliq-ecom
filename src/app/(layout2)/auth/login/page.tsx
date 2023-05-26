import React from "react";
import LoginForm from "./loginForm";

type Props = {};

export default function Page({}: Props) {
    return (
        <main className="flex min-h-screen flex-col bg-slate-100">
            <div className="flex flex-1 items-center justify-center py-24 px-20">
                <LoginForm />
            </div>
        </main>
    );
}
