
/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, FileText, Info, Users, Building, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('/images/pattern-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Logo Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Building className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        {/* Main Cards Grid - Matching Template Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-12">
            {/* Left Side - Large Çalışma İzni Card (6 columns) */}
            <div className="col-span-12 lg:col-span-6">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-700 border-0 text-white h-full shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-8 h-full flex flex-col">
                  <h2 className="text-3xl font-bold mb-6">Çalışma İzni</h2>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-200 mt-1">→</span>
                      <span className="text-sm leading-relaxed">Türkiye'de yatırım planlıyorsanız</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-200 mt-1">→</span>
                      <span className="text-sm leading-relaxed">Ya da bir mesleğiniz varsa</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-200 mt-1">→</span>
                      <span className="text-sm leading-relaxed">Çalışma izni almak e-İzin ile çok kolay</span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center mb-8">
                    <img
                      src="/images/illustration-2.png"
                      alt="Çalışma İzni İllüstrasyonu"
                      className="w-48 h-48 object-contain opacity-90"
                    />
                  </div>

                  <Button
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 py-3 text-lg font-semibold"
                    onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                  >
                    e-İzin Başvurusu
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - 4 Small Cards (6 columns, 2x2 grid) */}
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Çalışma İzni Muafiyeti */}
                <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-3">Çalışma İzni Muafiyeti</h3>
                    <p className="text-red-100 text-sm mb-4">e-Muafiyet</p>

                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img
                        src="/images/illustration-3.png"
                        alt="Muafiyet"
                        className="w-20 h-20 object-contain opacity-80"
                      />
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Başvuru
                    </Button>
                  </CardContent>
                </Card>

                {/* Uluslararası Yetenek Transferi */}
                <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-3">Uluslararası Yetenek Transferi</h3>

                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img
                        src="/images/illustration-6.png"
                        alt="Yetenek Transferi"
                        className="w-20 h-20 object-contain opacity-80"
                      />
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Başvuru
                    </Button>
                  </CardContent>
                </Card>

                {/* Çalışma İzni Başvurusu Yap */}
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-3">Başvuru Yap</h3>
                    <p className="text-blue-100 text-xs mb-4">Hızlı ve güvenli</p>

                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img
                        src="/images/illustration-1.png"
                        alt="Başvuru"
                        className="w-20 h-20 object-contain opacity-80"
                      />
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Başvuru
                    </Button>
                  </CardContent>
                </Card>

                {/* Bilgi Al */}
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-3">Bilgi Al</h3>
                    <p className="text-orange-100 text-xs mb-4">Detaylı rehber</p>

                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img
                        src="/images/illustration-5.png"
                        alt="Bilgi"
                        className="w-20 h-20 object-contain opacity-80"
                      />
                    </div>

                    <Link href="/work-permit">
                      <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                        <Info className="w-3 h-3 mr-1" />
                        Bilgi
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Bottom Large Card - Sıkça Sorulan Sorular */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0 text-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Sıkça Sorulan Sorular</h2>
                    <p className="text-gray-700 text-lg mb-6">Sizlere her konuda yardımcı olmak isteriz</p>
                    <Link href="/sss">
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg font-semibold">
                        İncele
                      </Button>
                    </Link>
                  </div>
                  <div className="hidden md:block ml-8">
                    <img
                      src="/images/illustration-4.png"
                      alt="SSS İllüstrasyonu"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <Link href="/iletisim" className="hover:text-white transition-colors text-lg">
              İletişim
            </Link>
            <Link href="/work-permit" className="hover:text-white transition-colors text-lg">
              Belgeler
            </Link>
            <Link href="/work-permit" className="hover:text-white transition-colors text-lg">
              Mevzuat
            </Link>
            <span className="hover:text-white transition-colors cursor-pointer text-lg">ÇSGB</span>
          </div>
        </div>

        {/* Institution Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <Building className="w-8 h-8 text-white/80" />
          </div>
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <Globe className="w-8 h-8 text-white/80" />
          </div>
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <Users className="w-8 h-8 text-white/80" />
          </div>
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <FileText className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  )
}

