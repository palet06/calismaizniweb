import {
  Users,
  Shield,
  Clock,
  CheckCircle,
  Building,
  GraduationCap,
  Briefcase,
  MapPin,
  Scale,
  BookOpen,
} from "lucide-react";
export const workPermitTypes = [
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

export const exemptionCategories = [
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

export const employerRequirements = [
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

export const prohibitedProfessions = [
  "Diş Tabipliği",
  "Eczacılık",
  "Veterinerlik",
  "Avukatlık",
  "Noterlik",
  "Özel Güvenlik",
  "Gümrük Müşavirliği",
  "Turist Rehberliği",
];

export const applicationSteps = [
  {
    step: 1,
    title: "Ön Hazırlık",
    description: "Gerekli belgelerin toplanması ve şartların kontrol edilmesi",
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
