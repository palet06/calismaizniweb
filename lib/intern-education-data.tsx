import {
  Users,
  BookOpen,
  Building,
  Globe,
  Award,
  School,
  Target,
} from "lucide-react";

export const educationTypes = [
  {
    title: "Türkiye'de Eğitim Gören Öğrenciler",
    icon: <School className="w-6 h-6" />,
    description:
      "Türkiye'deki üniversitelerde eğitim gören yabancı öğrenciler için staj imkanları",
    requirements: [
      "Okulun zorunlu staj programı olması",
      "Türk öğrencilerle aynı statü",
      "Uygulamalı eğitim kapsamında",
      "Ek izin gerektirmez",
    ],
    color: "bg-blue-100 text-blue-600",
    process: "Okul aracılığıyla doğrudan başvuru",
  },
  {
    title: "Yurtdışında Eğitim Gören Öğrenciler",
    icon: <Globe className="w-6 h-6" />,
    description:
      "Yurtdışındaki üniversitelerde eğitim gören ancak Türkiye'de staj yapmak isteyen öğrenciler",
    requirements: [
      "Çalışma izni başvurusu gerekli",
      "4817 sayılı kanun 55. madde kapsamı",
      "Sigortalı işçi statüsü",
      "Maksimum 2 yıl süre",
    ],
    color: "bg-green-100 text-green-600",
    process: "Çalışma ve Sosyal Güvenlik Bakanlığı'na başvuru",
  },
];

export const internshipLevels = [
  {
    level: "Ön Lisans & Lisans",
    icon: <BookOpen className="w-5 h-5" />,
    duration: "İlk yıldan sonra başlar",
    weeklyHours: "Haftada maksimum 24 saat",
    requirements: [
      "İlk akademik yılın tamamlanması",
      "Haftalık çalışma süresi sınırı",
      "Okul onayı gerekli",
      "Staj sözleşmesi zorunlu",
    ],
    color: "bg-orange-50 border-orange-200",
  },
  {
    level: "Yüksek Lisans & Doktora",
    icon: <Award className="w-5 h-5" />,
    duration: "Çalışma iznine bağlı",
    weeklyHours: "Tam zamanlı çalışma mümkün",
    requirements: [
      "Çalışma izni zorunlu",
      "İkamet süresi hesaplanır",
      "Ayrı ikamet izni gerekmez",
      "Süre uzatma mümkün",
    ],
    color: "bg-purple-50 border-purple-200",
  },
];

export const advantages = [
  {
    title: "Dünya Sıralamasında Üst Sıralarda",
    description:
      "Türkiye'deki üniversiteler uluslararası sıralamada üst sıralarda yer alıyor",
    icon: <Target className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Öncü Sanayi Dalları",
    description:
      "Farklı sektörlerde öncü konumda bulunan sanayi dallarında deneyim",
    icon: <Building className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Kaliteli Yaşam Standardı",
    description: "Öğrencilere sağlanan yüksek kaliteli hayat standartları",
    icon: <Users className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Kültürel Zenginlik",
    description: "Doğu ve Batı kültürlerinin buluştuğu eşsiz bir deneyim",
    icon: <Globe className="w-6 h-6 text-orange-600" />,
  },
];

export const applicationSteps = [
  {
    step: "1",
    title: "Ön Değerlendirme",
    description: "Eğitim durumunuz ve staj türünüzün belirlenmesi",
    duration: "1-2 gün",
  },
  {
    step: "2",
    title: "Belge Hazırlığı",
    description: "Gerekli belgelerin toplanması ve hazırlanması",
    duration: "1 hafta",
  },
  {
    step: "3",
    title: "Başvuru Süreci",
    description: "İlgili kuruma resmi başvurunun yapılması",
    duration: "2-3 gün",
  },
  {
    step: "4",
    title: "Değerlendirme",
    description: "Başvurunuzun incelenmesi ve onaylanması",
    duration: "15-30 gün",
  },
];
