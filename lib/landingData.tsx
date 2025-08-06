import { CheckCircle, Clock, Briefcase, GraduationCap } from "lucide-react";
export type ViewState = "home" | "permit-types" | "permit-details";
export type PermitType = "sureli-bagli" | "suresiz" | "bagimsiz" | "muafiyet";
export const workPermitTypes = [
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

export const permitDetails = {
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
