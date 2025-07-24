import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, CheckCircle } from "lucide-react";

export default function ApplicationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popüler Başvurular
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En sık kullanılan başvuru türleri hakkında bilgi edinin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow flex flex-col gap-10">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">e-İzin</CardTitle>
            </CardHeader>
            <CardContent className="text-center ">
              <p className="text-gray-600 mb-6">
                Bir mesleğiniz varsa Türkiye'de çalışma izni almak çok kolay.
              </p>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                İncele
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex flex-col gap-10">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">e-Muafiyet</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Türkiye'de çalışma izni almaksızın çalışma ve ikamet hakkı.
              </p>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                İncele
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex flex-col gap-10">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Turkuaz Kart</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Türkiye’de süresiz çalışma ve ikamet hakkı.
              </p>

              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                İncele
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
