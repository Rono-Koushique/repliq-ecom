import NavBar from "./_components/navBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
