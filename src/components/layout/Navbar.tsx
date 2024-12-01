"use client"
import logo from '../../../public/icon.png'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Upload } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import { SidebarTrigger } from '../ui/sidebar'

export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <nav className="flex items-center justify-between px-4 py-2 border-b">
            <div className='flex gap-5 items-center'>

                <SidebarTrigger />
                <div className="flex items-center">
                    <Link href="/" className="flex gap-2 text-2xl font-bold text-[#28ABFA]">
                        <Image src={logo} alt='Logo' width={30} height={30} />
                        Stream
                    </Link>
                </div>
            </div>
            <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <>
                        <Button variant="ghost" size="icon">
                            <Upload className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </>
                ) : (
                    <Button>Sign In </Button>
                )}
            </div>
        </nav>
    )
}

