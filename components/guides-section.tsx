import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Download, Video, HelpCircle, FileText } from "lucide-react"

export default function GuidesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kullanım Kılavuzları</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hizmetlerimizi daha etkili kullanmanız için hazırladığımız rehberler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Başvuru Rehberi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">Adım adım başvuru süreci</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                İndir
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Video Eğitimler</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">Görsel eğitim videoları</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Video className="w-4 h-4 mr-2" />
                İzle
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">SSS</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">Sık sorulan sorular</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <HelpCircle className="w-4 h-4 mr-2" />
                Görüntüle
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Formlar</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">İndirilebilir form şablonları</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                İndir
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
