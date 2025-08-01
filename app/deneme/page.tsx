import VideoPlayer from '@/components/VideoPlayer'
import React from 'react'

const page = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Eğitim Videoları</h1>

      <VideoPlayer
        videoId="Fit3UXlDVWY" // YouTube video ID
        thumbnailUrl="https://img.youtube.com/vi/Fit3UXlDVWY/hqdefault.jpg"
      />
      <VideoPlayer
        videoId="Tj1eqEwdTck" // YouTube video ID
        thumbnailUrl="https://img.youtube.com/vi/Tj1eqEwdTck/hqdefault.jpg"
      />
    </div>
  )
}

export default page