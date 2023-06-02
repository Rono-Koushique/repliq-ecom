import React from "react";
import { getServerSession } from "next-auth";
import authConfig from "@/app/api/auth/[...nextauth]/config";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await getServerSession(authConfig);

    if (!session) {
        redirect("/auth/login?callbackURL=/admin");
    }

    return <div>Admin Page</div>;
}
