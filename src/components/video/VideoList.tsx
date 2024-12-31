import Image from "next/image"
import Link from "next/link"

interface Video {
    id: string
    title: string
    thumbnail: string
    creator: string
    views: number
}

interface VideoListProps {
    videos: Video[]
}

export function VideoList({ videos }: VideoListProps) {
    return (
        <div className="flex flex-col gap-4">
            {videos.map((video) => (
                <Link href={`/video/${video.id}`} key={video.id}>
                    <div className="flex bg-white  shadow-md overflow-hidden">
                        <Image
                            src={video.thumbnail}
                            alt={video.title}
                            width={320}
                            height={180}
                            className="w-full h-20 object-cover rounded-lg"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                            <p className="text-sm text-gray-600">{video.creator}</p>
                            <p className="text-sm text-gray-500">{video.views} views</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

