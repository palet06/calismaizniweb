/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Shield,
  Stethoscope,
  FileText,
  Building,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BookOpen,
  Gavel,
  Heart,
  Briefcase,
  GraduationCap,
  UserX,
  Lock,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function RestrictedProfessions() {
  const restrictedProfessions = [
    {
      title: "Avukatlık",
      description:
        "Türkiye Barolar Birliği Kanunu uyarınca sadece Türk vatandaşları avukatlık yapabilir",
      icon: <Scale className="w-6 h-6" />,
      category: "Hukuk",
      severity: "high",
      law: "Avukatlar Kanunu, 3'üncü madde",
    },
    {
      title: "Noterlik",
      description:
        "1512 sayılı Noterlik Kanunu uyarınca Türk vatandaşlığı zorunludur",
      icon: <FileText className="w-6 h-6" />,
      category: "Hukuk",
      severity: "high",
      law: "Noterlik Kanunu, 7'nci madde",
    },
    {
      title: "Eczacılık",
      description:
        "Türk tabiplik sistemine kayıtlı olma ve diploma denkliği şartları",
      icon: <Stethoscope className="w-6 h-6" />,
      category: "Sağlık",
      severity: "high",
      law: "Eczacılar ve Eczaneler Hakkında Kanun, 2'nci madde",
    },
    {
      title: "Diş Hekimliği",
      description:
        "Tababet ve Şuabatı Sanatlarının Tarzı İcrasına Dair Kanun kapsamında",
      icon: <Stethoscope className="w-6 h-6" />,
      category: "Sağlık",
      severity: "high",
      law: "Tababet ve Şuabatı Sanatlarının Tarzı İcrasına Dair Kanun, 30'uncu madde",
    },
    {
      title: "Veteriner Hekimlik",
      description: "Görev ve yetkiler Türk veteriner hekimlerine aittir",
      icon: <Heart className="w-6 h-6" />,
      category: "Sağlık",
      severity: "high",
      law: "Veteriner Hekimliği Mesleğinin İcrasına Dair Kanun, 2'nci madde",
    },
    {
      title: "Gümrük Müşavirliği",
      description: "Gümrük işlemlerinde danışmanlık ve temsil hizmetleri",
      icon: <Building className="w-6 h-6" />,
      category: "Ticaret",
      severity: "high",
      law: "Gümrük Kanunu, 227'nci madde",
    },
    {
      title: "Özel Güvenlik Personeli",
      description: "Silahlı görevlerde özel güvenlik hizmetleri",
      icon: <Shield className="w-6 h-6" />,
      category: "Güvenlik",
      severity: "high",
      law: "Özel Güvenlik Hizmetlerine Dair Kanun, 5'inci madde",
    },
    {
      title: "Hakim ve Savcı",
      description: "Yargı organlarında görev yapma yetkisi",
      icon: <Gavel className="w-6 h-6" />,
      category: "Hukuk",
      severity: "high",
      law: "Hakimler ve Savcılar Kanunu, 7'nci madde",
    },
  ];

  const allowedSectors = [
    {
      title: "Turizm Sektörü",
      description: "Otel, restoran ve turizm işletmelerinde çalışma imkanı",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Mühendislik Alanları",
      description: "Diploma denkliği olan mühendislik dallarında çalışma",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Dış Ticaret",
      description: "İhracat-ithalat firmalarında uzman pozisyonlarda",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Dil Öğretmenliği",
      description: "Özel kurumlarda yabancı dil öğretmenliği",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <XCircle className="w-4 h-4" />;
      case "medium":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <UserX className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Türk Vatandaşlarına Hasredilen Meslekler
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Yabancı uyruklu bireylerin çalışması yasaklanan meslekler ve yasal
              dayanakları
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Yabancılar İçin Yasak Olan Meslekler
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Türkiye'de yabancı uyruklu bireylerin çalışabileceği
                      meslekler belirli yasal düzenlemelerle
                      sınırlandırılmıştır. Her ne kadar çalışma izni sistemi
                      sayesinde pek çok sektörde istihdam sağlanabilse de, bazı
                      meslekler sadece Türk vatandaşlarına aittir ve
                      yabancıların bu alanlarda çalışması yasaklanmıştır.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Bu sınırlama; kamu güvenliği, kamu sağlığı ve ulusal
                      çıkarlar gerekçesiyle uygulanmaktadır. Ayrıca, belirli
                      mesleklerin denetimi ve sorumluluğu da bu tercihlerin
                      arkasındaki sebepler arasındadır.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-red-800 font-medium">
                        <strong>Önemli:</strong> Bu yasaklar, 4817 sayılı
                        "Yabancıların Çalışma İzinleri Hakkında Kanun" ve bağlı
                        yönetmelikler ile belirlenmektedir.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Basis */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Yasak Mesleklerin Yasal Dayanağı
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Bu yasaklar, Çalışma ve Sosyal Güvenlik Bakanlığı
                      tarafından 4817 sayılı "Yabancıların Çalışma İzinleri
                      Hakkında Kanun" ve bağlı yönetmelikler ile
                      belirlenmektedir. Ayrıca bazı meslekler için ilgili meslek
                      odalarının kendi mevzuatlarında da Türk vatandaşlığı şartı
                      aranabilir.
                    </p>
                    <div className="flex items-center space-x-2 text-orange-700">
                      <Eye className="w-5 h-5" />
                      <span className="font-medium">
                        Kamu güvenliği ve ulusal çıkarlar önceliklidir!
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restricted Professions Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Yasak Meslekler
              </h2>
              <p className="text-gray-600">
                Yabancıların çalışamayacağı temel meslekler
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {restrictedProfessions.map((profession, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                          {profession.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900 mb-2">
                            {profession.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {profession.category}
                            </Badge>
                            <Badge
                              className={`text-xs ${getSeverityColor(
                                profession.severity
                              )}`}
                            >
                              <div className="flex items-center space-x-1">
                                {getSeverityIcon(profession.severity)}
                                <span>Yasak</span>
                              </div>
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {profession.description}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">
                        <strong>Yasal Dayanak:</strong> {profession.law}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allowed Sectors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hangi Alanlarda Yabancılar Serbestçe Çalışabilir?
              </h2>
              <p className="text-gray-600">
                Çalışma izni alarak faaliyet gösterilebilecek sektörler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allowedSectors.map((sector, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-green-600">{sector.icon}</div>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {sector.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employer Warning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      İşverenler Ne Yapmalı?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Yabancı bir personeli istihdam etmeden önce, mesleğin
                      yasal olarak yabancılara açık olup olmadığı mutlaka
                      kontrol edilmelidir. Yasak mesleklerde yabancı
                      çalıştırmanın cezası, idari para cezası ve iş yeri kısmi
                      faaliyetten men gibi yaptırımlarla sonuçlanabilir.
                    </p>
                    <div className="bg-yellow-100 p-4 rounded-lg">
                      <p className="text-yellow-800 font-medium">
                        <strong>Uyarı:</strong> Yasal olmayan istihdam ciddi
                        yaptırımlarla karşılaşabilir!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Status 2025 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg p-0">
              <CardHeader className="rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="flex items-center space-x-3 p-1">
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl">
                      2025 Yılı İtibariyle Güncel Durum
                    </CardTitle>
                    <p className="text-blue-100">
                      Mevcut yasal düzenlemeler ve istisnalar
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Güncel mevzuata göre yukarıda sayılan meslekler hala
                  yabancılara kapalıdır. Ancak uluslararası işbirlikleri ve
                  serbest bölge uygulamalarında, istisnai durumlar meydana
                  gelebilmektedir.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bu istisnalar kişisel durumlara göre değerlendirilmelidir ve
                  mutlaka ilgili kurumlardan güncel bilgi alınması
                  gerekmektedir.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <strong>Not:</strong> Kamu kurum ve kuruluşlarında memuriyet
                    ya da kamu hizmeti kapsamındaki kadrolar da yabancılara
                    kapalıdır.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Legal List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kanunlarla Türk Vatandaşlarına Hasredilen Meslek ve Görevler
              </h2>
              <p className="text-gray-600">
                Detaylı yasal liste ve ilgili mevzuat
              </p>
            </div>

            <Card className="shadow-lg p-0">
              <CardContent className="p-0 ">
                <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
                  <table className="w-full">
                    <thead className="bg-red-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          No
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Meslek/Görev
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Yasal Dayanak
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        {
                          no: "1",
                          profession:
                            "Özel Güvenlik Şirketleri İçin Kurucu, Yönetici, Eğitici ile Şirket Tüzel Kişi Ortağının Yetkilendirdiği Temsilciler",
                          law: "Özel Güvenlik Hizmetlerine Dair Kanun, 5'inci madde",
                        },
                        {
                          no: "2",
                          profession: "Özel Güvenlik Görevlileri",
                          law: "Özel Güvenlik Hizmetlerine Dair Kanun, 10'uncu madde",
                        },
                        {
                          no: "3",
                          profession: "Çarşı ve Mahalle Bekçiliği",
                          law: "Çarşı ve Mahalle Bekçileri Hakkında Kanun, 3'üncü madde",
                        },
                        {
                          no: "4",
                          profession: "Mali Müşavirlik",
                          law: "Serbest Muhasebeci Mali Müşavirlik ve Yeminli Mali Müşavirlik Kanunu, 4'üncü madde",
                        },
                        {
                          no: "5",
                          profession: "Kooperatif Yönetim Kurulu Üyeleri",
                          law: "Kooperatifler Kanunu, 56'ncı madde",
                        },
                        {
                          no: "6",
                          profession: "Gümrük Müşavir Yardımcısı",
                          law: "Gümrük Kanunu, 227'nci madde",
                        },
                        {
                          no: "7",
                          profession:
                            "Türkçeden Başka Dille Öğretim Yapan ve Yabancılar Tarafından Açılmış Bulunan Okulların Kurucuları",
                          law: "Özel Öğretim Kanunu, 8'inci madde",
                        },
                        {
                          no: "8",
                          profession: "Özel Hastanelerde Mesul Müdür",
                          law: "Hususi Hastaneler Kanunu, 9'uncu madde",
                        },
                        {
                          no: "9",
                          profession: "Diş Hekimliği",
                          law: "Tababet ve Şuabatı Sanatlarının Tarzı İcrasına Dair Kanun, 30'uncu madde",
                        },
                        {
                          no: "10",
                          profession: "Hastabakıcı",
                          law: "Tababet ve Şuabatı Sanatlarının Tarzı İcrasına Dair Kanun, 63'üncü madde",
                        },
                        {
                          no: "11",
                          profession: "Eczacılık",
                          law: "Eczacılar ve Eczaneler Hakkında Kanun, 2'nci madde",
                        },
                        {
                          no: "12",
                          profession: "Veterinerlik",
                          law: "Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun, 2'nci madde",
                        },
                        {
                          no: "13",
                          profession:
                            "Uzmanlık Eğitimi Dışında Çalışacak Yabancı Asistanlar",
                          law: "Tıpta Uzmanlık Tüzüğü, 20'nci madde",
                        },
                        {
                          no: "14",
                          profession: "Noter",
                          law: "Noterlik Kanunu, 7'nci madde",
                        },
                        {
                          no: "15",
                          profession: "Hakim ve Savcı",
                          law: "Hakimler ve Savcılar Kanunu, 7'nci madde",
                        },
                        {
                          no: "16",
                          profession: "Avukat",
                          law: "Avukatlar Kanunu, 3'üncü madde",
                        },
                        {
                          no: "17",
                          profession: "Arabulucu",
                          law: "Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu, 20'nci madde",
                        },
                        {
                          no: "18",
                          profession: "Konkordato Komiseri",
                          law: "Konkordato Komiserliği ve Alacaklılar Kuruluna Dair Yönetmeliği, 4'üncü madde",
                        },
                        {
                          no: "19",
                          profession: "Stajyer Havacılık Bilgi Yönetimi Memuru",
                          law: "Havacılık Bilgi Yönetimi Personeli Lisans ve Derecelendirme Yönetmeliği, 16'ncı madde",
                        },
                        {
                          no: "20",
                          profession: "Fahri Trafik Müfettişi",
                          law: "Karayolları Trafik Kanun, Ek 6'ncı madde",
                        },
                        {
                          no: "21",
                          profession: "Taşıma İşleri Organizatörlüğü",
                          law: "Taşıma İşleri Organizatörlüğü Yönetmeliği, 7'nci madde",
                        },
                        {
                          no: "22",
                          profession:
                            "Acente Sorumlusu, Seyahat Acentesi Sorumlusu",
                          law: "Seyahat Acenteleri ve Seyahat Acenteleri Birliği Kanunu, 3'üncü madde",
                        },
                        {
                          no: "23",
                          profession: "Turist Rehberi",
                          law: "Turist Rehberliği Meslek Kanunu, 3'üncü madde",
                        },
                        {
                          no: "24",
                          profession:
                            "Kara Suları Dahilinde Balık, İstiridye, Midye, Sünger, İnci, Mercan İhracı, Dalıcılık, Arayıcılık, Kılavuzluk, Kaptanlık, Çarkçılık, Katiplik, Tayfaklık vb.",
                          law: "Kabotaj Kanunu, 3'üncü madde",
                        },
                        {
                          no: "25",
                          profession: "Spor Müşavirleri",
                          law: "Gençlik ve Spor Genel Müdürlüğü Spor Müşavirleri Atanma ve Çalıştırma Yönetmeliği, 5'inci madde",
                        },
                        {
                          no: "26",
                          profession: "Tarım Alanında İş Aracısı",
                          law: "Tarımda İş Aracılığı Yönetmeliği, 6'ncı madde",
                        },
                        {
                          no: "27",
                          profession:
                            "Gemi Acente Yetkilisi ve Gemi Acente Personeli",
                          law: "Gemi Acenteleri Yönetmeliği, 7 ve 8'inci madde",
                        },
                        {
                          no: "28",
                          profession: "Daimi Nezaretçi, Teknik Eleman",
                          law: "Maden Yönetmeliği, 125 ve 130'uncu madde",
                        },
                        {
                          no: "29",
                          profession:
                            "Sağlık Meslek Hizmet Birimi Sorumlusu-Ruhsat Sahibi",
                          law: "Sağlık Meslek Mensuplarının Serbest Meslek İcrası Hakkında Yönetmelik, 5'inci madde",
                        },
                      ].map((item, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {item.no}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.profession}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {item.law}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Önemli Uyarı</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Yukarıda listelenen tüm meslek ve görevler, ilgili kanunlar
                    gereğince yalnızca Türk vatandaşları tarafından icra
                    edilebilir. Bu mesleklerde yabancı personel çalıştırmak
                    yasal değildir ve ciddi yaptırımlarla karşılaşılabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[850px] mx-auto ">
            <Shield className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h2 className="text-3xl font-bold mb-4">
              Yasal Uyumluluğu Sağlayın
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Yabancı personel istihdamında yasal gereklilikleri öğrenin ve
              uygun sektörlerde çalışma izni alın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.alo170.gov.tr" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent w-[180px]"
                >
                  ALO 170 Destek
                </Button>
              </Link>

              <Link
                href="https://ecalismaizni.csgb.gov.tr/eizin"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent w-[180px]"
                >
                  İzin Başvurusu Yap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
