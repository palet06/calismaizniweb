"use client";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const slides = [
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

export function SocialSection2() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-50"></div>
      </div>

      {/* Content */}
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
          {/* Desktop View - 3 cards */}
          <div className="mx-auto max-w-6xl">
            {" "}
            {/* Daha geniş alan */}
            <Carousel className="w-full" plugins={[plugin.current]}>
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 "
                  >
                    <Link
                      key={`${slide.id}-${index}`}
                      href={slide.url}
                      target="_blank"
                    >
                      <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 group cursor-pointer">
                        <CardContent className=" p-0">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious  className="bg-blue-900 text-white border-blue-600 border-2 " />
              <CarouselNext  className="bg-blue-900 text-white border-blue-600  border-2"/>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
