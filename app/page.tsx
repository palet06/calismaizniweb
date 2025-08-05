/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ExternalLink,
  FileText,
  Info,
  Users,
  Building,
  Globe,
  ChevronDown,
  Calendar,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Clock,
  Briefcase,
  GraduationCap,
  Cpu,
  ArrowLeftRight,
  Building2,
  ListChecks,
  MessageCircleQuestionMark,
} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

type ViewState = "home" | "permit-types" | "permit-details";
type PermitType = "sureli-bagli" | "suresiz" | "bagimsiz" | "muafiyet";

export default function LandingPage() {
  const [currentView, setCurrentView] = useState<ViewState>("home");
  const [selectedPermitType, setSelectedPermitType] =
    useState<PermitType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const workPermitTypes = [
    {
      id: "sureli-bagli" as PermitType,
      title: "Süreli-Bağımlı Çalışma İzni",
      description:
        "Belirli bir işverene bağlı olarak çalışmak için verilen, en çok bir yıla kadar geçerli izin",
      duration: "En çok 1 yıl",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:border-blue-300",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      id: "suresiz" as PermitType,
      title: "Süresiz Çalışma İzni",
      description:
        "İşverene bağlı olmaksızın süresiz çalışma ve ikamet hakkı veren izin",
      duration: "Süresiz",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:border-green-300",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      id: "bagimsiz" as PermitType,
      title: "Bağımsız Çalışma İzni",
      description: "Kendi ad ve hesabına çalışma hakkı veren izin",
      duration: "Değişken",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:border-purple-300",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      id: "muafiyet" as PermitType,
      title: "Çalışma İzni Muafiyeti",
      description: "Belirli durumlarda çalışma izni almadan çalışma imkanı",
      duration: "1-6 ay arası",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:border-orange-300",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const permitDetails = {
    "sureli-bagli": {
      title: "Süreli-Bağımlı Çalışma İzni",
      attention: [
        "Sadece belirtilen işverene bağlı olarak çalışabilirsiniz",
        "İzin süresi en fazla 1 yıldır",
        "İşveren değişikliği için yeni başvuru gereklidir",
        "İkamet izni yerine geçer",
      ],
      requirements: [
        "Geçerli pasaport",
        "İş sözleşmesi veya iş teklifi",
        "Diploma ve denklik belgesi",
        "Sağlık raporu",
        "Sabıka kaydı belgesi",
      ],
      documents: [
        "Başvuru formu (online doldurulacak)",
        "Pasaport fotokopisi",
        "İş sözleşmesi",
        "Diploma ve apostil/konsolosluk tasdiki",
        "Sağlık raporu (son 3 ay içinde alınmış)",
        "Sabıka kaydı (son 6 ay içinde alınmış)",
      ],
    },
    suresiz: {
      title: "Süresiz Çalışma İzni",
      attention: [
        "8 yıl kanuni çalışma izni veya uzun dönem ikamet izni gerekli",
        "İşverene bağlı olmaksızın çalışabilirsiniz",
        "Türkiye'de süresiz ikamet hakkı verir",
        "Aile birleşimi için avantaj sağlar",
      ],
      requirements: [
        "8 yıl kesintisiz çalışma izni",
        "Türkçe dil yeterliliği (B1 seviyesi)",
        "Sosyal güvenlik prim ödemeleri",
        "Vergi yükümlülüklerinin yerine getirilmesi",
      ],
      documents: [
        "Başvuru formu",
        "Pasaport fotokopisi",
        "Önceki çalışma izinleri",
        "SGK hizmet dökümü",
        "Vergi levhası",
        "Türkçe dil belgesi",
      ],
    },
    bagimsiz: {
      title: "Bağımsız Çalışma İzni",
      attention: [
        "Kendi işinizi kurabilir veya serbest çalışabilirsiniz",
        "Minimum sermaye şartı vardır",
        "Vergi mükellefi olmanız gerekir",
        "İş planı sunmanız gerekebilir",
      ],
      requirements: [
        "Minimum 5 yıl çalışma izni",
        "Yeterli finansal kaynak",
        "İş planı (gerekirse)",
        "Mesleki yeterlilik belgesi",
      ],
      documents: [
        "Başvuru formu",
        "Pasaport fotokopisi",
        "Önceki çalışma izinleri",
        "Banka hesap özeti",
        "İş planı",
        "Mesleki yeterlilik belgeleri",
      ],
    },
    muafiyet: {
      title: "Çalışma İzni Muafiyeti",
      attention: [
        "Geçici süreli çalışma için verilir",
        "Belirli meslek grupları için geçerlidir",
        "Süre uzatımı sınırlıdır",
        "SGK yükümlülükleri devam eder",
      ],
      requirements: [
        "Muafiyet kapsamındaki meslek",
        "Geçici çalışma belgesi",
        "İşveren talebi",
        "Sınırlı süre (1-6 ay)",
      ],
      documents: [
        "Muafiyet başvuru formu",
        "Pasaport fotokopisi",
        "İşveren talebi",
        "Mesleki yeterlilik belgesi",
        "Çalışma süresi belgesi",
      ],
    },
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [currentView]);

  const handleViewChange = (newView: ViewState, permitType?: PermitType) => {
    if (containerRef.current) {
      gsap.to(containerRef.current.children, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          setCurrentView(newView);
          if (permitType) {
            setSelectedPermitType(permitType);
          }
        },
      });
    }
  };

  const renderHomeView = () => (
    <>
      {/* Main Cards Grid */}
      <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
        {/* Left Side - Large Çalışma İzni Card */}
        <div className="col-span-12 lg:col-span-6">
          <Card className="bg-gradient-to-br from-purple-500 to-purple-700 border-0 text-white h-full shadow-xl hover:shadow-2xl hover:scale-[102%]  transition-all duration-300">
            <CardContent className="p-3 sm:p-4 md:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex w-full justify-between">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    ÇALIŞMA İZNİ
                  </h2>
                  <ListChecks />
                </div>

                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Türkiye'de yatırım planlıyorsanız
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Ya da bir mesleğiniz varsa
                    </span>
                  </div>
                 
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Başvurunuzu online olarak hızlıca tamamlayabilirsiniz
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Evrak süreçlerini dijital ortamda yönetebilir
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Gerekli belgeleri sisteme kolayca yükleyebilirsiniz.
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Süreci adım adım takip ederek, başvurunuzun durumunu anlık olarak görüntüleyebilirsiniz
                    </span>
                  </div>
                  
                   <div className="flex items-start space-x-2">
                    <span className="text-purple-200 mt-1 text-xs sm:text-sm">
                      →
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      Çalışma izni almak <b>e-İzin Çalışma İzni Başvuru Sistemi</b> ile çok kolay
                    </span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 py-2 text-sm sm:text-base font-semibold"
                onClick={() => handleViewChange("permit-types")}
              >
                e-İzin Başvurusu
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - 4 Small Cards */}
        <div className="col-span-12 lg:col-span-6 shrink">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-full">
            {/* Bilgi Al */}
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-white shadow-lg hover:shadow-xl hover:scale-[102%] transition-all duration-300">
              <CardContent className="p-2 sm:p-3 md:p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex w-full justify-between">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2">
                      BİLGİ AL
                    </h3>
                    <Building2 />
                  </div>
                  <p className="text-orange-100 text-sm mb-2 sm:mb-3">
                    Türkiye'de çalışmak isteyen yabancıların çalışma izni ile
                    ilgili bilgi sahibi olması gereken pek çok detay hakkında
                    bilgi sahibi olmak için web sitemizi ziyaret edin.
                  </p>
                </div>

                <Link href="/home">
                  <Button
                    size="sm"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  >
                    Git
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* TECHVISA */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 text-white shadow-lg hover:shadow-xl hover:scale-[102%]  transition-all duration-300">
              <CardContent className="p-2 sm:p-3 md:p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex w-full justify-between">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2">
                      TECHVISA
                    </h3>
                    <Cpu />
                  </div>
                  <p className="text-red-100 text-sm mb-2 sm:mb-3">
                    Türkiye'nin teknoloji ekosisteminde yer alın. Startuplar ve
                    yetenekler için özel avantajlar, hızlı vize süreçleri ve
                    kapsamlı desteklerle geleceğinizi şekillendirin.
                  </p>
                </div>

                <Link href="/tech-visa" target="_self">
                  <Button
                    size="sm"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  >
                    İncele
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Yetenk Transferi */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white shadow-lg hover:shadow-xl hover:scale-[102%]  transition-all duration-300">
              <CardContent className="p-2 sm:p-3 md:p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex w-full justify-between">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2">
                      YETENEK TRANSFERİ
                    </h3>
                    <ArrowLeftRight />
                  </div>
                  <p className="text-blue-100 text-sm mb-2 sm:mb-3">
                    Türkiye'nin teknoloji ve inovasyon ekosisteminde yerinizi
                    alın. Uzman kadronuzla birlikte geleceğin projelerinde yer
                    alın.
                  </p>
                </div>

                <Link href="/talent-transfer" target="_self">
                  <Button
                    size="sm"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  >
                    İncele
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Eğitim/Staj */}
            <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 text-white shadow-lg hover:shadow-xl hover:scale-[102%]  transition-all duration-300">
              <CardContent className="p-2 sm:p-3 md:p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex w-full justify-between">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                      EĞİTİM / STAJ
                    </h3>
                    <GraduationCap />
                  </div>

                  <p className="text-red-100 text-sm mb-2 sm:mb-3">
                    Dünya sıralamalarında üst sıralarda yer alan üniversiteler
                    ve kaliteli yaşam standartlarıyla Türkiye'de eğitim ve staj
                    imkanları
                  </p>
                </div>

                <Link href="/intern-education" target="_self">
                  <Button
                    size="sm"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
                  >
                    İncele
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Large Card - Sıkça Sorulan Sorular */}
      <div className="mb-3 sm:mb-4 md:mb-6">
        <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0 text-gray-800 shadow-xl hover:shadow-2xl hover:scale-[102%] transition-all duration-300">
          <CardContent className="p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex w-full justify-between">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">
                    Sıkça Sorulan Sorular
                  </h2>
                  <MessageCircleQuestionMark className="size-10" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                  Sizlere her konuda yardımcı olmak isteriz
                </p>
                <Link href="/faq">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold w-full sm:w-auto">
                    İncele
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderPermitTypesView = () => (
    <>
      {/* Back Button */}
      <div className="mb-4">
        <Button
          variant="outline"
          className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          onClick={() => handleViewChange("home")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Ana Sayfaya Dön
        </Button>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Çalışma İzni Türünü Seçin
        </h2>
        <p className="text-white/80">
          Durumunuza en uygun izin türünü seçerek başvuru sürecine başlayın
        </p>
      </div>

      {/* Permit Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {workPermitTypes.map((permit) => (
          <Card
            key={permit.id}
            className={`bg-gradient-to-br ${permit.color} border-0 text-white shadow-xl hover:shadow-2xl  hover:scale-[102%] ${permit.hoverColor} transition-all duration-300 cursor-pointer`}
            onClick={() => handleViewChange("permit-details", permit.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {permit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{permit.title}</h3>
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                    {permit.duration}
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {permit.description}
              </p>
              <div className="flex items-center text-white/80 text-sm">
                <span>Detayları görüntüle</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );

  const renderPermitDetailsView = () => {
    if (!selectedPermitType) return null;

    const details = permitDetails[selectedPermitType];
    const permitType = workPermitTypes.find((p) => p.id === selectedPermitType);

    return (
      <>
        {/* Back Button */}
        <div className="mb-4">
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => handleViewChange("permit-types")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            İzin Türlerine Dön
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {details.title}
          </h2>
          <p className="text-white/80">
            Başvuru öncesi dikkat edilmesi gereken önemli bilgiler
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Dikkat Edilecek Hususlar */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-bold">Dikkat Edilecek Hususlar</h3>
              </div>
              <ul className="space-y-3">
                {details.attention.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Başvuru Şartları */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold">Başvuru Şartları</h3>
              </div>
              <ul className="space-y-3">
                {details.requirements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* İstenen Belgeler */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-bold">İstenen Belgeler</h3>
              </div>
              <ul className="space-y-3">
                {details.documents.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <FileText className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Card
            className={`bg-gradient-to-r ${permitType?.color} border-0 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-md mx-auto`}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Başvuruya Hazır mısınız?
              </h3>
              <p className="text-white/90 mb-6 text-sm">
                Tüm şartları sağladığınızdan emin olduktan sonra başvuru
                sürecini başlatabilirsiniz.
              </p>
              <Button
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 py-3 text-lg font-semibold"
                onClick={() =>
                  window.open(
                    "https://test-eizin.csgb.gov.tr/auth/login",
                    "_blank"
                  )
                }
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Başvuru Yap
              </Button>
            </CardContent>
          </Card>
        </div>
      </>
    );
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('imported/pattern-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30"></div>

      <div className="relative z-10 min-h-screen flex flex-col ">
        {/* Logo Section */}
        <div className="text-center py-3 sm:py-4 md:py-6">
          <div className="relative z-10 h-full flex flex-col ">
            <Image
              className="mx-auto"
              src="imported/beyaz-logo.svg"
              height={30}
              width={250}
              alt="CSGB Logo"
            />
          </div>
        </div>

        {/* Main Content Container with Max Width */}
        <div className="flex-1  flex justify-center px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 my-auto">
            {/* Main Content Section */}
            <div className="flex-1">
              <div ref={containerRef}>
                {currentView === "home" && renderHomeView()}
                {currentView === "permit-types" && renderPermitTypesView()}
                {currentView === "permit-details" && renderPermitDetailsView()}
              </div>
            </div>

            {/* Duyurular Sidebar - Only show on home view */}
          </div>
        </div>

        {/* Footer Section */}
        <div className="py-3 sm:py-4">
          {/* Navigation Links */}
          <div className="text-center mb-3 sm:mb-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                İletişim
              </Link>
              <Link
                href="/statistics"
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

          {/* Institution Logos */}
          {/* <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
