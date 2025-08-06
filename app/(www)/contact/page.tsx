"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Building2, Users } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 ">
      <div className="container mx-auto px-4 py-6 ">
        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bakanlık İletişim Bilgilerimiz
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Çalışma ve Sosyal Güvenlik Bakanlığı Uluslararası İşgücü Genel
            Müdürlüğü ile iletişime geçin
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 ">
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Daha fazla bilgi için lütfen
                  </h2>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    Bizimle iletişime geçin.
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Building2 className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        Kurum Adı
                      </h4>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Çalışma ve Sosyal Güvenlik Bakanlığı - Uluslararası
                        İşgücü Genel Müdürlüğü
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        Adres
                      </h4>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Emek Mah. Bosna Hersek Cd. No:29,
                        <br />
                        06490 Çankaya / ANKARA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        E-posta
                      </h4>
                      <a
                        href="mailto:uigm@csgb.gov.tr"
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                      >
                        uigm@csgb.gov.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        Telefon
                      </h4>
                      <a
                        href="tel:+903122966600"
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                      >
                        +90 (312) 296 66 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        Çalışma Saatleri
                      </h4>
                      <p className="text-gray-700 text-xs">
                        Pazartesi - Cuma: 08:30 - 17:30
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1">
              <Link href="https://www.alo170.gov.tr" target="_blank">
                <Card className="bg-white/90 backdrop-blur-sm  hover:shadow-lg duration-300 transition-shadow">
                  <CardContent className="p-3 text-center">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <h4 className="font-semibold text-gray-900 text-xs mb-1">
                      ALO 170
                    </h4>
                    <p className="text-gray-600 text-xs">Bilgi Hattı</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="h-full bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="h-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.6234567890123!2d32.8597!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0x538267c2c8000000!2sEmek%20Mah.%2C%20Bosna%20Hersek%20Cd.%20No%3A29%2C%2006490%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Çalışma ve Sosyal Güvenlik Bakanlığı Konumu"
                    className="rounded-lg"
                  />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Konum
                      </h4>
                    </div>
                    <p className="text-xs text-gray-700">
                      Çalışma ve Sosyal Güvenlik Bakanlığı
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Emek Mah. Bosna Hersek Cd. No:29, Çankaya/Ankara
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-sm"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/maps?daddr=Emek+Mah.+Bosna+Hersek+Cd.+No:29+06490+Çankaya/Ankara",
                          "_blank"
                        )
                      }
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Yol Tarifi Al
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
