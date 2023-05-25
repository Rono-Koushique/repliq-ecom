import { User } from "@/types/auth";
import React from "react";

type Props = {
    user: User;
};

export default function UserBox({ user }: Props) {
    return <div>{user.email}</div>;
}
