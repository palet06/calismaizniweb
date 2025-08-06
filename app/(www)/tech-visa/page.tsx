/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Rocket,
  Users,
  Building2,
  MapPin,
  Star,
  Globe,
  Target,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { startupAdvantages, talentAdvantages } from "@/lib/techVisaData";

export default function TechVisa() {
  const [activeTab, setActiveTab] = useState("startups");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Rocket className="w-4 h-4 mr-2" />
              Tech Visa Programı
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Teknoloji Girişimleri ve
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                TECHVISA
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Türkiye'nin teknoloji ekosisteminde yer alın. Startuplar ve
              yetenekler için özel avantajlar, hızlı vize süreçleri ve kapsamlı
              desteklerle geleceğinizi şekillendirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.turkiyetechvisa.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 w-[180px]"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Başvuru Yap
                </Button>
              </Link>

              <Link
                href="https://www.turkiyetechvisa.gov.tr/tr/#about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent w-[180px]"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Daha Fazla Bilgi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-500 mr-3" />
              <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
                En İyi Başlangıç Yeri
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              İstanbul: Startuplar İçin En İyi Başlangıç Yeri
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              İstanbul, Startup Genome tarafından yayımlanan "Küresel Girişim
              Ekosistemi Raporu 2023" raporunda startuplar için en iyi başlangıç
              yeri olarak ilan edildi. Genç ve teknolojiye yatkın bir nüfusa ve
              stratejik bir konuma sahip olan İstanbul, bir sonraki büyük
              startup destinasyonu olmaya hazır durumda.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    100.000
                  </h3>
                  <p className="text-gray-600">
                    2030'a kadar teknoloji startup'ına ev sahipliği
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    100 Unicorn
                  </h3>
                  <p className="text-gray-600">"Turcorn" elde etme hedefi</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4 ">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="max-w-6xl mx-auto "
          >
            <TabsList className="grid w-full grid-cols-2 mb-12 h-auto ">
              <TabsTrigger
                value="startups"
                className="text-lg py-4 cursor-pointer"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Startuplar İçin
              </TabsTrigger>
              <TabsTrigger
                value="talents"
                className="text-lg py-4 cursor-pointer"
              >
                <Users className="w-5 h-5 mr-2" />
                Yetenekler İçin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="startups">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Startuplar İçin Avantajlar
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tech Visa programı ile startup'ınızı Türkiye'de büyütün.
                  Kapsamlı destekler ve özel avantajlarla girişiminizi bir üst
                  seviyeye taşıyın.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {startupAdvantages.map((advantage, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                          {advantage.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {advantage.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full justify-between">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {advantage.description}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 bg-transparent"
                          >
                            Detayları Gör
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3">
                              {advantage.icon}
                              <span>{advantage.title}</span>
                            </DialogTitle>
                            <DialogDescription className="text-base leading-relaxed pt-4">
                              {advantage.details}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="talents">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Yetenekler İçin Avantajlar
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Teknoloji alanındaki yetenekler için özel avantajlar.
                  Türkiye'de kariyer yapmanın en kolay yolu Tech Visa ile
                  başlıyor.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {talentAdvantages.map((advantage, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                  >
                    <CardHeader className="pb-4">
                      <div className="text-center">
                        <div className="p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors inline-block mb-4">
                          {advantage.icon}
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {advantage.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center flex flex-col h-full justify-between">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {advantage.description}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:bg-blue-50 group-hover:border-blue-300 bg-transparent"
                          >
                            Detayları Gör
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3">
                              {advantage.icon}
                              <span>{advantage.title}</span>
                            </DialogTitle>
                            <DialogDescription className="text-base leading-relaxed pt-4">
                              {advantage.details}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Tech Visa ile Geleceğinizi Şekillendirin
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Türkiye'nin dinamik teknoloji ekosisteminde yer alın.
              Startup'ınızı büyütün veya kariyerinizi bir üst seviyeye taşıyın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.turkiyetechvisa.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 w-[200px]"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Başvuru Yap
                </Button>
              </Link>
              <Link
                href="https://www.turkiyetechvisa.gov.tr/tr/danismanlik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent w-[200px]"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Danışmanlık Hizmetleri
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Kapsamlı Destek Sistemi
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              TÜBİTAK ve KOSGEB gibi devlet kurumları geniş kapsamlı hibe
              sağlıyor. İstanbul'un serbest ticaret bölgeleri, teknoparkları ve
              TÜBİTAK BIGG gibi programlar güçlü destek sunuyor.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    TÜBİTAK Destekleri
                  </h3>
                  <p className="text-gray-600">
                    Ar-Ge ve inovasyon projeleri için kapsamlı hibe programları
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-green-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    KOSGEB Programları
                  </h3>
                  <p className="text-gray-600">
                    KOBİ'ler için finansman ve danışmanlık destekleri
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Teknopark Avantajları
                  </h3>
                  <p className="text-gray-600">
                    100'e yakın teknoparkta ofis imkanı ve vergi avantajları
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
