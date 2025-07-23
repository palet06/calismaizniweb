import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Yeni Dijital Hizmet Platformu Açıldı",
      excerpt: "Vatandaşlarımızın hizmetlere daha kolay erişimi için yeni platform hizmete girdi.",
      date: "15 Ocak 2024",
      category: "Duyuru",
      urgent: true,
    },
    {
      id: 2,
      title: "Online Başvuru Süreçleri Güncellendi",
      excerpt: "Başvuru süreçlerimiz daha hızlı ve kullanıcı dostu hale getirildi.",
      date: "12 Ocak 2024",
      category: "Güncelleme",
      urgent: false,
    },
    {
      id: 3,
      title: "Sistem Bakım Duyurusu",
      excerpt: "20 Ocak tarihinde sistem bakımı nedeniyle hizmet kesintisi yaşanacaktır.",
      date: "10 Ocak 2024",
      category: "Bakım",
      urgent: true,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Duyurular ve Haberler</h2>
            <p className="text-gray-600">Güncel duyurular ve sistem haberleri</p>
          </div>
          <Button variant="outline">
            Tümünü Gör
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={item.urgent ? "destructive" : "secondary"}>{item.category}</Badge>
                  {item.urgent && (
                    <Badge variant="destructive" className="text-xs">
                      ÖNEMLİ
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Devamını Oku
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
