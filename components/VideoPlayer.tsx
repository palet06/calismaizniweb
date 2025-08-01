"use client"

import { useState } from "react";

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl: string;
}

export default function VideoPlayer({ videoId, thumbnailUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-xl aspect-video relative rounded-lg overflow-hidden shadow-lg">
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="w-full h-full bg-black cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover group-hover:brightness-75 transition"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-4 shadow-md">
              ▶️
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
