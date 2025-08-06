"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, Clock, CheckCircle, AlertCircle, X } from "lucide-react";
import Link from "next/link";
import { Video, videos } from "@/lib/videosData";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-indigo-50/20 rounded-full flex items-center justify-center">
                <Play className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Adım Adım Çalışma İzni Başvurusu
            </h1>
            <p className="text-xl text-white mb-8">
              Her adımı detaylı şekilde anlatan eğitim videolarımızla başvuru
              sürecinizi kolaylaştırın.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleVideoClick(video)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adım Adım Rehber</h3>
              <p className="text-gray-600">
                Her video, başvuru sürecinin belirli bir aşamasını detaylı
                şekilde anlatır.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güncel İçerik</h3>
              <p className="text-gray-600">
                Videolarımız düzenli olarak güncellenir ve en son mevzuat
                değişikliklerini içerir.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Önemli İpuçları</h3>
              <p className="text-gray-600">
                Başvuru sürecinde dikkat edilmesi gereken kritik noktalar
                vurgulanır.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Daha Fazla Yardıma İhtiyacınız Var mı?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Video rehberlerimizin yanı sıra, ALO 170 destek hattımızı arayabilir
            ve sıkça sorulan sorular bölümümüzden faydalanabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://www.alo170.gov.tr" target="_blank">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white  w-[180px] hover:text-blue-600 bg-transparent"
              >
                ALO 170 Destek
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white  w-[180px] hover:text-blue-600 bg-transparent"
              >
                Sıkça Sorulan Sorular
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">
                {selectedVideo?.title}
              </DialogTitle>
            </div>
          </DialogHeader>
          <div className="px-6 pb-6">
            {selectedVideo && (
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
