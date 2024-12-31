import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CircleCheck } from 'lucide-react'

interface VideoCardProps {
    id: string,
    thumbnail: string,
    title: string,
    creator: string,
    views: number,
    createdAt: string
}


const VideoCard: React.FC<{ video: VideoCardProps }> = ({ video }) => {
    return (
        <Link href={`/video/${video.id}`} key={video.id}>
            <div className="flex flex-col bg-white  overflow-hidden">
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={320}
                    height={180}
                    className="w-full h-48 object-cover  rounded-lg"
                />
                <div className="p-2 pl-0 flex gap-2">
                    <Avatar className="w-6 h-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold text-md  mb-1">{video.title}</h3>
                        <div className='flex gap-2 items-center'>
                            <p className="text-xs text-gray-600">{video.creator}</p>
                            <CircleCheck size={10} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-xs text-gray-500">{video.views} views</p>
                            <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                            <p className="text-xs text-gray-500">{video.createdAt} ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
