import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { User } from "./auth";

declare module "next-auth" {
    interface Session {
        user: User;
    }
}

// declare module "next-auth/jwt" {
//     interface JWT {
//         id: string;
//     }
// }
