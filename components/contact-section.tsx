import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            İletişim ve Destek
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Telefon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Çağrı Merkezi</p>
              <p className="font-semibold text-blue-600">
                <a className="hover:text-blue-400" href={`tel:903122966600`}>
                  +90 (0312) 296 66 00
                </a>{" "}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">E-posta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Destek</p>
              <p className="font-semibold text-green-600">
                <a
                  className="hover:text-green-400"
                  href="mailto:eizindestek@csgb.gov.tr "
                >
                  eizindestek@csgb.gov
                </a>{" "}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Adres</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-orange-600">
                Emek Mah. Bosna Hersek Cd. No:29, 06490 Çankaya / ANKARA
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Çalışma Saatleri</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Hafta İçi</p>
              <p className="font-semibold text-purple-600">09:00 - 18:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8">
            Canlı Destek
          </Button>
        </div>
      </div>
    </section>
  );
}
