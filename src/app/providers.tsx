"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import store from "@/lib/redux/store";

type Props = {
    children: React.ReactNode;
    session: Session | null;
};

export default function Providers({ children, session }: Props) {
    return (
        <SessionProvider session={session}>
            <ReduxProvider store={store}>{children}</ReduxProvider>
        </SessionProvider>
    );
}
