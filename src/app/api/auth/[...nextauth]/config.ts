import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import url from "@/utils/url";

const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch(url("api/auth/login"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: credentials?.name,
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                const user = await res.json();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;
