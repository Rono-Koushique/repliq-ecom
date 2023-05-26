import { User } from "@/types/auth";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
    user: User;
};

export default function UserBox({ user }: Props) {
    return <div onClick={() => signOut()}>{user.email}</div>;
}
