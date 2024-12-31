"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VideoList } from "@/components/video/VideoList"
import { VideoPlayer } from "@/components/video/VideoPlayer"
// import { Textarea } from "@/components/ui/textarea"

// Dummy video data
const dummyVideoData = {
    id: "123",
    title: "Amazing Video Title",
    description: "This is an incredible video about something amazing.",
    creator: "John Doe",
    views: 10000,
    likes: 500,
    dislikes: 20,
    quality: ["240p", "480p", "720p"],
}

// Dummy recommended videos
const recommendedVideos = [
    { id: "1", title: "Next Big Thing in Tech", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", creator: "Tech Guru", views: 50000 },
    { id: "2", title: "Learn React in 10 Minutes", thumbnail: "https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg", creator: "React Master", views: 75000 },
    { id: "3", title: "5 Must-Know JavaScript Tricks", thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg", creator: "JS Wizard", views: 100000 },
]

// Dummy comments
const dummyComments = [
    { id: "1", user: "Alice", avatar: "https://i.pravatar.cc/150?img=1", content: "Great video! Very informative.", timestamp: "2 hours ago" },
    { id: "2", user: "Bob", avatar: "https://i.pravatar.cc/150?img=2", content: "I learned a lot from this. Thanks for sharing!", timestamp: "1 day ago" },
    { id: "3", user: "Charlie", avatar: "https://i.pravatar.cc/150?img=3", content: "Can you make a follow-up video on this topic?", timestamp: "3 days ago" },
]

export default function VideoPage() {
    const { id } = useParams()
    const [video, setVideo] = useState(dummyVideoData)
    const [currentQuality, setCurrentQuality] = useState("720p")
    const [currentTime, setCurrentTime] = useState(0)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [newComment, setNewComment] = useState("")
    const [comments, setComments] = useState(dummyComments)

    useEffect(() => {
        // Simulate fetching video data
        // In a real app, you would fetch data based on the id
        setVideo(dummyVideoData)

        // Simulate real-time updates
        const timer = setInterval(() => {
            setCurrentTime((prevTime) => prevTime + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [id])

    const handleSubscribe = () => {
        setIsSubscribed(!isSubscribed)
    }

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (newComment.trim()) {
            const newCommentObj = {
                id: String(comments.length + 1),
                user: "You",
                avatar: "https://i.pravatar.cc/150?img=4",
                content: newComment,
                timestamp: "Just now"
            }
            setComments([newCommentObj, ...comments])
            setNewComment("")
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-[80%] m-auto flex flex-col lg:flex-row gap-6">
                <div className="lg:w-3/4">
                    {/* Video Player */}
                    <div className="aspect-video mb-4">
                        {/* <VideoPlayer src="https://my-video-transcoder.s3.ap-south-1.amazonaws.com/7657449-hd_1920_1080_25fps.mp4" /> */}
                        <VideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />

                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AdWM3q8fiHE?si=9-Pw8d5wT4k51mxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                    {/* Video Details */}
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">{video.title}</h1>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-gray-600">{video.views} views</p>
                            <div className="flex items-center space-x-4">
                                <Button variant="outline">
                                    👍 {video.likes}
                                </Button>
                                <Button variant="outline">
                                    👎 {video.dislikes}
                                </Button>
                                <Button onClick={handleSubscribe}>
                                    {isSubscribed ? "Unsubscribe" : "Subscribe"}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h2 className="font-semibold mb-2">{video.creator}</h2>
                        <p>{video.description}</p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <p>Current Time: {currentTime} seconds</p>
                        <Select value={currentQuality} onValueChange={setCurrentQuality}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select quality" />
                            </SelectTrigger>
                            <SelectContent>
                                {video.quality.map((q) => (
                                    <SelectItem key={q} value={q}>
                                        {q}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Conments */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Comments</h2>
                        <form onSubmit={handleCommentSubmit} className="mb-4">
                            {/* <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-2"
              /> */}
                            <div>Input</div>
                            <Button type="submit">Post Comment</Button>
                        </form>
                        <div className="space-y-4">
                            {comments.map((comment) => (
                                <div key={comment.id} className="flex space-x-4">
                                    <Avatar>
                                        <AvatarImage src={comment.avatar} alt={comment.user} />
                                        <AvatarFallback>{comment.user[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{comment.user} <span className="text-gray-500 text-sm font-normal">{comment.timestamp}</span></p>
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4">
                    <h2 className="text-xl font-semibold mb-4">Recommended Videos</h2>
                    <VideoList videos={recommendedVideos} />
                </div>
            </div>
        </div>
    )
}

