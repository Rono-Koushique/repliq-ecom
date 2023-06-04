"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import store from "@/lib/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
    children: React.ReactNode;
    session: Session | null;
};

const queryClient = new QueryClient();

export default function Providers({ children, session }: Props) {
    return (
        <SessionProvider session={session}>
            <ReduxProvider store={store}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ReduxProvider>
        </SessionProvider>
    );
}
