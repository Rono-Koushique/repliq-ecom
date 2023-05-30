import NavBar from "./_components/navBar";
import CateBar from "./_components/cateBar";
import ScrollToTop from "./_components/scrollToTop";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar />
            {/* @ts-expect-error Async Server Component */}
            <CateBar />
            {children}
        </>
    );
}
