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
import {
  Play,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import Link from "next/link";

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  category: string;
  views: string;
}

const videos: Video[] = [
  {
    id: "1",
    title:
      "Geçici Koruma Sağlanan Yabancılar İçin Adım Adım Çalışma İzni Başvurusu",
    description:
      "Çalışma izninin ne olduğu, kimler için gerekli olduğu ve temel şartları hakkında bilgi edinin.",
    duration: "2:04",
    thumbnail: "https://img.youtube.com/vi/8zFQWKFKyyA/hqdefault.jpg",
    youtubeId: "8zFQWKFKyyA",
    category: "Temel Bilgiler",
    views: "12.5K",
  },
  {
    id: "2",
    title:
      "Yurt İçinde İkamet Eden Yabancılar İçin Adım Adım Çalışma İzni Başvurusu",
    description:
      "Çalışma izni başvurusu yapmadan önce hazırlamanız gereken belgeler ve işlemler.",
    duration: "1:43",
    thumbnail: "https://img.youtube.com/vi/6UfF2iWpb_c/hqdefault.jpg",
    youtubeId: "6UfF2iWpb_c",
    category: "Hazırlık",
    views: "8.9K",
  },
  {
    id: "3",
    title:
      "Uluslararası Koruma Sağlanan Yabancılar İçin Adım Adım Çalışma İzni Başvurusu",
    description:
      "e-İzin sistemine nasıl kayıt olunur, sistem nasıl kullanılır adım adım anlatım.",
    duration: "2:19",
    thumbnail: "https://img.youtube.com/vi/EF5hCwMMREc/hqdefault.jpg",
    youtubeId: "EF5hCwMMREc",
    category: "Sistem Kullanımı",
    views: "15.2K",
  },
  {
    id: "4",
    title:
      "Yurt Dışında İkamet Eden Yabancılar İçin Adım Adım Çalışma İzni Başvurusu",
    description:
      "Yurt Dışında İkamet Eden Yabancılar İçin Adım Adım Çalışma İzni Başvurusu",
    duration: "1:57",
    thumbnail: "https://img.youtube.com/vi/QhSXIne_eDs/hqdefault.jpg",
    youtubeId: "QhSXIne_eDs",
    category: "Başvuru",
    views: "22.1K",
  },
  {
    id: "5",
    title: "Geçici Koruma Sağlanan Yabancılar İçin Çalışma İzni Başvurusu",
    description:
      "Gerekli belgeleri sisteme nasıl yükleyeceğiniz ve dikkat edilmesi gereken noktalar.",
    duration: "2:04",
    thumbnail: "https://img.youtube.com/vi/lB6HByC0pmY/hqdefault.jpg",
    youtubeId: "lB6HByC0pmY",
    category: "Belgeler",
    views: "9.7K",
  },
  {
    id: "6",
    title:
      "Uluslararası Koruma Sağlanan Yabancılar İçin Çalışma İzni Başvurusu",
    description:
      "Başvurunuzu yaptıktan sonra takip etmeniz gereken süreçler ve yapmanız gerekenler.",
    duration: "2:19",
    thumbnail: "https://img.youtube.com/vi/Tj1eqEwdTck/hqdefault.jpg",
    youtubeId: "Tj1eqEwdTck",
    category: "Takip",
    views: "11.3K",
  },
  {
    id: "7",
    title: "Yurt Dışında İkamet Eden Yabancılar İçin Çalışma İzni Başvurusu",
    description:
      "Başvuru sürecinde en sık yapılan hatalar ve bunlardan nasıl kaçınılır.",
    duration: "1:57",
    thumbnail: "https://img.youtube.com/vi/gBPbkym2BXQ/hqdefault.jpg",
    youtubeId: "gBPbkym2BXQ",
    category: "İpuçları",
    views: "18.5K",
  },
  {
    id: "8",
    title: "Yurt İçinde İkamet Eden Yabancılar İçin Çalışma İzni Başvurusu",
    description:
      "Başvurunuz reddedilirse hangi adımları izlemeniz gerektiği hakkında rehber.",
    duration: "1:44",
    thumbnail: "https://img.youtube.com/vi/ZsCYncwP45U/hqdefault.jpg",
    youtubeId: "ZsCYncwP45U",
    category: "Sorun Çözme",
    views: "7.8K",
  },
  {
    id: "9",
    title:
      "Work in Turkey Step By Step Work Permıt Applıcatıon Foreıgners Under Temporary Protectıon",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "2:16",
    thumbnail: "https://img.youtube.com/vi/ZaFhMg2aoRU/hqdefault.jpg",
    youtubeId: "ZaFhMg2aoRU",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "10",
    title:
      "Work in Turkey Step By Step Work Permıt Applıcatıon Foreıgners Under Internatıonal Protectıon",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "2:27",
    thumbnail: "https://img.youtube.com/vi/n6iHna8x2l4/hqdefault.jpg",
    youtubeId: "n6iHna8x2l4",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "11",
    title:
      "Work in Turkey Step By Step Work Permıt Applıcatıon Applıcatıon From Abroad",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "1:49",
    thumbnail: "https://img.youtube.com/vi/EJ5Y7RLjfzw/hqdefault.jpg",
    youtubeId: "EJ5Y7RLjfzw",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "12",
    title:
      "Work in Turkey Step By Step Work Permıt Applıcatıon Domestıc Applıcatıon",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "1:43",
    thumbnail: "https://img.youtube.com/vi/Iijog8XsxNU/hqdefault.jpg",
    youtubeId: "Iijog8XsxNU",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "13",
    title: "تقديم طلب إذن العمل خطوة بخطوةالأجانب تحت الحماية المؤقتة",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "2:09",
    thumbnail: "https://img.youtube.com/vi/8yvUe5XlJ74/hqdefault.jpg",
    youtubeId: "8yvUe5XlJ74",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "14",
    title: "تقديم طلب إذن العمل خطوة بخطوةالأجانب تحت الحماية الدولية",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "2:26",
    thumbnail: "https://img.youtube.com/vi/RCPkgH1kH08/hqdefault.jpg",
    youtubeId: "RCPkgH1kH08",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "15",
    title: "تقديم طلب إذن العمل خطوة بخطوةتقديم الطلب من خارج البلد",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "1:53",
    thumbnail: "https://img.youtube.com/vi/F0ASi_sLll0/hqdefault.jpg",
    youtubeId: "F0ASi_sLll0",
    category: "Uzatma",
    views: "13.9K",
  },
  {
    id: "16",
    title: "تقديم طلب إذن العمل خطوة بخطوةتقديم الطلب من داخل تركيا",
    description:
      "Mevcut çalışma izninizi nasıl uzatacağınız ve dikkat edilmesi gereken süreler.",
    duration: "1:49",
    thumbnail: "https://img.youtube.com/vi/7IgfE6Mc184/hqdefault.jpg",
    youtubeId: "7IgfE6Mc184",
    category: "Uzatma",
    views: "13.9K",
  },
];

const categories = [
  "Tümü",
  "Temel Bilgiler",
  "Hazırlık",
  "Sistem Kullanımı",
  "Başvuru",
  "Belgeler",
  "Takip",
  "İpuçları",
  "Sorun Çözme",
  "Uzatma",
];

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredVideos =
    selectedCategory === "Tümü"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}

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
               Her
              adımı detaylı şekilde anlatan eğitim videolarımızla başvuru
              sürecinizi kolaylaştırın.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        {/* <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div> */}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.map((video) => (
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
                  {/* <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {video.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {video.views}
                    </div>
                  </div> */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  {/* <p className="text-gray-600 text-sm line-clamp-3">{video.description}</p> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
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

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Daha Fazla Yardıma İhtiyacınız Var mı?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Video rehberlerimizin yanı sıra, detaylı yazılı kılavuzlarımızı da
            inceleyebilir ve sıkça sorulan sorular bölümümüzden
            faydalanabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <FileText className="h-4 w-4 mr-2" />
              Yazılı Kılavuzlar
            </Button>
            <Link href="/faq">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Sıkça Sorulan Sorular
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">
                {selectedVideo?.title}
              </DialogTitle>
              {/* <Button variant="ghost" size="sm" onClick={closeVideoModal} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button> */}
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
