/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  FileText,
  Users,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Building,
  GraduationCap,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
  UserCheck,
  Scale,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function WorkPermitGuide() {
  const [activeTab, setActiveTab] = useState("overview");

  const workPermitTypes = [
    {
      type: "Süreli-Bağımlı Çalışma İzni",
      description:
        "Belirli bir işverene bağlı olarak çalışmak için verilen, en çok bir yıla kadar geçerli izin",
      duration: "En çok 1 yıl",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      type: "Süresiz Çalışma İzni",
      description:
        "İşverene bağlı olmaksızın süresiz çalışma ve ikamet hakkı veren izin",
      duration: "Süresiz",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-green-100 text-green-800",
    },
    {
      type: "Bağımsız Çalışma İzni",
      description: "Kendi ad ve hesabına çalışma hakkı veren izin",
      duration: "Değişken",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const exemptionCategories = [
    {
      category: "Bilimsel ve Kültürel Faaliyetler",
      duration: "1 aya kadar",
      description:
        "Bilimsel, kültürel ve sanatsal faaliyetler kapsamında çalışacak yabancılar",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      category: "Eğitim ve Montaj",
      duration: "3 aya kadar",
      description: "Makine montajı, bakım, onarım ve eğitim amaçlı çalışmalar",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      category: "Sportif Faaliyetler",
      duration: "4 aya kadar",
      description: "Profesyonel sporcu, antrenör ve spor elemanları",
      icon: <Users className="w-5 h-5" />,
    },
    {
      category: "Mevsimlik Tarım",
      duration: "6 aya kadar",
      description:
        "Mevsimlik tarım ve hayvancılık işlerinde çalışacak yabancılar",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  const employerRequirements = [
    {
      title: "Türk Çalışan İstihdamı",
      requirement: "Her yabancıya karşılık en az 5 Türk vatandaşı",
      icon: <Users className="w-5 h-5" />,
      important: true,
    },
    {
      title: "Sermaye Şartı",
      requirement: "En az 100.000 TL sermaye",
      icon: <Building className="w-5 h-5" />,
      important: true,
    },
    {
      title: "Ücret Standardı",
      requirement: "Asgari ücretin altında ödeme yapılamaz",
      icon: <Scale className="w-5 h-5" />,
      important: false,
    },
    {
      title: "Sosyal Güvenlik",
      requirement: "SGK yükümlülüklerinin yerine getirilmesi",
      icon: <Shield className="w-5 h-5" />,
      important: true,
    },
  ];

  const prohibitedProfessions = [
    "Diş Tabipliği",
    "Eczacılık",
    "Veterinerlik",
    "Avukatlık",
    "Noterlik",
    "Özel Güvenlik",
    "Gümrük Müşavirliği",
    "Turist Rehberliği",
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Ön Hazırlık",
      description:
        "Gerekli belgelerin toplanması ve şartların kontrol edilmesi",
      details: [
        "Diploma ve denklik belgesi",
        "Pasaport",
        "İş sözleşmesi",
        "İkamet izni (yurt içi başvuru)",
      ],
    },
    {
      step: 2,
      title: "Online Başvuru",
      description: "e-Devlet sistemi üzerinden başvuru yapılması",
      details: [
        "Başvuru formunun doldurulması",
        "Belgelerin yüklenmesi",
        "Başvuru ücretinin ödenmesi",
      ],
    },
    
    {
      step: 3,
      title: "Değerlendirme",
      description: "Başvurunun uzman tarafından değerlendirilmesi",
      details: ["Belge kontrolü", "Şartların incelenmesi", "Karar verilmesi"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Yabancılar İçin Çalışma İzni
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Türkiye'de çalışmak isteyen yabancılar için kapsamlı rehber ve
              başvuru süreci
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Çalışma İzni Nedir?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Çalışma izni, Çalışma ve Sosyal Güvenlik Bakanlığınca
                      resmi bir belge şeklinde düzenlenen ve geçerlilik süresi
                      içinde yabancıya Türkiye'de çalışma ve ikamet hakkı veren
                      izindir.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      6735 sayılı Uluslararası İşgücü Kanunu'na göre verilen
                      çalışma izni veya çalışma izni muafiyeti, aynı zamanda
                      ikamet izni yerine de geçmektedir.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <p className="text-green-800 font-medium">
                        <strong>Önemli:</strong> Mülteci ya da ikincil koruma
                        statüsünde olanlar hariç olmak üzere, herhangi bir
                        nedenle ikamet iznine sahip olunması yabancıya çalışma
                        hakkı vermez. Mutlaka çalışma izni veya çalışma izni
                        muafiyeti alınması gerekir.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 bg-gray-200 ">
                <TabsTrigger className="cursor-pointer" value="overview">Genel Bakış</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="types">İzin Türleri</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="exemptions">Muafiyetler</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="application">Başvuru</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="responsibilities">
                  Sorumluluklar
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Çalışma İzni Avantajları</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Yasal olarak Türkiye'de çalışma hakkı
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            İkamet izni yerine geçer
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Sosyal güvenlik hakları
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Aile birleşimi imkanı
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <span>Yasaklı Meslekler</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {prohibitedProfessions.map((profession, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-red-50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-red-700">
                              {profession}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-700">
                          Bu meslekler sadece Türk vatandaşları tarafından icra
                          edilebilir.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="types" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Çalışma İzni Türleri
                    </h2>
                    <p className="text-gray-600">
                      Farklı ihtiyaçlara yönelik çalışma izni seçenekleri
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {workPermitTypes.map((permit, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                              {permit.icon}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg text-gray-900">
                                {permit.type}
                              </CardTitle>
                              <Badge className={permit.color}>
                                {permit.duration}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {permit.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="mt-8">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <HelpCircle className="w-5 h-5" />
                        <span>Hangi İzin Türünü Seçmeliyim?</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">
                            İlk Kez Başvuru Yapıyorsanız
                          </h4>
                          <p className="text-blue-700 text-sm">
                            Süreli-bağımlı çalışma izni ile başlamanız önerilir.
                            Bu izin türü ile deneyim kazandıktan sonra diğer
                            izin türlerine geçiş yapabilirsiniz.
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-green-900 mb-2">
                            Uzun Süreli İkamet Ediyorsanız
                          </h4>
                          <p className="text-green-700 text-sm">
                            8 yıl kanuni çalışma izni veya uzun dönem ikamet
                            izniniz varsa süresiz çalışma iznine
                            başvurabilirsiniz.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="exemptions" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Çalışma İzni Muafiyetleri
                    </h2>
                    <p className="text-gray-600">
                      Belirli durumlarda çalışma izni almadan çalışma imkanı
                    </p>
                  </div>

                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Info className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            Çalışma İzni Muafiyeti Nedir?
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Çalışma izni muafiyeti, Çalışma ve Sosyal Güvenlik
                            Bakanlığınca resmi bir belge şeklinde düzenlenen ve
                            geçerlilik süresi içinde yabancıya Türkiye'de
                            çalışma izni almaksızın çalışma ve ikamet hakkı
                            veren muafiyettir.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    {exemptionCategories.map((category, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                              {category.icon}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg text-gray-900">
                                {category.category}
                              </CardTitle>
                              <Badge variant="outline">
                                {category.duration}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {category.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="mt-8">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="w-5 h-5" />
                        <span>Sosyal Güvenlik Durumu</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <p className="text-orange-800 text-sm leading-relaxed">
                          <strong>Önemli:</strong> Çalışma izni muafiyeti
                          kapsamında olan yabancıların sosyal güvenlik
                          yükümlülüklerinden de muaf olacaklarına dair sosyal
                          güvenlik mevzuatında herhangi bir düzenleme
                          bulunmamaktadır. Genel kural olarak SGK yükümlülükleri
                          devam eder.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="application" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Başvuru Süreci
                    </h2>
                    <p className="text-gray-600">
                      Adım adım çalışma izni başvuru rehberi
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {applicationSteps.map((step, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 mb-4">
                                {step.description}
                              </p>
                              <div className="grid md:grid-cols-2 gap-2">
                                {step.details.map((detail, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center space-x-2"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                      {detail}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Globe className="w-5 h-5" />
                          <span>Yurt Dışından Başvuru</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                            • Türkiye Büyükelçiliği/Konsolosluğuna başvuru
                          </li>
                          <li>• Çalışma izni vizesi alınması</li>
                          <li>• İşverenin e-Devlet'ten başvuru yapması</li>
                          <li>• 15 iş günü içinde tamamlanması</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5" />
                          <span>Yurt İçinden Başvuru</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• En az 6 ay süreli ikamet izni gerekli</li>
                          <li>• Online başvuru sistemi kullanımı</li>
                          <li>• 6 iş günü içinde belge teslimi</li>
                          <li>• Yabancı kimlik numarası şartı</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="responsibilities" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Sorumluluklar ve Yükümlülükler
                    </h2>
                    <p className="text-gray-600">
                      İşveren ve çalışan sorumluluklarını öğrenin
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Building className="w-5 h-5" />
                          <span>İşveren Sorumlulukları</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {employerRequirements.map((req, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                {req.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">
                                  {req.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {req.requirement}
                                </p>
                                {req.important && (
                                  <Badge className="mt-1 bg-red-100 text-red-800">
                                    Zorunlu
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <UserCheck className="w-5 h-5" />
                          <span>Çalışan Sorumlulukları</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Belge Yükümlülükleri
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Çalışma iznini yanında bulundurma</li>
                              <li>• İzin süresinin takip edilmesi</li>
                              <li>• Adres değişikliklerinin bildirilmesi</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Çalışma Koşulları
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Sadece izin verilen işyerinde çalışma</li>
                              <li>• İş sözleşmesi şartlarına uyum</li>
                              <li>• Sosyal güvenlik primlerinin ödenmesi</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <span>Yaptırımlar ve Cezalar</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-red-900 mb-2">
                            Yabancı Çalışan İçin
                          </h4>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• İdari para cezası</li>
                            <li>• Sınır dışı edilme riski</li>
                            <li>• Gelecek başvurularda olumsuz etki</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-red-900 mb-2">
                            İşveren İçin
                          </h4>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• İdari para cezası</li>
                            <li>• İşyeri faaliyetten men</li>
                            <li>• Yeni başvuru yasakları</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-gray-600">En çok merak edilen konular</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Çalışma izni başvurusu ne kadar sürer?",
                  answer:
                    "Başvurular genellikle 30 gün içinde değerlendirilir. Belge eksikliği durumunda süre uzayabilir.",
                },
                {
                  question: "Çalışma izni ücreti ne kadar?",
                  answer:
                    "Ücretler izin türüne göre değişir. Güncel ücret tarifesi için Bakanlık web sitesini kontrol edin.",
                },
                {
                  question: "Çalışma izni reddedilirse ne yapmalıyım?",
                  answer:
                    "30 gün içinde itiraz edebilir, olumsuz sonuç durumunda 60 gün içinde İdare Mahkemesi'ne başvurabilirsiniz.",
                },
                {
                  question: "Aile üyelerim de çalışabilir mi?",
                  answer:
                    "Aile üyelerinin de ayrı çalışma izni alması gerekir. Aile birleşimi vizesi çalışma hakkı vermez.",
                },
              ].map((faq, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{faq.question}</DialogTitle>
                      <DialogDescription className="text-base leading-relaxed">
                        {faq.answer}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact and Support */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Destek ve İletişim
              </h2>
              <p className="text-gray-600">
                Sorularınız için bizimle iletişime geçin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Çağrı Merkezi
                  </h3>
                  <p className="text-gray-600 mb-2">7/24 Destek Hattı</p>
                  <p className="font-semibold text-green-600">ALO 170</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    E-posta Desteği
                  </h3>
                  <p className="text-gray-600 mb-2">Detaylı Sorular İçin</p>
                  <p className="font-semibold text-blue-600">
                    eizindestek@csgb.gov.tr
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Rehber ve Formlar
                  </h3>
                  <p className="text-gray-600 mb-2">İndirilebilir Belgeler</p>
                  <Button variant="outline" size="sm">
                    İndir
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FileText className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl font-bold mb-4">Başvurunuza Başlayın</h2>
            <p className="text-xl text-green-100 mb-8">
              Tüm bilgileri öğrendiniz, şimdi çalışma izni başvurunuzu
              başlatabilirsiniz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.alo170.gov.tr" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white py-3 w-[180px]"
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
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent py-3 w-[180px]"
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
