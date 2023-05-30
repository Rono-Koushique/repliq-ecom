import prisma from "@/lib/prisma/prisma";
import { AuthUser } from "@/types/next-auth";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const body: AuthUser = await request.json();
    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
        },
    });

    const { password, ...result } = user;
    return new Response(JSON.stringify(result));
}
