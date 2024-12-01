import { Navbar } from "@/components/layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider defaultOpen>
            <main className="flex flex-col h-screen w-screen">
                <Navbar />
                <div className="relative flex w-full h-full">
                    <AppSidebar />
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}
