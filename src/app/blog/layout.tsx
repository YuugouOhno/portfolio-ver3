import Footer from "./_components/footer";

export default function BlogLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};