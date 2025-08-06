import {
  FileText,
  Users,
  GraduationCap,
  Briefcase,
  Clock,
  TrendingUp,
  Globe,
} from "lucide-react";

export const criteriaData = [
  {
    title: "Eğitim Durumu",
    points: "1-5 Puan",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Lisans, yüksek lisans ve doktora derecelerine göre puanlama yapılır.",
    details: [
      "Doktora: 5 puan",
      "Yüksek Lisans: 4 puan",
      "Lisans: 3 puan",
      "Ön Lisans: 2 puan",
      "Lise: 1 puan",
    ],
  },
  {
    title: "Mesleki Deneyim",
    points: "1-4 Puan",
    icon: <Briefcase className="w-6 h-6" />,
    description:
      "İlgili alandaki çalışma deneyimi süresine göre değerlendirme.",
    details: [
      "10+ yıl: 4 puan",
      "7-9 yıl: 3 puan",
      "4-6 yıl: 2 puan",
      "1-3 yıl: 1 puan",
    ],
  },
  {
    title: "Dil Yeterliliği",
    points: "1-3 Puan",
    icon: <Globe className="w-6 h-6" />,
    description: "Türkçe dil seviyesi ve uluslararası dil sertifikaları.",
    details: [
      "C1-C2 Türkçe: 3 puan",
      "B1-B2 Türkçe: 2 puan",
      "A1-A2 Türkçe: 1 puan",
    ],
  },
  {
    title: "Yaş Faktörü",
    points: "1-2 Puan",
    icon: <Users className="w-6 h-6" />,
    description: "Çalışma yaşı aralığına göre puanlama sistemi.",
    details: ["25-35 yaş: 2 puan", "36-45 yaş: 1 puan", "Diğer yaşlar: 0 puan"],
  },
];

export const companyRequirements = [
  {
    title: "Şirket Sermayesi",
    requirement: "Minimum 100.000 TL",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Şirketin ödenmiş sermayesi en az 100.000 TL olmalıdır.",
  },
  {
    title: "Yerli Çalışan Oranı",
    requirement: "En az %80",
    icon: <Users className="w-5 h-5" />,
    description: "Toplam çalışanların en az %80'i Türk vatandaşı olmalıdır.",
  },
  {
    title: "Vergi Durumu",
    requirement: "Güncel Olmalı",
    icon: <FileText className="w-5 h-5" />,
    description: "Şirketin vergi ve SGK borcu bulunmamalıdır.",
  },
  {
    title: "Faaliyet Süresi",
    requirement: "En az 1 Yıl",
    icon: <Clock className="w-5 h-5" />,
    description: "Şirket en az 1 yıldır aktif olarak faaliyet göstermeli.",
  },
];
