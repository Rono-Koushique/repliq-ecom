import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export type User = {
    name: string;
    email: string;
};

export type AuthUser = User & {
    password: string;
};

declare module "next-auth" {
    interface Session {
        user: User;
    }
}