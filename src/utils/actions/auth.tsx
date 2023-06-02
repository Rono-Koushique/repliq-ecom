"use server";
import { signIn } from "next-auth/react";
import { LoginFormData } from "@/types/formData";

export async function loginUser(formData: LoginFormData) {
    await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: "/",
    });
}
