import prisma from "@/lib/prisma/prisma";
import { compare } from "bcrypt";

type RequestBody = {
    email: string;
    password: string;
};

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    });
    if (user && (await compare(body.password, user.password))) {
        const { password, ...userWithoutPass } = user;
        return new Response(JSON.stringify(userWithoutPass));
    } else return new Response(JSON.stringify(null));
}
