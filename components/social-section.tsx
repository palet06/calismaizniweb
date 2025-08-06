/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Türkiye'de hangi vize seçenekleri var?",
    description:
      "Türkiye'ye gelmek için farklı vize türlerini keşfedin ve size en uygun olanını bulun.",
    image: "/tweet-1.png",
    imageAlt: "X Gönderisi",
    url: "https://x.com/csgbakanligi/status/1666837139751940096",
  },

  {
    id: 2,
    title:
      "Bugün engelli vatandaşlarımız için bir müjdeyi daha duyurmak istiyoruz.",
    description:
      "10 bin engelli vatandaşımız için İşgücü Uyum Programı (İUP) kapsamında özel bir kontenjan tahsis ediyoruz. Bu sayede; engelli vatandaşlarımız kamu kurum ve kuruluşlarında kısmi zamanlı olarak çalışma hayatıyla buluşacak. Ayrıca özel sektöre geçişi de destekleyecek önemli eğitimlerle gerekli becerileri kazanacak.",
    image: "/tweet-2.png",
    imageAlt: "X Gönderisi",
    url: "https://x.com/isikhanvedat/status/1923036792032272861",
  },
  {
    id: 3,
    title: "Engelsiz İşgücü Uyum Programı’nı Hayata Geçiriyoruz!",
    description:
      "Engelli vatandaşlarımızın istihdamda daha güçlü bir şekilde yer almalarını sağlayacağız.",
    image: "/tweet-3.png",
    imageAlt: "X Gönderisi",
    url: "https://x.com/isikhanvedat/status/1947560009447182362",
  },
  {
    id: 4,
    title: "Çalışma ve Sosyal Güvenlik Bakanımız Sayın Prof. Dr.",

    description:
      "Çalışma ve Sosyal Güvenlik Bakanımız Sayın Prof. Dr Işıkhan Cumhurbaşkanı Yardımcımız Sayın Cevdet Yılmaz başkanlığında düzenlenen Ekonomi Koordinasyon Kurulu (EKK) toplantısına katıldı.",
    image: "/tweet-4.png",
    imageAlt: "X Gönderisi",
    url: "https://x.com/csgbakanligi/status/1947298326614855727",
  },
];

export default function SocialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentSlide + i) % slides.length;
      visibleSlides.push(slides[slideIndex]);
    }
    return visibleSlides;
  };

  return (
    <section
      className="relative overflow-hidden py-16"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sosyal Medya Paylaşımları
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Türkiye'de çalışma ve yaşam fırsatlarını keşfedin. Sosyal medya
            paylaşımlarımızla en güncel bilgilere ulaşın.
          </p>
        </div>
        <div className="w-full">
          <div className="hidden md:grid md:grid-cols-3  gap-6 md:size-4/5 mx-auto">
            {getVisibleSlides().map((slide, index) => (
              <Link
                key={`${slide.id}-${index}`}
                href={slide.url}
                target="_blank"
              >
                <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-blue-600 mb-3 line-clamp-1 group-hover:text-blue-800 transition-colors">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-1">
                        {slide.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Card className="bg-white/95 backdrop-blur-sm max-w-sm mx-auto">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-blue-600 mb-3">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-10 md:left-5 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-10 md:right-5 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 ">
        <div className="flex space-x-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-black scale-125"
                  : "bg-slate-500 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
