import { AppSidebar } from "@/components/layout/AppSidebar";
import { VideoGrid } from "@/components/video/VideoGrid";

export default function Home() {
  return (
    <div className="relative flex w-full h-full">
      <AppSidebar />

      <main className="flex-1 overflow-y-auto p-6">
        <VideoGrid />
      </main>
    </div>
  );
}
