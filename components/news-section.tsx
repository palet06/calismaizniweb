import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsSection() {
  const duyurular = [
    {
      id: 1,
      title:
        "Hayvancılık İşletmelerinde İstihdam Edilecek Çoban ve Hayvan Bakıcıları İçin Çalışma İzni Başvuru Süreçleri",
      excerpt:
        "Ülkemizde hayvancılık sektörünün gelişmesi ve yerli üretimin devamlılığı için ihtiyacın yerli işgücüyle karşılanamadığı durumlarda, deneyimli yabancı çobanlara çalışma izni imkânı sağlıyoruz",
      date: "12 Haziran 2025",
      category: "Duyuru",
      urgent: true,
      url: "https://www.csgb.gov.tr/uigm/tr/duyurular/12062025",
    },
    {
      id: 2,
      title:
        "İşgücü Piyasasına Geçişin Desteklenmesi Projesi (İSDEP II) Kapsamında Bireysel Danışmanlık Hizmet Alımı İlanı",
      excerpt:
        "İşgücü Piyasasına Geçişin Desteklenmesi Projesi (İSDEP II) kapsamında, Uluslararası İşgücü Genel Müdürlüğünde görev almak üzere Bireysel Danışmanlık alım",
      date: "27 Ocak 2025",
      category: "Duyuru",
      urgent: false,
      url: "https://www.csgb.gov.tr/uigm/tr/duyurular/27012025",
    },
    {
      id: 3,
      title:
        "Uluslararası İşgücü Genel Müdürlüğü Çalışma Ve Sosyal Güvenlik Bakanlığı Çalışma İzni Belgesi/Kimlik Kartı Baskı Hizmet Alımı",
      excerpt:
        "Çalışma İzni Belgesi Baskı hizmet alımı 4734 sayılı Kamu İhale Kanununun 19 uncu maddesine göre açık ihale usulü ile ihale edilecek olup, teklifler sadece elektronik ortamda EKAP üzerinden alınacaktır.",
      date: "26 Kasım 2024",
      category: "Duyuru",
      urgent: true,
      url: "https://www.csgb.gov.tr/uigm/tr/duyurular/25-11-2024",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Duyurular ve Haberler
            </h2>
            <p className="text-gray-600">
              Güncel duyurular ve sistem haberleri
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-end mb-4">
          <Link
            href="https://www.csgb.gov.tr/uigm/tr/duyurular"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            <Button variant="outline">
              Tümünü Gör
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {duyurular.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={item.urgent ? "destructive" : "secondary"}>
                    {item.category}
                  </Badge>
                  {item.urgent && (
                    <Badge variant="destructive" className="text-xs">
                      ÖNEMLİ
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="flex items-center"
                  >
                    <Button variant="ghost" size="sm">
                      Devamını Oku
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
