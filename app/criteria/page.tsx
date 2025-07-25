/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Users,
  GraduationCap,
  Briefcase,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  Globe,
  Calculator,
} from "lucide-react"

export default function Criteria() {
  const criteriaData = [
    {
      title: "Eğitim Durumu",
      points: "1-5 Puan",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Lisans, yüksek lisans ve doktora derecelerine göre puanlama yapılır.",
      details: ["Doktora: 5 puan", "Yüksek Lisans: 4 puan", "Lisans: 3 puan", "Ön Lisans: 2 puan", "Lise: 1 puan"],
    },
    {
      title: "Mesleki Deneyim",
      points: "1-4 Puan",
      icon: <Briefcase className="w-6 h-6" />,
      description: "İlgili alandaki çalışma deneyimi süresine göre değerlendirme.",
      details: ["10+ yıl: 4 puan", "7-9 yıl: 3 puan", "4-6 yıl: 2 puan", "1-3 yıl: 1 puan"],
    },
    {
      title: "Dil Yeterliliği",
      points: "1-3 Puan",
      icon: <Globe className="w-6 h-6" />,
      description: "Türkçe dil seviyesi ve uluslararası dil sertifikaları.",
      details: ["C1-C2 Türkçe: 3 puan", "B1-B2 Türkçe: 2 puan", "A1-A2 Türkçe: 1 puan"],
    },
    {
      title: "Yaş Faktörü",
      points: "1-2 Puan",
      icon: <Users className="w-6 h-6" />,
      description: "Çalışma yaşı aralığına göre puanlama sistemi.",
      details: ["25-35 yaş: 2 puan", "36-45 yaş: 1 puan", "Diğer yaşlar: 0 puan"],
    },
  ]

  const companyRequirements = [
    {
      title: "Şirket Sermayesi",
      requirement: "Minimum 100.000 TL",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Şirketin ödenmiş sermayesi en az 100.000 TL olmalıdır.",
    },
    {
      title: "Yerli Çalışan Oranı",
      requirement: "En az %80",
      icon: <Users className="w-5 h-5" />,
      description: "Toplam çalışanların en az %80'i Türk vatandaşı olmalıdır.",
    },
    {
      title: "Vergi Durumu",
      requirement: "Güncel Olmalı",
      icon: <FileText className="w-5 h-5" />,
      description: "Şirketin vergi ve SGK borcu bulunmamalıdır.",
    },
    {
      title: "Faaliyet Süresi",
      requirement: "En az 1 Yıl",
      icon: <Clock className="w-5 h-5" />,
      description: "Şirket en az 1 yıldır aktif olarak faaliyet göstermeli.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <section className="bg-teal-100/95 text-teal-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Çalışma İzni Değerlendirme Kriterleri</h1>
            <p className="text-xl text-teal-900 mb-8">
              Çalışma izni başvurunuzun değerlendirilmesinde kullanılan temel kriterler ve puanlama sistemi
            </p>
            
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Değerlendirme Süreci Nasıl İşler?</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Çalışma izni başvurunuz, çeşitli kriterler doğrultusunda puanlanarak değerlendirilir. Toplam
                      puanınızın 100 üzerinden en az 60 olması gerekmektedir. Bu puanlama sistemi, başvurunuzun objektif
                      bir şekilde değerlendirilmesini sağlar.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="text-yellow-800 font-medium">
                        <strong>Önemli:</strong> Minimum puan şartını sağlasanız bile, kontenjan durumu ve diğer
                        faktörler de başvurunuzun sonucunu etkileyebilir.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Criteria Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlendirme Kriterleri</h2>
              <p className="text-gray-600">Her kriter için alabileceğiniz maksimum puanlar</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {criteriaData.map((criteria, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {criteria.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900">{criteria.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {criteria.points}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{criteria.description}</p>
                    <div className="space-y-2">
                      {criteria.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-700 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Point Calculation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg p-0 ">
              <CardHeader className="bg-teal-700 text-white rounded-tl-xl rounded-tr-xl ">
                <div className="flex items-center space-x-3 p-1">
                  <Calculator className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl">Puan Hesaplama Örneği</CardTitle>
                    <p className="text-green-100">Başvuru puanınızı nasıl hesaplayacağınızı öğrenin</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Örnek Başvuru Profili:</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Yüksek Lisans Mezunu</span>
                        <Badge>4 Puan</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">7 Yıl Deneyim</span>
                        <Badge>3 Puan</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">B2 Türkçe</span>
                        <Badge>2 Puan</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">30 Yaşında</span>
                        <Badge>2 Puan</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 ">11</div>
                          <div className="text-sm text-green-600">Toplam Puan</div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                        <p className="text-green-700 font-medium">Başarılı Başvuru</p>
                        <p className="text-sm text-green-600">Minimum şartları karşılıyor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Requirements */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Şirket Gereksinimleri</h2>
              <p className="text-gray-600">Çalışma izni başvurusu yapacak şirketlerin sağlaması gereken koşullar</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyRequirements.map((req, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-600">{req.icon}</div>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{req.title}</h3>
                    <Badge className="mb-3 bg-blue-600">{req.requirement}</Badge>
                    <p className="text-sm text-gray-600">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Başvuru Süreci</h2>
              <p className="text-gray-600">Çalışma izni başvurunuzun aşamaları</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Ön Değerlendirme",
                  description: "Başvuru kriterlerinin kontrol edilmesi ve gerekli belgelerin hazırlanması",
                  duration: "1-2 gün",
                },
                {
                  step: "2",
                  title: "Başvuru Sunumu",
                  description: "Tüm belgelerle birlikte resmi başvurunun yapılması",
                  duration: "1 gün",
                },
                {
                  step: "3",
                  title: "İnceleme Süreci",
                  description: "İlgili kurumlar tarafından başvurunun detaylı incelenmesi",
                  duration: "30-60 gün",
                },
                {
                  step: "4",
                  title: "Sonuç Bildirimi",
                  description: "Başvuru sonucunun bildirilmesi ve gerekli işlemlerin tamamlanması",
                  duration: "5-10 gün",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                      <Badge variant="outline">{process.duration}</Badge>
                    </div>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-100/95 text-teal-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-6 text-teal-900" />
            <h2 className="text-3xl font-bold mb-4">Başvurunuza Hazır mısınız?</h2>
            <p className="text-xl text-teal-900 mb-8">
              Kriterlerimizi inceledikten sonra çalışma izin başvurunuzu başlatabilirsiniz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button  className=" bg-teal-700 hover:bg-teal-900 text-white font-medium py-3 w-[180px]">
                Başvuru Yap
              </Button>
              <Button
               
                className=" bg-teal-700 hover:bg-teal-900 text-white font-medium py-3 w-[180px]"
              >
                Uzman Desteği Al
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
