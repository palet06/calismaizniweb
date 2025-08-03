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
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  Code,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Heart,
  Home,
  Banknote,
} from "lucide-react";
import Link from "next/link";

const professions = [
  { id: 1, code: "2111.06", name: "Fizikçi" },
  { id: 2, code: "2113.03", name: "Kimyager" },
  { id: 3, code: "2114.03", name: "Jeomorfolog" },
  { id: 4, code: "2131.03", name: "Biyolog" },
  { id: 5, code: "2131.12", name: "Farmakolog" },
  { id: 6, code: "2131.18", name: "Genetik ve Biyoinformatik Uzmanı" },
  { id: 7, code: "2132.01", name: "Agronom (Tarım Bilimci)" },
  { id: 8, code: "2111.02", name: "Diğer Fizikçiler" },
  { id: 9, code: "2111.03", name: "Fizikçi (Elektrik ve Mıknatısiyet)" },
  { id: 10, code: "2111.04", name: "Fizikçi (Mekanik)" },
  { id: 11, code: "2111.05", name: "Fizikçi (Elektronik)" },
  { id: 12, code: "2111.07", name: "Fizikçi-Isı" },
  { id: 13, code: "2111.08", name: "Fizikçi-Işık" },
  { id: 14, code: "2111.09", name: "Fizikçi-Nükleer" },
  { id: 15, code: "2111.10", name: "Fizikçi-Ses" },
  { id: 16, code: "2111.11", name: "Radyasyon (Sağlık) Fizikçisi" },
  { id: 17, code: "2111.12", name: "Diğer Fizik Bilim Adamları" },
  { id: 18, code: "2113.01", name: "Diğer Kimyagerler" },
  { id: 19, code: "2113.02", name: "Kimyager-Fiziki" },
  { id: 20, code: "2113.04", name: "Kimyager-İnorganik" },
  { id: 21, code: "2113.05", name: "Kimyager-Organik" },
  { id: 22, code: "2113.06", name: "Kimyager-Tahlil" },
  { id: 23, code: "2113.07", name: "Kimyager (Yakıt)" },
  { id: 24, code: "2113.08", name: "Kimyager (Madeni Yağ)" },
  { id: 25, code: "2114.20", name: "Mineralog" },
  { id: 26, code: "2131.01", name: "Biyokimyager" },
  { id: 27, code: "2149.13", name: "Ağır Taşıma ve Kaldırma Denetmeni" },
  { id: 28, code: "2151.06", name: "Yenilenebilir Enerji Uzmanı" },
  { id: 29, code: "1213.25", name: "Proje Yöneticisi" },
  {
    id: 30,
    code: "1223.01",
    name: "Yönetici-Araştırma Ve Geliştirme Hizmetleri",
  },
  { id: 31, code: "1223.02", name: "ARGE Şefi" },
  { id: 32, code: "1223.03", name: "Kalite (Yönetim) Sistem Sorumlusu" },
  { id: 33, code: "1223.06", name: "Tasarım Müdürü" },
  { id: 34, code: "1223.07", name: "Teknoloji Transfer Uzmanı" },
  { id: 35, code: "1323.01", name: "Proje Müdürü" },
  { id: 36, code: "1330.03", name: "Yönetici (Bilgi İşlem)" },
  { id: 37, code: "1330.04", name: "Yazılım Müdürü" },
  { id: 38, code: "1330.06", name: "Yazılım Koordinatörü" },
  { id: 39, code: "1330.07", name: "Sistem Koordinatörü" },
  { id: 40, code: "2120.05", name: "Matematikçi" },
  { id: 41, code: "2120.09", name: "İstatistik ve Bilgisayar Bilimcisi" },
  { id: 42, code: "2120.10", name: "Bilgisayar Bilimcisi" },
  { id: 43, code: "2141.10", name: "Verimlilik Uzmanı" },
  { id: 44, code: "2141.14", name: "3D Üretim Uzmanı" },
  { id: 45, code: "2165.10", name: "Coğrafi Bilgi Sistemleri Uzmanı" },
  { id: 46, code: "2166.10", name: "Grafik Animasyoncu" },
  { id: 47, code: "2166.11", name: "Çoklu Ortam (Multimedya) Tasarımcısı" },
  { id: 48, code: "2166.16", name: "Üç Boyutlu Grafik Animasyoncu (3Ds Max)" },
  { id: 49, code: "2166.17", name: "Çizgi Film ve Animasyoncu" },
  { id: 50, code: "2166.18", name: "Artırılmış Gerçeklik Uzmanı" },
  { id: 51, code: "2511.01", name: "Sistem Analisti (BT)" },
  { id: 52, code: "2511.03", name: "Sistem Mimarı/Tasarımcısı" },
  { id: 53, code: "2511.04", name: "BT Çözümleri Uzmanı" },
  { id: 54, code: "2511.08", name: "Sistem Uzmanı/Danışmanı" },
  { id: 55, code: "2511.09", name: "BT İş Analisti" },
  { id: 56, code: "2511.11", name: "Uygulama Uzmanı/Danışmanı (Bilişim)" },
  { id: 57, code: "2512.04", name: "Yazılım Tasarımcısı" },
  { id: 58, code: "2512.05", name: "Yazılım Geliştiricisi" },
  { id: 59, code: "2513.03", name: "Animasyon Programcısı" },
  { id: 60, code: "2513.04", name: "Bilgisayar Oyunları Programcısı" },
  { id: 61, code: "2513.06", name: "Çoklu Ortam Programcısı" },
  { id: 62, code: "2514.04", name: "Mikrodenetleyici Programcısı" },
  { id: 63, code: "2514.06", name: "Mobil Yazılım Geliştirme Uzmanı" },
  { id: 64, code: "2514.07", name: "Bilişim Personeli" },
  { id: 65, code: "2514.08", name: "Oyun Geliştirme Uzmanı" },
  { id: 66, code: "2514.09", name: "Dijital Oyun Tasarımcısı" },
  { id: 67, code: "2519.01", name: "Mikroişlem Tasarımcısı" },
  { id: 68, code: "2519.02", name: "Sistem Değerlendirmecisi" },
  { id: 69, code: "2519.03", name: "Kalite Güvence Analisti (Bilgisayar)" },
  { id: 70, code: "2519.04", name: "Yazılım Test Edicisi" },
  { id: 71, code: "2519.05", name: "Sistem Test Edicisi" },
  { id: 72, code: "2519.06", name: "Uygulama Destek Uzmanı(Bilişim)" },
  { id: 73, code: "2519.07", name: "Donanım Geliştirme Uzmanı" },
  { id: 74, code: "2521.01", name: "Veri Tabanı Yöneticisi" },
  { id: 75, code: "2521.02", name: "Veri Tabanı Analisti" },
  { id: 76, code: "2521.04", name: "Veri Tabanı Mimarı" },
  { id: 77, code: "2521.05", name: "ETL Uzmanı/Danışmanı" },
  { id: 78, code: "2521.06", name: "Büyük Veri Uzmanı/Danışmanı" },
  { id: 79, code: "2521.07", name: "Veri Bilimci" },
  { id: 80, code: "2521.08", name: "İş Zekası Uzmanı/Danışmanı" },
  { id: 81, code: "2521.09", name: "Veri/Bilgi Yönetimi Danışmanı" },
  { id: 82, code: "2529.07", name: "Veri Madenciliği Uzmanı/Danışmanı" },
  { id: 83, code: "2529.09", name: "Siber Güvenlik Uzmanı" },
  { id: 84, code: "3511.03", name: "Bilişim Uzmanı" },
  { id: 85, code: "3513.07", name: "Bulut Bilişim Uzmanı" },
  { id: 86, code: "1120.44", name: "Yazılım Proje Yöneticisi" },
  { id: 87, code: "1213.24", name: "Proje Grup Başkanı" },
  { id: 88, code: "1330.05", name: "Bilgi Teknolojileri (BT) Müdürü" },
  { id: 89, code: "1349.11", name: "Teknik Müdür" },
  { id: 90, code: "2120.08", name: "Matematik-Bilgisayar Uzmanı" },
  { id: 91, code: "2144.24", name: "Uzay Bilimleri ve Teknolojileri Uzmanı" },
  { id: 92, code: "2163.33", name: "AR-GE Elemanı" },
  { id: 93, code: "2166.01", name: "Grafiker" },
  { id: 94, code: "2166.02", name: "Web Tasarımcısı" },
  { id: 95, code: "2356.02", name: "Bilgi Teknoloji Danışmanı" },
  { id: 96, code: "2423.03", name: "İş Analisti" },
  { id: 97, code: "2511.02", name: "Sistem Çözümleyici" },
  { id: 98, code: "2511.05", name: "Sistem Geliştirme Uzmanı (Banka)" },
  { id: 99, code: "2511.06", name: "Yönetim Bilişim Sistemleri Uzmanı" },
  { id: 100, code: "2511.10", name: "BT İş Analizi Elemanı" },
  { id: 101, code: "2511.12", name: "Blok Zinciri Analisti" },
  { id: 102, code: "2511.13", name: "Blok Zinciri Programcısı" },
  { id: 103, code: "2511.14", name: "Dijital Dönüşüm Personeli" },
  { id: 104, code: "2511.15", name: "Yapay Zeka Programcısı" },
  { id: 105, code: "2511.16", name: "Yapay Zeka Sistem Analisti" },
  { id: 106, code: "2511.17", name: "Bulut Bilişim Analisti" },
  { id: 107, code: "2512.03", name: "Program Analisti" },
  { id: 108, code: "2512.07", name: "Yazılım Geliştirme Teknisyeni" },
  { id: 109, code: "2513.01", name: "Web Tasarım Uzmanı (Bilgisayar)" },
  { id: 110, code: "2513.02", name: "Web Programcısı" },
  { id: 111, code: "2513.05", name: "İnternet Geliştiricisi" },
  {
    id: 112,
    code: "2513.07",
    name: "Web ve Çoklu Ortam Geliştiricisi ve Sorumlusu",
  },
  {
    id: 113,
    code: "2513.08",
    name: "Grafik ve Animasyon Tabanlı Web Sayfası Hazırlayıcısı",
  },
  { id: 114, code: "2514.01", name: "Bilgisayar Programcısı" },
  { id: 115, code: "2514.02", name: "Sistem Programcısı" },
  { id: 116, code: "2514.03", name: "Uygulama Programcısı" },
  { id: 117, code: "2514.05", name: "Bilgi İşlem Destek Uzmanı" },
  { id: 118, code: "2519.08", name: "Etik Hacker" },
  { id: 119, code: "2521.03", name: "Ağ Veri Tabanı Yöneticisi" },
  { id: 120, code: "2522.01", name: "Bilgisayar Ağı Yöneticisi" },
  { id: 121, code: "2522.02", name: "Bilgisayar Sistemleri Yöneticisi" },
  { id: 122, code: "2523.01", name: "Ağ Teknolojileri Uzmanı" },
  { id: 123, code: "2523.02", name: "İletişim Analisti (Bilgisayar)" },
  { id: 124, code: "2523.03", name: "Bilgisayar Ağı Analisti" },
  { id: 125, code: "2529.01", name: "Bilgi Güvenlik Denetmeni" },
  { id: 126, code: "2529.02", name: "Enformasyon Teknolojileri Uzmanı" },
  { id: 127, code: "2529.04", name: "Güvenlik Uzmanı (BİT)" },
  { id: 128, code: "2529.05", name: "Bilgi Güvenliği Uzmanı" },
  { id: 129, code: "2529.06", name: "İşletme Enformatiği Uzmanı" },
  { id: 130, code: "3511.09", name: "Sistem İşletmeni" },
  { id: 131, code: "3512.05", name: "Veri Tabanı Programcısı" },
  { id: 132, code: "3512.06", name: "Yazılım Destek Uzmanı" },
  { id: 133, code: "3512.10", name: "Yazılım ve Veri Tabanı Uzmanı" },
  { id: 134, code: "3512.15", name: "Yazılım Uygulama ve Destek Elemanı" },
  { id: 135, code: "3513.01", name: "Ağ İşletmeni / Ağ Teknolojileri Elemanı" },
  { id: 136, code: "3513.05", name: "Ağ İşletmeni (Bilişim Teknolojisi)" },
  { id: 137, code: "3513.06", name: "Sistem ve Ağ Uzmanı" },
  { id: 138, code: "3514.07", name: "Arama Motoru Optimizasyonu (SEO) Uzmanı" },
  { id: 139, code: "7422.07", name: "Bilgisayar Ağ Veri Tabanı Elemanı" },
  { id: 140, code: "7422.16", name: "Nesne Tabanlı Programlamacı" },
  { id: 141, code: "7422.27", name: "Mobil Programlama Elemanı" },
];

export default function TalentTransfer() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfessions = professions.filter((profession) =>
    profession.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const advantages = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Hızlı Süreç",
      description:
        "Başvuru süreciniz öncelikli olarak değerlendirilir ve hızlı sonuçlandırılır.",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Uluslararası Fırsatlar",
      description:
        "Türkiye'nin stratejik konumu ile küresel pazarlara erişim imkanı.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Kariyer Gelişimi",
      description: "Uzman kadronuzla birlikte kariyer hedeflerinize ulaşın.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Güvenli Ortam",
      description:
        "Güvenli ve istikrarlı çalışma ortamında kariyerinizi geliştirin.",
    },
  ];

  const benefits = [
    {
      icon: <Banknote className="h-6 w-6 text-green-600" />,
      title: "Rekabetçi Maaş",
      description: "Uluslararası standartlarda rekabetçi maaş paketleri",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Sağlık Güvencesi",
      description: "Kapsamlı sağlık sigortası ve sosyal güvenlik",
    },
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "İkamet Desteği",
      description: "İkamet izni ve barınma konularında destek",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Kariyer Gelişimi",
      description: "Sürekli eğitim ve kariyer gelişim fırsatları",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
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

      {/* Advantages Section */}
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

      {/* Program Details */}
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

      {/* Professions Table Section */}
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

            {/* Search Input */}
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

      {/* CTA Section */}
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

      {/* Additional Info Section */}
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
