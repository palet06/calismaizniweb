/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Building,
  UserCheck,
  Clock,
  BookOpen,
  Stethoscope,
  Hammer,
  Plane,
  Users,
  Eye,
  CheckCircle2,
  XCircle,
  Info,
  ScrollText,
} from "lucide-react";
import Link from "next/link";

export default function Annotations() {
  const annotationsData = [
    {
      number: "1",
      title: "Mühendislik ve Mimarlık Kısıtlaması",
      description:
        "Bu belge ile çalışma izni verilen yabancı personel, 3458 sayılı Mühendislik ve Mimarlık Hakkında Kanun gereğince, Türkiye Cumhuriyeti sınırları içerisinde mühendislik, mimarlık ve şehir plancılığı unvanı ile istihdam olunamaz, imzayla sanat icra edemez, bu unvanları kullanarak rey veremez ve imza da koyamaz.",
      icon: <Hammer className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "2",
      title: "Avukatlık Mesleği Yasağı",
      description:
        "Bu belge ile çalışma izni verilen yabancı, 1136 sayılı Avukatlık Kanununun 3. maddesi gereğince Türkiye'de Avukatlık Mesleğini icra edemez.",
      icon: <Scale className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "3",
      title: "Meslek Odası Üyeliği Şartı",
      description:
        "Bu Belge, 2527 sayılı Kanun kapsamında düzenlenmiş olup, ilgili meslek odasına üyelik kaydının yapılması halinde geçerlilik kazanacaktır.",
      icon: <UserCheck className="w-5 h-5" />,
      category: "Üyelik Şartı",
      severity: "medium",
    },
    {
      number: "4",
      title: "Havacılık Validasyon Belgesi",
      description:
        "Bu belge, yabancı uyruklu pilot ve teknisyenlerin lisanslarını Türkiye'de geçerli kılan Ulaştırma ve Altyapı Bakanlığı Sivil Havacılık Genel Müdürlüğünden alınacak Validasyon Belgesi ile birlikte geçerlidir.",
      icon: <Plane className="w-5 h-5" />,
      category: "Özel Belge",
      severity: "medium",
    },
    {
      number: "5",
      title: "Türk Vatandaşlarına Hasredilmiş Meslekler",
      description:
        "Bu belge ile çalışma izni verilen yabancı, ilgili kanunlarla Türk Vatandaşlarına hasredilmiş bulunan meslek ve görevleri icra edemez.",
      icon: <Shield className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "6",
      title: "Eczacılık Mesleği Yasağı",
      description:
        "Bu belge ile çalışma izni verilen yabancı, 6197 sayılı Eczacılar ve Eczaneler Hakkında Kanunun 2 nci maddesi uyarınca, Türkiye'de Eczacılık mesleğini icra edemez.",
      icon: <Stethoscope className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "7",
      title: "TMMOB Geçici Üyelik",
      description:
        "Yabancı mühendis ve mimarlara verilen çalışma izni, 6235 sayılı TMMOB Kanununun 36 ncı maddesi uyarınca en geç bir ay içinde ilgili Oda'ya geçici üyelik kaydını yaptırmak/uzatmak koşuluyla geçerlilik kazanacaktır.",
      icon: <Building className="w-5 h-5" />,
      category: "Üyelik Şartı",
      severity: "medium",
    },
    {
      number: "8",
      title: "Veteriner Hekimliği Yasağı",
      description:
        "İşbu belge ile çalışma izni verilen yabancı 6343 sayılı Veteriner Hekimliği Kanununun 2 nci maddesi gereğince Türkiye'de veteriner hekimliği mesleğini icra edemez.",
      icon: <Stethoscope className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "9",
      title: "Diş Hekimliği Yasağı",
      description:
        "İşbu belge ile çalışma izni verilen yabancı şahıs 1219 sayılı Tababet ve Şuabatı San'atlarının Tarzı İcrasına Dair Kanun uyarınca Türkiye'de diş hekimliği mesleğini icra edemez.",
      icon: <Stethoscope className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "10",
      title: "Kabotaj Kanunu Kısıtlaması",
      description:
        "İşbu belge ile çalışma izni verilen yabancı 815 sayılı Kabotaj Kanunu gereğince Türkiye karasuları dahilinde Kaptanlık mesleğini icra edemez.",
      icon: <Plane className="w-5 h-5" />,
      category: "Meslek Kısıtlaması",
      severity: "high",
    },
    {
      number: "11",
      title: "Şirket Ortağı Katkı Şartı",
      description:
        "Çalışma izni uzatma başvurusunda bulunulurken; şirket ortağı sıfatı ile ulusal ekonomiye ve yerel iş gücünün istihdamına olan katkılarının kanıtlanması ve ulusal mevzuata ilişkin yükümlülüklerin yerine getirilmesi zorunludur.",
      icon: <Users className="w-5 h-5" />,
      category: "İstihdam Şartı",
      severity: "medium",
    },
    {
      number: "13",
      title: "Çocuk ve Genç İşçi Düzenlemeleri",
      description:
        "İşbu Belge ile çalışma izni verilen yabancının, 4857 sayılı İş Kanunu'nun 71 inci maddesi ve bu maddeye dayalı olarak çıkartılan Çocuk ve Genç İşçilerin Çalıştırılma Usul ve Esasları Hakkındaki Yönetmelik hükümleri çerçevesinde çalıştırılmaları zorunlu olup, aksi durumun tespiti halinde gerekli yasal ve idari yaptırımlar uygulanacaktır.",
      icon: <Shield className="w-5 h-5" />,
      category: "İş Güvenliği",
      severity: "medium",
    },
  ];

  const importanceReasons = [
    {
      title: "Yasal Çalışma Güvencesi",
      description:
        "Yabancıların Türkiye'de yasal olarak çalışabilmesi için bu izin şarttır",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "İşveren Sorumluluğu",
      description:
        "İşverenlerin yasal yükümlülüklerini yerine getirdiğinin kanıtıdır",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: "İşletme Sürekliliği",
      description:
        "Farklı bakış açıları ve uzmanlıklar getirerek rekabet avantajı sağlar",
      icon: <Building className="w-6 h-6" />,
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
        return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-100/95 text-teal-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <ScrollText className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Çalışma İzni Şerhleri</h1>
            <p className="text-xl text-teal-900 mb-8">
              Yabancı personel çalışma izinlerinde belirtilen koşullar,
              sınırlamalar ve uyulması gereken hususlar
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Çalışma İzni Şerhleri Nedir?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Yabancı Personel Çalışma İzni Şerhleri, Türkiye'de
                      yabancıların çalışma hayatına ilişkin önemli bir detayı
                      oluşturur. Bu şerhler, çalışma izinlerinin verildiği
                      koşulları, sınırlamaları ve izin süresince uyulması
                      gereken hususları belirtir.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Türkiye'de işletmelerin büyümesi ve küreselleşmeyle
                      birlikte yabancı personel çalışma izni şerhleri konusu
                      giderek önem kazanmaktadır. Bu şerhler, hem yabancının
                      yasal olarak çalışmasını sağlar hem de işverenin yasal
                      yükümlülüklerini yerine getirmesine yardımcı olur.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="text-yellow-800 font-medium">
                        <strong>Önemli:</strong> Çalışma Bakanlığı, bu izinlerin
                        verilmesi ve takip edilmesi konusunda yetkili kurumdur.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Neden Bu Kadar Önemli?
              </h2>
              <p className="text-gray-600">
                Yabancılar için çalışma izni şerhlerinin kritik önemi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {importanceReasons.map((reason, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-blue-600">{reason.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Uyulması Gereken Zorunlu Şerhler
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Çalışma izin kartlarınızda belirtilen numaralar ve
                      açıklamalara uyulması zorunludur. Bu kurallara uyulmaması
                      durumunda ortaya çıkabilecek yasal ve cezai işlemlerden
                      işveren ve/veya yabancı personel sorumlu olacaktır.
                    </p>
                    <div className="flex items-center space-x-2 text-orange-700">
                      <Eye className="w-5 h-5" />
                      <span className="font-medium">
                        Dikkatli inceleme ve tam uyum gereklidir!
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Annotations Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Şerh Detayları
              </h2>
              <p className="text-gray-600">Her şerh numarası ve açıklaması</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {annotationsData.map((annotation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                          {annotation.number}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900 mb-2">
                            {annotation.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {annotation.category}
                            </Badge>
                            <Badge
                              className={`text-xs ${getSeverityColor(
                                annotation.severity
                              )}`}
                            >
                              <div className="flex items-center space-x-1">
                                {getSeverityIcon(annotation.severity)}
                                <span>
                                  {annotation.severity === "high"
                                    ? "Yüksek"
                                    : annotation.severity === "medium"
                                    ? "Orta"
                                    : "Düşük"}
                                </span>
                              </div>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                        {annotation.icon}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {annotation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Important Annotations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Diğer Önemli Şerhler
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: "14",
                  title: "Sirk Firmalarının Türkiye Turnesi",
                  description:
                    "Sirk firmalarının Türkiye turnesinde bulunması halinde yabancı personel listesinin görev yapılacak İl Göç İdaresi Müdürlüklerine bildirilmesi zorunludur.",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  number: "19",
                  title: "UK Başvuru Sahibi/Şartlı Mülteci",
                  description:
                    "UK Başvuru Sahibi veya Şartlı Mülteci statüsündeki yabancıya verilen çalışma izni, ikamet izni yerine geçmez.",
                  icon: <FileText className="w-5 h-5" />,
                },
                {
                  number: "20",
                  title: "Serbest Bölge Çalışması",
                  description:
                    "İşbu çalışma izni, 3218 sayılı Serbest Bölgeler Kanunu uyarınca ilgili Serbest Bölge Müdürlüğünden alınacak Giriş İzin Belgesi ile birlikte geçerlidir.",
                  icon: <Building className="w-5 h-5" />,
                },
                {
                  number: "21",
                  title: "Yabancı Doktor Tabip Odası Üyeliği",
                  description:
                    "Yabancı doktorlara verilen çalışma izni, 6023 sayılı Türk Tabipleri Birliği Kanununun 7. maddesi uyarınca en geç bir ay içinde ilgili tabip odasına üyelik kaydını yaptırmak koşuluyla geçerlilik kazanacaktır.",
                  icon: <Stethoscope className="w-5 h-5" />,
                },
                {
                  number: "22",
                  title: "Şirket Ortağı İstihdam Zorunluluğu (6 Aylık)",
                  description:
                    "İşyerindeki istihdam durumunun kontrolü için 6 (Altı) ay süreli çalışma izni verilen şirket ortağı/sahibi yabancının bu izin döneminde her ay en az 5 (beş) Türk vatandaşını işyerinde istihdam etmesi zorunludur. Aksi takdirde çalışma izni uzatım talebi karşılanmayacaktır.",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  number: "24",
                  title: "Bağımlı Çalışan Katkı Belgelendirmesi",
                  description:
                    "Bağımlı çalışan yabancının çalışma izninin uzatılması başvurusunda bulunulurken, bu yabancının izin düzenlenen şirkete, ülkemiz ekonomisine ve istihdama ilişkin katkılarının belgelenmesi gerekmektedir.",
                  icon: <FileText className="w-5 h-5" />,
                },
                {
                  number: "25",
                  title: "Tıp Doktorluğu Mesleği Yasağı",
                  description:
                    "İşbu çalışma izni ile yabancı şahıs Tıp Doktorluğu mesleğini icra edemez.",
                  icon: <Stethoscope className="w-5 h-5" />,
                },
                {
                  number: "26",
                  title: "Şirket Ortağı İstihdam Zorunluluğu (Sürekli)",
                  description:
                    "Çalışma izni verilen şirket ortağı/sahibi yabancının işyerinde, her ay en az 5 (beş) Türk vatandaşı istihdamı zorunlu olup, ilk altı aylık sürede bu zorunluk aranılmamaktadır. Çalışma izin süresinin 7'inci ayından itibaren bu koşulun yerine getirilmesi gerekmektedir. Çalışma izni uzatılan şirket ortağı/sahibi yabancının, tüm izin döneminde her ay en az 5 (beş) Türk vatandaşını işyerinde istihdam etmesi zorunludur. Aksi takdirde çalışma izni uzatım talebi karşılanmayacaktır.",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  number: "27",
                  title: "Süresiz İzin Yenileme",
                  description:
                    "Uluslararası İşgücü Kanunu Uygulama Yönetmeliğinin 28 inci maddesinin 4 üncü fıkrası gereğince süresiz çalışma izni olan yabancıların çalışma izni belgelerini, izin başlangıç tarihi itibarıyla her beş (5) yılda bir yenilemesi gerekmektedir. Belge yenileme başvurularının beş yıllık sürenin dolmasından önceki altı (6) ay içerisinde ve her halükarda süre dolmadan yapılması gerekmektedir.",
                  icon: <Clock className="w-5 h-5" />,
                },
                {
                  number: "28",
                  title: "İşyeri Açma ve Çalışma Ruhsatı",
                  description:
                    "İşbu çalışma izni, 'İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik' hükmü uyarınca yetkili idareden alınmış 'İşyeri Açma ve Çalışma Ruhsatı' ile birlikte geçerlidir.",
                  icon: <Building className="w-5 h-5" />,
                },
                {
                  number: "29",
                  title: "Geçerli Pasaport Zorunluluğu",
                  description:
                    "Yabancı adına yapılacak daha sonraki çalışma izni başvurularında geçerli bir pasaport ibraz edilmesi zorunludur.",
                  icon: <FileText className="w-5 h-5" />,
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                        {item.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                        {item.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-100/95 text-teal-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-[850px] mx-auto">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-teal-900" />
            <h2 className="text-3xl font-bold mb-4">
              Şerhlerinizi Kontrol Edin
            </h2>
            <p className="text-xl text-teal-900 mb-8">
              Çalışma izninizde belirtilen şerhleri dikkatlice inceleyerek yasal
              yükümlülüklerinizi öğrenin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.alo170.gov.tr" target="_blank">
                <Button className="bg-teal-700 hover:bg-teal-900 text-white w-[180px] font-medium py-3">
                  ALO 170 Destek
                </Button>
              </Link>

              <Link
                href="https://ecalismaizni.csgb.gov.tr/eizin"
                target="_blank"
              >
                <Button className="bg-teal-700 hover:bg-teal-900 text-white w-[180px] font-medium py-3">
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
