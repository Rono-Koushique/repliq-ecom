import { signIn } from "next-auth/react";

export async function handleSubmit(formData: FormData) {
    const { email, password } = Object.fromEntries(formData.entries());
    await signIn("credentials", {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: "/",
    });
}
