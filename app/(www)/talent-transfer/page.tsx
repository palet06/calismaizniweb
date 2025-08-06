/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Globe,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Search,
  Code,
  Brain,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";
import { advantages, benefits, professions } from "@/lib/talentTransferData";

export default function TalentTransfer() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfessions = professions.filter((profession) =>
    profession.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Uluslararası Yetenek Transferi
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Türkiye'nin teknoloji ve inovasyon ekosisteminde yerinizi alın.
            Uzman kadronuzla birlikte geleceğin projelerinde yer alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ecalismaizni.csgb.gov.tr/eizin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 w-[180px]"
              >
                Başvuru Yap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.alo170.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent w-[180px]"
              >
                Detaylı Bilgi Al
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden Türkiye'yi Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Türkiye'nin sunduğu benzersiz avantajlarla kariyerinizi bir üst
              seviyeye taşıyın.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Detayları
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yetenek transferi programımızın sunduğu imkanları keşfedin.
            </p>
          </div>

          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="overview"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Target className="h-4 w-4" />
                Genel Bakış
              </TabsTrigger>
              <TabsTrigger
                value="process"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Zap className="h-4 w-4" />
                Başvuru Süreci
              </TabsTrigger>
              <TabsTrigger
                value="benefits"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Brain className="h-4 w-4" />
                Avantajlar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Program Hakkında
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Hedef Kitle
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Teknoloji uzmanları
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Ar-Ge personeli
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Proje yöneticileri
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Yazılım geliştiricileri
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Program Kapsamı
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Hızlı vize işlemleri
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          İş bulma desteği
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Oryantasyon programı
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Sürekli destek
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Başvuru",
                    desc: "Online başvuru formunu doldurun",
                  },
                  {
                    step: "2",
                    title: "Değerlendirme",
                    desc: "Dosyanız uzmanlar tarafından incelenir",
                  },
                  {
                    step: "3",
                    title: "Onay",
                    desc: "Uygun görülen başvurular onaylanır",
                  },
                  {
                    step: "4",
                    title: "Yerleştirme",
                    desc: "Uygun pozisyonlara yerleştirme yapılır",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="text-center border-0 bg-gradient-to-br from-white to-blue-50"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {item.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-white/80 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Başvuru Yapılabilecek Meslekler Listesi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Aşağıdaki meslekler için yetenek transferi programına başvuru
              yapabilirsiniz.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Meslek adı ile ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                />
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm w-full md:max-w-[40rem] mx-auto mt-0 pt-0 pb-0 mb-0 flex flex-col gap-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg  pt-0 mt-0 mb-0 pb-0">
              <CardTitle className="text-center p-3 mb-0">
                Meslek Listesi ({filteredProfessions.length} meslek)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-0 mt-0 mb-0 pb-0">
              <div className="max-h-96 overflow-y-auto mb-0 pb-0 mt-0  pt-0">
                <table className="w-full pt-0 mt-0 mb-0 pb-0">
                  <thead className="bg-gray-50 sticky top-0 mt-0 pt-0">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sıra No
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ISCO-08 Kodu
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Meslek Adı
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProfessions.map((profession, index) => (
                      <tr
                        key={profession.id}
                        className="hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {profession.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Badge variant="outline" className="font-mono">
                            {profession.code}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {profession.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredProfessions.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Aradığınız kriterlere uygun meslek bulunamadı.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Kariyerinizin Bir Sonraki Adımını Atın
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Türkiye'nin dinamik teknoloji ekosisteminde yerinizi alın. Uzman
              ekibimiz başvuru sürecinizde size rehberlik edecek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://ecalismaizni.csgb.gov.tr/eizin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 w-[180px]"
                >
                  Hemen Başvur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.alo170.gov.tr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent w-[180px]"
                >
                  Detaylı Bilgi Al
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Teknoloji Odaklı
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  En son teknolojilerle çalışma fırsatı ve sürekli gelişim
                  imkanı.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Küresel Ağ
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Uluslararası projeler ve küresel iş birliği fırsatları.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Kariyer Desteği
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Profesyonel gelişim ve kariyer planlama konularında tam
                  destek.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
