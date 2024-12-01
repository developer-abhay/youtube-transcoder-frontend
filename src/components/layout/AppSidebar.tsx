import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Clock, History, Home, ListVideo, Settings, ThumbsUp } from "lucide-react"

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "History",
        url: "#",
        icon: History,
    },
    {
        title: "Liked Videos",
        url: "#",
        icon: ThumbsUp,
    },
    {
        title: "Watch Later",
        url: "#",
        icon: Clock,
    },
    {
        title: "Playlist",
        url: "#",
        icon: ListVideo,
    },
]



export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="text-xl p-4 py-5">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href={'/settings'} className="text-xl p-4 py-5">
                                <Settings />
                                <span>Settings</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
