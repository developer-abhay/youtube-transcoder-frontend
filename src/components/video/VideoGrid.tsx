"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import VideoCard from "./VideoCard"

const categories = ["All", "Programming", "Nature", "Cooking"]

const dummyVideos = [
    {
        id: "1",
        title: "Introduction to Next.js",
        thumbnail: "https://i.ytimg.com/vi/uQeidE2LA1s/hqdefault.jpg",
        creator: "Code Master",
        views: 10000,
        category: "Programming",
        createdAt: "5 months"
    },
    {
        id: "2",
        title: "React Hooks Explained",
        thumbnail: "https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg",
        creator: "React Guru",
        views: 15000,
        category: "Programming",
        createdAt: "1 month"
    },
    {
        id: "3",
        title: "Beautiful Landscapes",
        thumbnail: "https://i.ytimg.com/vi/BHACKCNDMW8/hqdefault.jpg",
        creator: "Nature Explorer",
        views: 5000,
        category: "Nature",
        createdAt: "2 weeks"
    },
    {
        id: "4",
        title: "Cooking Italian Pasta",
        thumbnail: "https://i.ytimg.com/vi/Ng7GWl57nQM/hqdefault.jpg",
        creator: "Chef's Kitchen",
        views: 20000,
        category: "Cooking",
        createdAt: "5 days"
    },
    {
        id: "5",
        title: "Introduction to Next.js",
        thumbnail: "https://i.ytimg.com/vi/uQeidE2LA1s/hqdefault.jpg",
        creator: "Code Master",
        views: 10000,
        category: "Programming",
        createdAt: "5 days"
    },
    {
        id: "6",
        title: "React Hooks Explained",
        thumbnail: "https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg",
        creator: "React Guru",
        views: 15000,
        category: "Programming",
        createdAt: "5 days"
    },
    {
        id: "7",
        title: "Beautiful Landscapes",
        thumbnail: "https://i.ytimg.com/vi/BHACKCNDMW8/hqdefault.jpg",
        creator: "Nature Explorer",
        views: 5000,
        category: "Nature",
        createdAt: "5 days"
    },
    {
        id: "8",
        title: "Cooking Italian Pasta",
        thumbnail: "https://i.ytimg.com/vi/Ng7GWl57nQM/hqdefault.jpg",
        creator: "Chef's Kitchen",
        views: 20000,
        category: "Cooking",
        createdAt: "5 days"
    },
    {
        id: "9",
        title: "Introduction to Next.js",
        thumbnail: "https://i.ytimg.com/vi/uQeidE2LA1s/hqdefault.jpg",
        creator: "Code Master",
        views: 10000,
        category: "Programming",
        createdAt: "5 days"
    },
    {
        id: "10",
        title: "React Hooks Explained",
        thumbnail: "https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg",
        creator: "React Guru",
        views: 15000,
        category: "Programming",
        createdAt: "5 days"
    },
    {
        id: "3",
        title: "Beautiful Landscapes",
        thumbnail: "https://i.ytimg.com/vi/BHACKCNDMW8/hqdefault.jpg",
        creator: "Nature Explorer",
        views: 5000,
        category: "Nature",
        createdAt: "5 days"
    },
    {
        id: "4",
        title: "Cooking Italian Pasta",
        thumbnail: "https://i.ytimg.com/vi/Ng7GWl57nQM/hqdefault.jpg",
        creator: "Chef's Kitchen",
        views: 20000,
        category: "Cooking",
        createdAt: "5 days"
    },
    // Add more dummy videos as needed
]

export function VideoGrid() {
    const [currentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredVideos =
        selectedCategory === "All"
            ? dummyVideos
            : dummyVideos.filter((video) => video.category === selectedCategory)

    const videosPerPage = 8
    // const totalPages = Math.ceil(filteredVideos.length / videosPerPage)
    const startIndex = (currentPage - 1) * videosPerPage
    const endIndex = startIndex + videosPerPage
    const currentVideos = filteredVideos.slice(startIndex, endIndex)

    return (
        <div>
            <Tabs defaultValue="All" className="w-full mb-6">
                <TabsList className="w-full justify-start gap-4 bg-transparent">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category}
                            value={category}
                            onClick={() => setSelectedCategory(category)}
                            className="bg-gray-300 text-black data-[state=active]:bg-black data-[state=active]:text-white rounded-md font-semibold"
                        >
                            {category}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((category) => (
                    <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {currentVideos.map((video) => (
                                <VideoCard video={video} key={video.id} />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

