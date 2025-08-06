/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Send, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="sm:h-screen min-h-screen relative  "
      style={{
        backgroundImage: `url('imported/pattern-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30"></div>

      <div className="relative z-10 h-full flex flex-col ">
        <div className="text-center py-4">
          <Image
            className="mx-auto"
            src="imported/beyaz-logo.svg"
            height={45}
            width={350}
            alt="CSGB Logo"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center px-4 max-w-6xl mx-auto w-full  ">
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-12 sm:col-span-6">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-700 border-0 text-white h-full shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Çalışma İzni</h2>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1 text-sm">→</span>
                        <span className="leading-relaxed">
                          Türkiye'de yatırım planlıyorsanız
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1 text-sm">→</span>
                        <span className=" leading-relaxed">
                          Ya da bir mesleğiniz varsa
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1 text-sm">→</span>
                        <span className=" leading-relaxed">
                          Çalışma izni almak e-İzin ile çok kolay
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 py-2 font-semibold"
                    onClick={() =>
                      window.open("https://test-eizin.csgb.gov.tr", "_blank")
                    }
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Hemen Başvur
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <div className="grid grid-cols-1 gap-4 h-full">
                <Card className=" bg-gradient-to-r from-yellow-400 to-yellow-500 border-0 text-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        Bilgi Al
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Hangi izin türü için başvuru yapabileceğiniz,
                        değerlendirme kriterleri ve başvuru süreçleri ile ilgili
                        detaylı bilgi almak için sitemizi ziyaret edebilirsiniz.
                      </p>
                    </div>
                    <Link href="/home" target="_self">
                      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 font-semibold">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Git
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card className="col-span-4 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">İlgili Kanun</h3>
                  <p className="text-blue-100 text-base mb-3">
                    6735 Sayılı Uluslararası İşgücü Kanunu hakkında detaylı
                    bilgi almak için tıklayın.
                  </p>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  onClick={() =>
                    window.open(
                      "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6735&MevzuatTur=1&MevzuatTertip=5",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  İncele
                </Button>
              </CardContent>
            </Card>

            <Card className="col-span-4 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-red-500 to-red-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Adım Adım Başvuru</h3>
                  <p className="text-red-100 text-base mb-3">
                    Her adımı detaylı şekilde anlatan eğitim videolarımızla
                    başvuru sürecinizi kolaylaştırın.
                  </p>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  onClick={() => window.open("/videos", "_self")}
                >
                  <Video className="w-3 h-3 mr-1" />
                  İzle
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-4 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Sıkça Sorulan Sorular
                  </h3>

                  <p className="text-orange-100 text-base mb-3">
                    Sizlere her konuda yardımcı olmak isteriz.
                  </p>
                </div>
                <Link href="/faq" target="_self">
                  <Button
                    size="sm"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    İncele
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="col-span-4 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-green-500 to-green-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Duyurular ve Haberler
                  </h3>
                  <p className="text-red-100 text-base mb-3">
                    Güncel duyurular ve sistem haberlerini takip edebilirsiniz.
                  </p>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  onClick={() =>
                    window.open(
                      "https://www.csgb.gov.tr/uigm/tr/duyurular",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  İncele
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-1">
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <Link
                href="/contact"
                target="_self"
                className="hover:text-white transition-colors"
              >
                İletişim
              </Link>
              <Link
                href="/statistics"
                target="_self"
                className="hover:text-white transition-colors"
              >
                İstatistikler
              </Link>
              <Link
                href="https://kms.kaysis.gov.tr/Home/kurum/24304011?AspxAutoDetectCookieSupport=1"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                Mevzuat
              </Link>
              <Link href="https://www.csgb.gov.tr" target="_blank">
                <span className="hover:text-white transition-colors cursor-pointer">
                  ÇSGB
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
