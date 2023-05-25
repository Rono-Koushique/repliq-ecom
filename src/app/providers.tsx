"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "@/lib/redux/store";

type Props = {
    children: React.ReactNode;
};

export default function Providers({ children }: Props) {
    return (
        <SessionProvider>
            <ReduxProvider store={store}>{children}</ReduxProvider>
        </SessionProvider>
    );
}
