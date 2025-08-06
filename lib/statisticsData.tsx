import { FileText, Globe, Users } from "lucide-react";

export const statisticsData = {
  "2024": {
    total: 300852,
    byDocumentType: [
      { type: "Çalışma İzni", count: 300852, percentage: 69.4 },
      { type: "Serbest Bölge", count: 435, percentage: 0.1 },
      { type: "Muafiyet", count: 11912, percentage: 2.7 },
      { type: "Muafiyet Bilgi Formu", count: 120284, percentage: 27.7 },
    ],
    byGender: [
      { gender: "Erkek", count: 213491, percentage: 71.0 },
      { gender: "Kadın", count: 87361, percentage: 29.0 },
    ],
    byEducation: [
      { level: "İlkokul", count: 58554 },
      { level: "Ortaokul", count: 55176 },
      { level: "Lise ve Dengi", count: 117563 },
      { level: "Ön Lisans", count: 9301 },
      { level: "Lisans", count: 49257 },
      { level: "Yüksek Lisans", count: 8696 },
      { level: "Doktora", count: 2305 },
    ],
    topNationalities: [
      { country: "Suriye", count: 117334 },
      { country: "Türkmenistan", count: 32276 },
      { country: "Rusya", count: 17267 },
      { country: "Özbekistan", count: 15644 },
      { country: "Kırgızistan", count: 10869 },
      { country: "İran", count: 10466 },
      { country: "Endonezya", count: 8930 },
      { country: "Kazakistan", count: 8597 },
      { country: "Afganistan", count: 8335 },
      { country: "Azerbaycan", count: 7560 },
    ],
    topProvinces: [
      { province: "İstanbul", count: 103025 },
      { province: "Antalya", count: 35953 },
      { province: "Mersin", count: 30079 },
      { province: "Bursa", count: 18296 },
      { province: "Ankara", count: 15121 },
      { province: "Gaziantep", count: 14879 },
      { province: "İzmir", count: 8733 },
      { province: "Kocaeli", count: 8250 },
      { province: "Konya", count: 6881 },
      { province: "Muğla", count: 6635 },
    ],
    monthlyData: [
      { month: "Ocak", count: 18777 },
      { month: "Şubat", count: 20784 },
      { month: "Mart", count: 25931 },
      { month: "Nisan", count: 22089 },
      { month: "Mayıs", count: 28557 },
      { month: "Haziran", count: 20235 },
      { month: "Temmuz", count: 25293 },
      { month: "Ağustos", count: 22633 },
      { month: "Eylül", count: 24672 },
      { month: "Ekim", count: 33048 },
      { month: "Kasım", count: 30059 },
      { month: "Aralık", count: 28774 },
    ],
  },
  "2023": {
    total: 239835,
    byGender: [
      { gender: "Erkek", count: 173536, percentage: 72.4 },
      { gender: "Kadın", count: 66299, percentage: 27.6 },
    ],
  },
  "2022": {
    total: 212682,
    byGender: [
      { gender: "Erkek", count: 154853, percentage: 72.8 },
      { gender: "Kadın", count: 57829, percentage: 27.2 },
    ],
  },
};

export const definitions = [
  {
    term: "Yabancı",
    definition:
      "Türkiye Cumhuriyeti Devleti ile vatandaşlık bağı bulunmayan kişi.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    term: "Çalışma İzni",
    definition:
      "Çalışma ve Sosyal Güvenlik Bakanlığınca resmi bir belge şeklinde düzenlenen ve geçerlilik süresi içinde yabancıya Türkiye'de çalışma ve ikamet hakkı veren izin.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    term: "Çalışma İzni Muafiyeti",
    definition:
      "Çalışma ve Sosyal Güvenlik Bakanlığınca resmi bir belge şeklinde düzenlenen ve geçerlilik süresi içinde yabancıya Türkiye'de çalışma izni almaksızın çalışma ve ikamet hakkı veren muafiyet.",
    icon: <Users className="w-5 h-5" />,
  },
];
