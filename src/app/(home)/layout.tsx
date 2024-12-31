import { Navbar } from "@/components/layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider defaultOpen>
            <main className="flex flex-col h-screen w-screen">
                <Navbar />
                {children}
            </main>
        </SidebarProvider>
    );
}
