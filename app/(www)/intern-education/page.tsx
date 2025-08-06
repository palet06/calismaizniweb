/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  Info,
  Calendar,
  UserCheck,
  School,
} from "lucide-react";
import Link from "next/link";
import {
  advantages,
  applicationSteps,
  educationTypes,
  internshipLevels,
} from "@/lib/intern-education-data";

export default function InternEducation() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-orange-200/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Türkiye'de Eğitim Almak ve Staj Yapmak Hakkında
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Dünya sıralamalarında üst sıralarda yer alan üniversiteler ve
              kaliteli yaşam standartlarıyla Türkiye'de eğitim ve staj imkanları
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-200/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Neden Türkiye'de Eğitim ve Staj?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Dünya sıralamalarında üst sıralarda yer alan
                      üniversiteleri, farklı sektörlerde öncü konumda bulunan
                      sanayi dalları ve öğrencilere sağladığı kaliteli hayat
                      standartlarıyla Türkiye, pek çok yabancı öğrencinin staj
                      yapmak için tercih ettiği ülkeler arasında yer alıyor.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                      <p className="text-orange-800 font-medium">
                        <strong>Önemli:</strong> Türkiye'de staj yapmak isteyen
                        yabancı öğrenciler için iki farklı mevzuat
                        bulunmaktadır.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Türkiye'nin Avantajları
              </h2>
              <p className="text-gray-600">
                Neden binlerce öğrenci Türkiye'yi tercih ediyor?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Eğitim Türlerine Göre Staj İmkanları
              </h2>
              <p className="text-gray-600">
                Eğitim durumunuza göre staj başvuru süreciniz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {educationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${type.color}`}
                      >
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900">
                          {type.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {type.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">
                        Başvuru Süreci:
                      </p>
                      <p className="text-sm text-gray-600">{type.process}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Eğitim Seviyesine Göre Staj Koşulları
              </h2>
              <p className="text-gray-600">
                Her eğitim seviyesi için farklı koşullar ve imkanlar
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {internshipLevels.map((level, index) => (
                <Card
                  key={index}
                  className={`border-2 ${level.color} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        {level.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {level.level}
                        </CardTitle>
                        <div className="flex flex-col lg:flex-row  lg:items-center space-x-4 mt-2">
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {level.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {level.weeklyHours}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {level.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{req}</span>
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

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Detaylı Bilgiler
              </h2>
              <p className="text-gray-600">
                Staj süreciniz hakkında bilmeniz gereken her şey
              </p>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full  gap-1 grid-cols-2 lg:grid-cols-4">
                <TabsTrigger className="cursor-pointer" value="overview">
                  Genel Bakış
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="domestic">
                  Türkiye'deki Öğrenciler
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="international">
                  Yurtdışındaki Öğrenciler
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="process">
                  Başvuru Süreci
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center">
                          <School className="w-5 h-5 mr-2 text-blue-600" />
                          Türkiye'de Eğitim Gören Öğrenciler
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                            • Okulun zorunlu staj programı varsa ek izin
                            gerekmez
                          </li>
                          <li>
                            • Türk öğrencilerle aynı statüde değerlendirilir
                          </li>
                          <li>• Uygulamalı eğitim kapsamında staj yapabilir</li>
                          <li>• Gelir getiren iş kapsamına girmez</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-green-600" />
                          Yurtdışında Eğitim Gören Öğrenciler
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• 4817 sayılı kanunun 55. maddesi kapsamında</li>
                          <li>• Çalışma izni başvurusu zorunlu</li>
                          <li>• Sigortalı işçi statüsünde çalışır</li>
                          <li>• Maksimum 2 yıl süreyle staj yapabilir</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="domestic" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-900 mb-2">
                          Kimler Bu Kapsamda?
                        </h3>
                        <p className="text-blue-800 text-sm">
                          Türkiye'de eğitimlerini tamamlayan ve okulları staj
                          yapmayı zorunlu kılan yabancı uyruklu öğrenciler, Türk
                          öğrenciler ile aynı statüdedir.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3">Temel Şartlar:</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">
                                Staj dosyalarının eksiksiz tamamlanması
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">
                                Gerekli belgelerin hazırlanması
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">
                                Staj süresi boyunca tatbiki öğrenime katılım
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">
                                Okul onayı ve takibi
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="international" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-bold text-orange-900 mb-2">
                          Önemli Uyarı
                        </h3>
                        <p className="text-orange-800 text-sm">
                          Çalışma izni bulunmayan yabancı uyruklu öğrenciler
                          "kaçak işçi" kapsamına girer ve hem kişiye hem
                          işletmeye cezalar uygulanır.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3">
                          Staj Yapabilecek Öğrenciler:
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-blue-600">
                                1
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">
                                Eğitim Süresi ile Sınırlı Öğrenciler
                              </p>
                              <p className="text-sm text-gray-600">
                                Durumunu belgeleyen ve 2 yılı geçmeyen süreyle
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-blue-600">
                                2
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">
                                Kültürel Faaliyet Öğrencileri
                              </p>
                              <p className="text-sm text-gray-600">
                                Üniversiteler ve kamu kurumları aracılığıyla
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-blue-600">
                                3
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">
                                Uluslararası Stajyer Programları
                              </p>
                              <p className="text-sm text-gray-600">
                                İlgili bakanlıkların karşılıklı izni ile
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {applicationSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-6">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                              <Badge variant="outline">{step.duration}</Badge>
                            </div>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-yellow-400 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-900 mb-2">
                      Önemli Hatırlatmalar
                    </h3>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>
                        • Yüksek lisans ve doktora öğrencilerinin çalışma izni
                        süreleri ikamet sürelerine eklenir
                      </li>
                      <li>
                        • Çalışma izni olan öğrencilerin ayrıca ikamet izni
                        almasına gerek yoktur
                      </li>
                      <li>
                        • Çalışma izni süresi biten öğrenciler öğrenci ikameti
                        almalıdır
                      </li>
                      <li>
                        • Ön lisans ve lisans öğrencileri haftada maksimum 24
                        saat çalışabilir
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-orange-200/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-16 h-16 mx-auto  text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Türkiye'de Eğitim ve Staj Yolculuğunuza Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dünya standartlarında eğitim ve staj imkanları sizi bekliyor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent w-[180px]"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Başvuru Rehberi
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Başvuru Rehberi</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">
                        Türkiye'de Eğitim Gören Öğrenciler İçin:
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          1. Okulunuzun staj koordinatörü ile iletişime geçin
                        </li>
                        <li>2. Staj yapacağınız işletmeyi belirleyin</li>
                        <li>3. Gerekli staj belgelerini hazırlayın</li>
                        <li>4. Okul onayı alın ve staja başlayın</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">
                        Yurtdışında Eğitim Gören Öğrenciler İçin:
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          1. Çalışma ve Sosyal Güvenlik Bakanlığı'na başvuru
                          yapın
                        </li>
                        <li>
                          2. Gerekli belgeleri hazırlayın (eğitim belgesi,
                          pasaport vb.)
                        </li>
                        <li>3. Staj yapacağınız işletme ile anlaşma yapın</li>
                        <li>
                          4. Çalışma izni onaylandıktan sonra staja başlayın
                        </li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Link href="https://www.alo170.gov.tr" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent w-[180px]"
                >
                  <UserCheck className="w-5 h-5 mr-2" />
                  Uzman Desteği Al
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
