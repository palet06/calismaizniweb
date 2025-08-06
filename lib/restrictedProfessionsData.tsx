import {
  Scale,
  Shield,
  Stethoscope,
  FileText,
  Building,
  BookOpen,
  Gavel,
  Heart,
  Briefcase,
  GraduationCap,
} from "lucide-react";
export const restrictedProfessions = [
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

export const allowedSectors = [
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

export const yasakMesleklerListesi = [
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
    profession: "Uzmanlık Eğitimi Dışında Çalışacak Yabancı Asistanlar",
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
    profession: "Acente Sorumlusu, Seyahat Acentesi Sorumlusu",
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
    profession: "Gemi Acente Yetkilisi ve Gemi Acente Personeli",
    law: "Gemi Acenteleri Yönetmeliği, 7 ve 8'inci madde",
  },
  {
    no: "28",
    profession: "Daimi Nezaretçi, Teknik Eleman",
    law: "Maden Yönetmeliği, 125 ve 130'uncu madde",
  },
  {
    no: "29",
    profession: "Sağlık Meslek Hizmet Birimi Sorumlusu-Ruhsat Sahibi",
    law: "Sağlık Meslek Mensuplarının Serbest Meslek İcrası Hakkında Yönetmelik, 5'inci madde",
  },
];
