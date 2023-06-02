import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import { getServerSession } from "next-auth/next";
import authConfig from "./api/auth/[...nextauth]/config";

export const metadata = {
    title: "Qmart",
    description: "ecommerce platform",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authConfig);
    return (
        <html lang="en">
            <Providers session={session}>
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    );
}
