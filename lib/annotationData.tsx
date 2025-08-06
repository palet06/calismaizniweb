import {
  Building,
  Clock,
  FileText,
  Hammer,
  Plane,
  Scale,
  Shield,
  Stethoscope,
  UserCheck,
  Users,
} from "lucide-react";

export const annotationsData = [
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

export const otherAnnotationsData = [
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
];

export const importanceReasons = [
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
