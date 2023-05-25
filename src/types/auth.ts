export type User = {
    email: string;
};

export type AuthUser = User & {
    password: string;
};
