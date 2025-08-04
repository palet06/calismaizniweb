/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, FileText, Info, Users, Building, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('imported/pattern-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30"></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Logo Section */}
        <div className="text-center py-4">
          
           <Image className="mx-auto" src="imported/beyaz-logo.svg" height={40} width={300} alt="CSGB Logo"/>
          
        </div>

        {/* Main Content - Flex grow to fill remaining space */}
        <div className="flex-1 flex flex-col justify-center px-4 max-w-7xl mx-auto w-full">
          {/* Main Cards Grid - Matching Template Layout */}
          <div className="grid grid-cols-12 gap-4 mb-6">
            {/* Left Side - Large Çalışma İzni Card (6 columns) */}
            <div className="col-span-12 lg:col-span-6">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-700 border-0 text-white h-full shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">Çalışma İzni</h2>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-200 mt-1 text-sm">→</span>
                      <span className="text-sm leading-relaxed">Türkiye'de yatırım planlıyorsanız</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-200 mt-1 text-sm">→</span>
                      <span className="text-sm leading-relaxed">Ya da bir mesleğiniz varsa</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-200 mt-1 text-sm">→</span>
                      <span className="text-sm leading-relaxed">Çalışma izni almak e-İzin ile çok kolay</span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center mb-4">
                    <img
                      src="/images/illustration-2.png"
                      alt="Çalışma İzni İllüstrasyonu"
                      className="w-32 h-32 object-contain opacity-90"
                    />
                  </div>

                  <Button
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 py-2 font-semibold"
                    onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                  >
                    e-İzin Başvurusu
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - 4 Small Cards (6 columns, 2x2 grid) */}
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Çalışma İzni Muafiyeti */}
                <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-4 h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-2">Çalışma İzni Muafiyeti</h3>
                    <p className="text-red-100 text-xs mb-3">e-Muafiyet</p>

                    <div className="flex-1 flex items-center justify-center mb-3">
                      <img
                        src="/images/illustration-3.png"
                        alt="Muafiyet"
                        className="w-16 h-16 object-contain opacity-80"
                      />
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                      onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Başvuru
                    </Button>
                  </CardContent>
                </Card>

                {/* Uluslararası Yetenek Transferi */}
                <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-4 h-full flex flex-col">
                    <h3 className="text-base font-bold mb-2">Uluslararası Yetenek Transferi</h3>

                    <div className="flex-1 flex items-center justify-center mb-3">
                      <img
                        src="/images/illustration-6.png"
                        alt="Yetenek Transferi"
                        className="w-16 h-16 object-contain opacity-80"
                      />
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                      onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Başvuru
                    </Button>
                  </CardContent>
                </Card>

                {/* Çalışma İzni Başvurusu Yap */}
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-4 h-full flex flex-col">
                    <h3 className="text-base font-bold mb-2">Başvuru Yap</h3>
                    <p className="text-blue-100 text-xs mb-3">Hızlı ve güvenli</p>

                    <div className="flex-1 flex items-center justify-center mb-3">
                      <img
                        src="/images/illustration-1.png"
                        alt="Başvuru"
                        className="w-16 h-16 object-contain opacity-80"
                      />
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                      onClick={() => window.open("https://www.calismaizni.gov.tr", "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Başvuru
                    </Button>
                  </CardContent>
                </Card>

                {/* Bilgi Al */}
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-4 h-full flex flex-col">
                    <h3 className="text-base font-bold mb-2">Bilgi Al</h3>
                    <p className="text-orange-100 text-xs mb-3">Detaylı rehber</p>

                    <div className="flex-1 flex items-center justify-center mb-3">
                      <img
                        src="/images/illustration-5.png"
                        alt="Bilgi"
                        className="w-16 h-16 object-contain opacity-80"
                      />
                    </div>

                    <Link href="/work-permit">
                      <Button
                        size="sm"
                        className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                      >
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
          <div className="mb-4">
            <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0 text-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Sıkça Sorulan Sorular</h2>
                    <p className="text-gray-700 mb-4">Sizlere her konuda yardımcı olmak isteriz</p>
                    <Link href="/sss">
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 font-semibold">
                        İncele
                      </Button>
                    </Link>
                  </div>
                  <div className="hidden md:block ml-6">
                    <img
                      src="/images/illustration-4.png"
                      alt="SSS İllüstrasyonu"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Section */}
        <div className="py-4">
          {/* Navigation Links */}
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <Link href="/iletisim" className="hover:text-white transition-colors">
                İletişim
              </Link>
              <Link href="/work-permit" className="hover:text-white transition-colors">
                Belgeler
              </Link>
              <Link href="/work-permit" className="hover:text-white transition-colors">
                Mevzuat
              </Link>
              <span className="hover:text-white transition-colors cursor-pointer">ÇSGB</span>
            </div>
          </div>

          {/* Institution Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Building className="w-6 h-6 text-white/80" />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Globe className="w-6 h-6 text-white/80" />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Users className="w-6 h-6 text-white/80" />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <FileText className="w-6 h-6 text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
