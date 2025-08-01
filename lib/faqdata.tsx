import {
  FileText,
  
 
  HelpCircle,
  Clock,
  CreditCard,
  Users,
  Globe,
  Shield,
  Building,
  Mail,

  AlertCircle,
  CheckCircle,
  Info,
  Scale,
  Briefcase,
  GraduationCap,
  MapPin,

  BarChart3,
} from "lucide-react"
export  const faqData = [
    {
      id: 1,
      category: "genel",
      categoryName: "Genel Bilgiler",
      icon: <Info className="w-5 h-5" />,
      question: "Çalışma izni nedir?",
      answer:
        "Çalışma izni, Çalışma ve Sosyal Güvenlik Bakanlığınca resmî bir belge şeklinde düzenlenen ve geçerlilik süresi içinde yabancıya Türkiye'de çalışma ve ikamet hakkı veren belgedir. 6735 sayılı Uluslararası İşgücü Kanunu'na göre, bu Kanun kapsamında olan yabancının, Türkiye'de çalışmaya başlamadan önce çalışma izni veya çalışma izni muafiyeti alması zorunludur. Geçerli çalışma izni veya çalışma izni muafiyeti olmadan çalışan yabancılar hakkında cezai ve idari işlem uygulanır.",
    },
    {
      id: 2,
      category: "genel",
      categoryName: "Genel Bilgiler",
      icon: <Shield className="w-5 h-5" />,
      question: "Çalışma İzni, ikamet izni sayılır mı?",
      answer:
        "6735 sayılı Uluslararası İşgücü Kanunu'na göre verilen çalışma izni veya çalışma izni muafiyeti, 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu'nun 27'nci maddesi uyarınca ikamet izni yerine geçer. Ancak, uluslararası koruma başvuru sahibi, şartlı mülteci ve geçici koruma sağlanan yabancılara düzenlenen çalışma izinleri ikamet izni yerine geçmez.",
    },
    {
      id: 3,
      category: "genel",
      categoryName: "Genel Bilgiler",
      icon: <HelpCircle className="w-5 h-5" />,
      question: "Çalışma izni başvurusunda bulunurken aracı bir kurumun yardımına ihtiyaç var mıdır?",
      answer:
        "Çalışma izni başvurusu yapabilmeniz için gerekli her türlü bilgi ve kapsamlı başvuru kılavuzları Bakanlığımız internet sitesinde yer almaktadır. Ayrıca, bu konudaki sorularınız için Bakanlığımızın bilgi ve danışma hattı ALO 170'i arayabilirsiniz.",
    },
    {
      id: 4,
      category: "izin-turleri",
      categoryName: "İzin Türleri",
      icon: <Briefcase className="w-5 h-5" />,
      question: "Süreli-Bağımlı çalışma izni nedir?",
      answer:
        "Çalışma izni başvurusunun olumlu değerlendirilmesi hâlinde yabancıya; iş veya hizmet sözleşmesinin süresini aşmamak koşuluyla, gerçek veya tüzel kişiye ya da kamu kurum veya kuruluşuna ait belirli bir işyerinde veya bunların aynı işkolundaki işyerlerinde belirli bir işte ve bir işverene bağlı olarak çalışmak şartıyla ilk başvuruda en çok bir yıla kadar geçerli süreyle düzenlenen çalışma iznidir.",
    },
    {
      id: 5,
      category: "izin-turleri",
      categoryName: "İzin Türleri",
      icon: <CheckCircle className="w-5 h-5" />,
      question: "Süresiz çalışma izni nedir?",
      answer:
        "Bir işverene bağlı olmaksızın yabancı adına düzenlen ve yabancıya Türkiye'de süresiz çalışma ve ikamet hakkı veren çalışma iznidir. Türkiye'de uzun dönem ikamet izni veya en az sekiz yıl kanuni çalışma izni olan yabancılar süresiz çalışma iznine başvurabilir. Ancak, yabancının başvuru şartlarını taşıması yabancıya süresiz çalışma izni verilmesi hususunda mutlak hak sağlamaz. Süresiz çalışma izni belgeleri çalışma izni başlangıç tarihi itibarıyla her beş yılın sonunda yenilenir. Belge yenileme başvurusu süresiz çalışma izni başlangıç tarihinden itibaren beş yıllık sürenin dolmasından önceki altı ay içerisinde ve her halükarda süre dolmadan yapılır.",
    },
    {
      id: 6,
      category: "izin-turleri",
      categoryName: "İzin Türleri",
      icon: <Users className="w-5 h-5" />,
      question: "Bağımsız çalışma izni nedir?",
      answer:
        "Bir işverene bağlı olmaksızın yabancı adına düzenlenen ve yabancıya Türkiye'de kendi ad ve hesabına çalışma hakkı veren çalışma iznidir. Bağımsız çalışma izni, uluslararası işgücü politikası doğrultusunda, yabancının eğitim düzeyi, mesleki deneyimi, bilim ve teknolojiye katkısı, Türkiye'deki faaliyetinin veya yatırımının ülke ekonomisine ve istihdama etkisi, yabancı şirket ortağı ise sermaye payı ve diğer benzeri hususlar dikkate alınarak verilebilir. Bağımsız çalışma izni süreli olarak düzenlenir.",
    },
    {
      id: 7,
      category: "belgeler",
      categoryName: "Belgeler ve Başvuru",
      icon: <FileText className="w-5 h-5" />,
      question: "Çalışma izni için istenilen belgeler nelerdir?",
      answer: "Çalışma izni için istenilen belgeler https://www.csgb.gov.tr/uigm/belgeler/ adresinde mevcuttur.",
    },
    {
      id: 8,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <FileText className="w-5 h-5" />,
      question: "Çalışma izni başvurusu nasıl yapılır?",
      answer:
        "Çalışma izni başvurusu yurt dışından ve yurt içinden olmak üzere iki farklı şekilde Yabancıların Çalışma İzinleri Başvuru Sistemi (e-İzin) üzerinden yapılabilir.",
    },
    {
      id: 9,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <Globe className="w-5 h-5" />,
      question: "Çalışma izni başvurusu yurt içinden nasıl yapılır?",
      answer:
        "Çalışma izni başvurusu yurt içinde, doğrudan Bakanlığa yapılır. Adına Türkiye'de en az altı ay süreyle düzenlenmiş ve çalışma izni başvurusu tarihi itibarıyla geçerliliği devam eden ikamet izni bulunan yabancılar için ilgili işverenlerce yurt içinden e-Devlet kapısı üzerinden (https://www.calismaizni.gov.tr) çalışma izni başvurusu yapılabilir. Ayrıca, Genel Müdürlükçe belirlenecek yabancılardan Türkiye'de yasal olarak bulunanlar, geçerli bir ikamet izni olmaksızın sistem üzerinden başvuru yapabilir.",
    },
    {
      id: 10,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <MapPin className="w-5 h-5" />,
      question: "Çalışma izni başvurusu yurt dışından nasıl yapılır?",
      answer:
        "Yurt dışından yapılacak çalışma izni başvurusu iki aşamada tamamlanır. İlk aşamada yabancı, vatandaşı olduğu veya yasal olarak bulunduğu ülkedeki Türkiye Cumhuriyeti büyükelçiliğine veya başkonsolosluğuna şahsen giderek çalışma izni başvurusu yapar ve bu başvuruya istinaden kendisine büyükelçilik veya başkonsolosluk tarafından 16 haneli referans numarası verilir. İkinci aşamada, yabancının verilen referans numarasını Türkiye'deki işverenine bildirmesi, işvereninin ise bu referans numarasını kullanarak Bakanlığımıza e-Devlet kapısı üzerinden (https://www.calismaizni.gov.tr) çalışma izni başvurusu yapması gerekmektedir.",
    },
    {
      id: 11,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <Clock className="w-5 h-5" />,
      question: "Çalışma izni başvurusunun değerlendirilmesi nasıl yürütülmektedir?",
      answer:
        "Çalışma izni başvuruları, Çalışma ve Sosyal Güvenlik Bakanlığınca belirlenen çalışma izni değerlendirme kriterlerine ve uluslararası işgücü politikasına göre değerlendirilir. Usulüne uygun olarak tamamlanan başvuruların değerlendirilmesi, bilgi ve belgelerin tam olması kaydıyla otuz gün içinde tamamlanır. Otuz günlük süre, başvurunun sistem üzerinden tamamlandığı veya ek bilgi ve belge talebi olması halinde talep edilen bilgi ve belgelerin sistem üzerinden yüklendiği tarihten itibaren başlar. Bakanlık, çalışma izni başvurularının değerlendirilmesi sürecinde gerek görülen hâllerde, ilgili kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek kuruluşlarının görüşlerini alır.",
    },
    {
      id: 12,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <Mail className="w-5 h-5" />,
      question: "Çalışma izni başvurusunun sonuçları nasıl bildirilmektedir?",
      answer:
        "Çalışma izni başvurusu sonuçlanan yabancılara ilişkin Bakanlık kararı (olumlu veya olumsuz) başvuru esnasında beyan edilen elektronik posta adresine bildirilir. Yurt dışından yapılan başvurularda sonuç, ilgili dış temsilciliğe de çevrim içi olarak bildirilir. Ayrıca, başvuru sonucu e-İzin sisteminden de görülebilir.",
    },
    {
      id: 13,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <Scale className="w-5 h-5" />,
      question: "Çalışma izni başvurusunun reddedilmesi halinde itiraz merci neresidir?",
      answer:
        "Çalışma izni verilmesi ya da çalışma izni süresinin uzatılması talebinin reddedilmesi, çalışma izninin iptal edilmesi ya da çalışma izninin sonlandırılmasına ilişkin Bakanlıkça verilecek kararlara karşı ilgililer, tebliğ tarihinden itibaren otuz gün içinde itiraz edilebilir. Çalışma izni başvurusunun reddedilmesine ilişkin itirazlar sistem üzerinden çevrim içi olarak yapılmakta olup, itiraza ilişkin açıklamalı dilekçe ve belgelerin Yabancıların Çalışma İzinleri Başvuru Sistemine (e-İzin) yüklenmesi gerekmektedir. İtirazın Bakanlıkça reddedilmesi halinde idarî yargı yoluna başvurulabilir.",
    },
    {
      id: 14,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <CheckCircle className="w-5 h-5" />,
      question: "Çalışma izni başvurusunun reddedilmesi halinde yeniden başvuru yapılabilir mi?",
      answer:
        "Çalışma izni talebi reddedilen yabancılar için, ret işlemine konu olan eksikliğin giderilmesi halinde yeniden çalışma izni başvurusu yapılması mümkündür. Çalışma izni başvurusunun reddedilmesi, yeni bir çalışma izni başvurusu yapılmasına mani olmaz.",
    },
    {
      id: 15,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question: "Tamamlanan başvurunun numarası nereden görülebilir?",
      answer:
        "Tamamlanan başvurunun takip numarası; e-İzin sistemindeki 'Başvuru İşlemleri'-'Tamamlanan Başvurular'-'Değerlendirmedeki Başvurular' sekmeleri takip edilerek görülebilmektedir.",
    },
    {
      id: 16,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Shield className="w-5 h-5" />,
      question:
        "Çalışma izni verilen yabancının sosyal güvenlik yükümlülüklerinin yerine getirilmesi işlemleri kaç gün içerisinde yapılmalıdır?",
      answer:
        "Çalışma izni bulunan yabancılara ilişkin sosyal güvenlik yükümlülüklerinin çalışma izni başvurusu esnasında beyan ve taahhüt edilen ücret ve tam zamanlı çalışmaya ilişkin usul ve esaslar üzerinden yerine getirilmesi zorunludur. Yurt içinden yapılan başvurularda yabancının, çalışma izninin başlangıç tarihinden itibaren bir ay içerisinde ilgili mevzuat kapsamında yükümlülüklerini yerine getirmek suretiyle çalışmaya başlaması zorunludur. Yurt dışından yapılan başvurularda ise yabancının yurda giriş tarihinden itibaren bir ay içerisinde ve her halükârda çalışma izninin başlangıç tarihinden itibaren altı ay içerisinde ilgili mevzuat kapsamında yükümlülüklerini yerine getirmek suretiyle çalışmaya başlaması zorunludur.",
    },
    {
      id: 17,
      category: "belgeler",
      categoryName: "Belgeler ve Başvuru",
      icon: <FileText className="w-5 h-5" />,
      question:
        "Yurt dışı başvurularda çalışma izni çıktıktan sonra yabancının ve işverenin takip etmesi gereken işlemler nelerdir?",
      answer:
        "Çalışma izni verilmesi halinde, yabancının başvuru yaptığı dış temsilciliğe giderek çalışma ve ikamet izni harçları ile vize harcını ödemesi gerekmektedir. Çalışma izni harcı ve değerli kâğıt bedeli yatırılması bildirimi tarihinden itibaren otuz gün içerisinde harç ve değerli kâğıt bedeli yatırılmayan başvurular reddedilir. Dış temsilcilikçe yabancı şahsın pasaportuna vize etiketi yapıştırılması sonrasında şahıs Türkiye'ye giriş yapabilir. Bakanlıkça düzenlenen çalışma izni kartı PTT Kargo ile işveren adresine ulaştırılmaktadır. Dış temsilcilikten çalışma vizesi alarak Türkiye'ye gelen yabancılar, giriş tarihinden itibaren en geç yirmi gün içinde adres kayıt sistemine kayıtlarını yaptırmak zorundadırlar.",
    },
    {
      id: 18,
      category: "belgeler",
      categoryName: "Belgeler ve Başvuru",
      icon: <FileText className="w-5 h-5" />,
      question: "Çalışma izni çıkan ancak belge henüz ulaşmayan yabancı, belgesinin takibini nasıl yapabilir?",
      answer:
        "Bakanlıkça onaylanan çalışma izinlerine ait çalışma izni belgeleri bastırıldıktan sonra PTT Kargo ile işveren adresine gönderilmektedir. Sistemde kayıtlı cep telefonuna PTT tarafından bu gönderilerin durumu ile ilgili bildirimler gönderilmekle beraber, gönderinin durumunu e-Devlet üzerinden sisteme girerek 'Başvuru İşlemleri Menüsü'-'Sonuçlanmış Başvurular'-'İzin Sonrası İşlemler'-'Kart Takip' sekmeleri takip edilerek görülebilmektedir.",
    },
    {
      id: 19,
      category: "belgeler",
      categoryName: "Belgeler ve Başvuru",
      icon: <AlertCircle className="w-5 h-5" />,
      question: "Çalışma izni belgesinin kaybedilmesi/çalınması durumunda yeni belge nasıl çıkarılır?",
      answer:
        "Geçerliliği devam eden çalışma izni belgesinin kayıp/çalıntı veya kullanılamayacak şekilde tahrip olması durumunda; e-Devlet üzerinden e-İzin sistemine girilerek 'Başvuru İşlemleri'-'Sonuçlanmış Başvurular'-'İzin Sonrası İşlemler' sekmesinden 'Yeni Kart Talebi' butonuna tıklanarak çalışma izni belgesinin yeniden basılması talep edilebilmektedir. Talebin uygun görülmesi halinde yabancıdan değerli kâğıt bedeli ve çalışma izni harcının yarısı kadar harç yatırması e-posta ile talep edilecektir. Belirtilen tutarların yatırılması halinde yeni çalışma izni belgesi bastırılarak işyeri adresinize gönderimi sağlanacaktır. e-İzin sisteminde kayıtlı bulunmayan çalışma izinleri için Bakanlığa yazılı dilekçe ile müracaat edebilmektedir.",
    },
    {
      id: 20,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <Scale className="w-5 h-5" />,
      question: "Çalışma izni başvurusu reddedilen yabancının itiraz hakkı var mıdır?",
      answer:
        "Çalışma ve Sosyal Güvenlik Bakanlığınca çalışma izni verilmesi ya da uzatılması talebinin reddedilmesi, çalışma izninin iptal edilmesi ya da çalışma izninin geçerliliğinin kaybedilmesine ilişkin kararını, yabancıya veya varsa işverenine tebliğ eder. Bakanlıkça verilecek kararlara karşı ilgililer tarafından tebliğ tarihinden itibaren otuz (30) gün içinde itiraz edilebilir. İtirazın reddedilmesi hâlinde idari yargı yoluna başvurulabilir.",
    },
    {
      id: 21,
      category: "uzatma",
      categoryName: "İzin Uzatma",
      icon: <Clock className="w-5 h-5" />,
      question: "Çalışma izni süre uzatma başvurusu nasıl yapılır?",
      answer:
        "Çalışma izni süre uzatma başvurusu, çalışma izni süresinin dolmasına altmış gün kalmasından itibaren ve her halükârda çalışma izni süresi dolmadan sistem üzerinden yapılır.",
    },
    {
      id: 22,
      category: "uzatma",
      categoryName: "İzin Uzatma",
      icon: <CheckCircle className="w-5 h-5" />,
      question:
        "Çalışma izni uzatma başvurusunun sonuçlanmasına kadar geçen süreçte yabancı şahıs çalışmaya devam edebilir mi?",
      answer:
        "Adına çalışma izni süre uzatma başvurusu yapılan yabancılar, izin süresinin sona erdiği tarihten itibaren başvurunun değerlendirilmesi süresince ve her halükârda doksan günü geçmemek ve yapılan iş ile çalışılan işyerinin değişmemesi kaydıyla çalışmaya devam edebilir. Bu süre içerisindeki çalışma, kanuni çalışma olarak kabul edilir ve yabancının ve işverenin çalışma izninden doğan hak ve yükümlülükleri aynı şekilde devam eder.",
    },
    {
      id: 23,
      category: "uzatma",
      categoryName: "İzin Uzatma",
      icon: <Clock className="w-5 h-5" />,
      question: "Çalışma izni uzatma başvurularında izinler hangi sürelerle düzenlenir?",
      answer:
        "Yapılacak çalışma izni uzatma başvurusunun olumlu değerlendirilmesi hâlinde yabancıya aynı işverene bağlı olarak ilk uzatma başvurusunda en çok iki yıl, sonraki uzatma başvurularında ise en çok üç yıla kadar çalışma izni düzenlenir.",
    },
    {
      id: 24,
      category: "mevzuat",
      categoryName: "Mevzuat",
      icon: <Scale className="w-5 h-5" />,
      question: "Yabancıların çalışma izinleri konusunda yürürlükte olan mevzuat nelerdir?",
      answer:
        "6735 sayılı Uluslararası İşgücü Kanunu, Uluslararası İşgücü Kanunu Uygulama Yönetmeliği, Turkuaz Kart Yönetmeliği, Uluslararası Koruma Başvuru Sahibi ve Uluslararası Koruma Statü Sahibi Kişilerin Çalışmasına Dair Yönetmelik, Geçici Koruma Sağlanan Yabancıların Çalışma İzinlerine Dair Yönetmelik, Serbest Bölgelerde Çalışacak Yabancıların Çalışma İzinlerine Dair Yönetmelik ve Doğrudan Yabancı Yatırımlarda Yabancı Uyruklu Personel İstihdamı Hakkında Yönetmelik yürürlükte olan mevzuatlardır.",
    },
    {
      id: 25,
      category: "mevzuat",
      categoryName: "Mevzuat",
      icon: <Users className="w-5 h-5" />,
      question: "6735 sayılı Uluslararası İşgücü Kanunu kimleri kapsamaktadır?",
      answer:
        "6735 sayılı Kanun; Türkiye'de çalışmak için başvuruda bulunan veya çalışan, bir işveren yanında mesleki eğitim görmek üzere başvuruda bulunan veya görmekte olan, staj yapmak üzere başvuruda bulunan veya staj yapan yabancılar ile Türkiye'de geçici nitelikte hizmet sunumu amacıyla bulunan sınır ötesi hizmet sunucusu yabancıları ve yabancı çalıştıran veya çalıştırmak üzere başvuruda bulunan gerçek ve tüzel kişileri kapsar. Kanun'un uygulanmasında, Türkiye'nin taraf olduğu ikili veya çok taraflı anlaşmalar ile uluslararası sözleşme hükümleri saklıdır.",
    },
    {
      id: 26,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Shield className="w-5 h-5" />,
      question: "Çalışma izni almasına gerek bulunmayan yabancılar kimlerdir?",
      answer:
        "Diğer kanunlarda ya da Türkiye'nin taraf olduğu ikili veya çok taraflı anlaşmalar veya uluslararası sözleşmelerde çalışma izni almadan çalışabileceği belirtilen yabancılar, Türkiye'de çalışma izni almadan çalışabilirler. Mavi Kart sahibi yabancılar (5901 sayılı Türk Vatandaşlığı Kanunu), mülteci veya ikincil koruma statüsü sahibi yabancılar (6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu) ve diplomatik misyon üyesi yabancılar (1961 tarihli Diplomatik İlişkiler Hakkında Viyana Sözleşmesi/1963 tarihli Konsolosluk İlişkileri Hakkında Viyana Sözleşmesi) bu kapsamda örnek olarak sayılabilir.",
    },
    {
      id: 27,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <GraduationCap className="w-5 h-5" />,
      question: "Yabancı uyruklu doktor ve hemşireler Türkiye'de çalışabilir mi?",
      answer:
        "663 sayılı Kanun Hükmünde Kararname ile yabancı doktor ve hemşirelerin Türkiye'de çalışabilmelerine imkan sağlanmış olup, yabancı uyruklu doktor/hemşire istihdam edecek özel sağlık kuruluşları Sağlık Bakanlığı'ndan (İl Sağlık Md.) almış olduğu ön izin (mesleki yeterlilik) belgesi ile birlikte Bakanlığa çalışma izin başvuru yapmakta ve talebi uygun bulunanlara çalışma izni düzenlenmektedir. Çalışma izni istenilen yabancının yurtdışındaki fakültelerden mezun olması halinde diploma denklik belgesi ibrazı zorunludur.",
    },
    {
      id: 28,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <Shield className="w-5 h-5" />,
      question:
        "İzin alarak Türk vatandaşlığından çıkarak Mavi Kart almaya hak kazanmış bulunan kişiler çalışma izni almak zorunda mıdır?",
      answer:
        "29/05/2009 tarihli ve 5901 sayılı Türk Vatandaşlığı Kanunu'nun 28'inci maddesi kapsamında doğumla Türk vatandaşı olup da İçişleri Bakanlığından çıkma izni almak suretiyle Türk vatandaşlığını kaybedenler ve üçüncü dereceye kadar olan altsoylarından Mavi Kart sahibi olanlar veya Mavi Kartlılar Kütüğüne kaydı olduğunu belgeleyenler, Türkiye'de çalışma izni almadan çalışabilirler. Bu kişiler için çalışma izni belgesi düzenlenmez. Ancak, talepleri halinde Türkiye'de çalışabileceklerini belirten harca tabi olmayan bir belge verilir.",
    },
    {
      id: 29,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <AlertCircle className="w-5 h-5" />,
      question: "İzinsiz çalıştığı tespit edilen yabancılar ve işverenleri hakkında hangi işlemler uygulanır?",
      answer:
        "Çalışma izni olmaksızın çalıştığı tespit edilen yabancılar ve işverenleri hakkında idari para cezası uygulanmaktadır. Ayrıca çalışma izni bulunmadan çalıştığı tespit edilen yabancılar sınır dışı edilmek üzere İçişleri Bakanlığına bildirilir.",
    },
    {
      id: 30,
      category: "harç-odeme",
      categoryName: "Harç ve Ödeme",
      icon: <CreditCard className="w-5 h-5" />,
      question: "Çalışma izni talep edilen yabancıya ödenecek en az ücret düzeyleri ne kadardır?",
      answer:
        "Çalışma izni talep edilen yabancılara yapacakları meslek ve görevlere uygun olarak minimum ücret seviyeleri belirlenmiştir. Söz konusu ücretler Bakanlığımız internet sitesinde yer alan Değerlendirme Kriterlerinin 5. Maddesinde belirtilmektedir. Çalışma izni verilen yabancılara ilişkin sosyal güvenlik prim ödemelerinin de bu miktarın altında olmaması gerekmektedir.",
    },
    {
      id: 31,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Shield className="w-5 h-5" />,
      question: "İkamet iznine sahip olmak Türkiye'de yasal olarak çalışabilmek için yeterli midir?",
      answer:
        "6735 sayılı Kanun'a göre verilen çalışma izni veya çalışma izni muafiyeti, ikamet izni yerine geçer. Ancak, mülteci ya da ikincil koruma statüsü dışındaki yabancıların herhangi bir nedenle ikamet iznine sahip olması yabancıya çalışma hakkı vermez.",
    },
    {
      id: 32,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Building className="w-5 h-5" />,
      question:
        "Yabancılar Türkiye'de istedikleri iş ve mesleklerde çalışabilirler mi? Türk vatandaşlarına hasredilmiş olan meslek ve görevler nelerdir?",
      answer:
        "Çalışma izni başvuruları Türkiye'de iş piyasasındaki durum ve çalışma hayatındaki gelişmeler, istihdama ilişkin sektörel ve ekonomik konjonktür koşulları dikkate alınarak değerlendirilmektedir. Ayrıca, ilgili mevzuatta sadece Türk vatandaşlarına hasredilmiş bulunan meslek ve görevlerde, yabancılara çalışma izni verilmesi mümkün bulunmamaktadır. Bu meslekler muhtelif yasal düzenlemeler uyarınca Türk vatandaşlarına hasredilmiş olup en bilinenleri: Özel Güvenlik, Mali Müşavirlik, Avukatlık, Noterlik, Diş Hekimliği, Eczacılık, Veterinerlik, Turist Rehberliği gibi mesleklerdir.",
    },
    {
      id: 33,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <Building className="w-5 h-5" />,
      question: "Doğrudan yabancı yatırım şartını sağlayan işletmelerin istihdam şartını sağlaması gerekir mi?",
      answer:
        "Özellik arzeden doğrudan yabancı yatırımlar kriterlerini karşılayan işletmelerde, kilit personel konumundaki ilk yabancının çalışma izni değerlendirilirken istihdam kriteri (1 yabancı istihdam edilebilmesi için 5 Türk vatandaşı istihdamı şartı) aranmamaktadır.",
    },
    {
      id: 34,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <Building className="w-5 h-5" />,
      question: "Yabancı uyruklu şirket ortakları ve yönetim kurulu üyelerinin çalışma izni alması gerekmekte midir?",
      answer:
        "6102 sayılı Türk Ticaret Kanunu'na göre kurulmuş olan; limited şirketlerin şirket ortağı olan müdürü, anonim şirketlerin şirket ortağı olan yönetim kurulu üyesi, sermayesi paylara bölünmüş komandit şirketlerin yönetici olan komandite ortağı olan yabancılar çalışma izni alarak çalışabilirler. 6102 sayılı Kanun'a göre kurulmuş; anonim şirketlerin Türkiye'de ikamet etmeyen yönetim kurulu üyesi, diğer şirketlerin yönetici sıfatı olmayan ortağı, çalışma izni muafiyeti kapsamında değerlendirilir.",
    },
    {
      id: 35,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <Users className="w-5 h-5" />,
      question:
        "Uluslararası koruma başvuru sahibi ve şartlı mülteci statüsü sahibi kişiler çalışma izni için başvuru yapabilirler mi?",
      answer:
        "Uluslararası koruma başvuru sahibi ve şartlı mülteci statüsü sahibi kişiler çalışmaya başlamadan önce çalışma izni almakla yükümlüdür. Çalışma izni başvurusu, uluslararası koruma başvurusu tarihinden altı ay sonra yapılabilir. Belirli bir ilde ikamet etme yükümlülüğü getirilen uluslararası koruma başvuru sahibi ve şartlı mültecinin, bu il sınırları dışında çalışma izni almak için yaptığı başvurular, İçişleri Bakanlığının görüşü alınarak sonuçlandırılır.",
    },
    {
      id: 36,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Briefcase className="w-5 h-5" />,
      question: "Çalışma izni olan yabancı istediği iş ve işyerinde çalışabilir mi?",
      answer:
        "Bağımlı-süreli çalışma izni olan yabancıya, gerçek veya tüzel kişiye ya da kamu kurum veya kuruluşuna ait belirli bir işyerinde veya bunların aynı işkolundaki işyerlerinde belirli bir işte çalışmak şartıyla çalışma izni verilir.",
    },
    {
      id: 37,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Building className="w-5 h-5" />,
      question: "Türkiye'de çalışma izni ile çalışan yabancılar işyerlerini değiştirebilirler mi?",
      answer:
        "Çalışma izinleri belirli bir iş, işyeri ve adreste çalışmak üzere verilmektedir. Belirli bir işverenin yanında çalışma izni bulunan bir yabancı aynı izinle başka bir işverene ait işyerinde çalışamaz. Yabancının farklı bir işyerinde çalışabilmesi için yeni bir çalışma izni alması gerekmektedir. Ancak bir işverene bağlı olarak çalışma izni verilen yabancının aynı işverene ait işyerinde farklı bir görevde veya bu işverenin aynı iş kolundaki diğer şubelerinde çalışabilmesi gerekli şartların sağlanması halinde mümkündür.",
    },
    {
      id: 38,
      category: "genel",
      categoryName: "Genel Bilgiler",
      icon: <BarChart3 className="w-5 h-5" />,
      question: "Yabancıların çalışma izinlerine ilişkin istatistiklere nereden ulaşılabilmektedir?",
      answer:
        "Yabancıların çalışma izinlerine ilişkin olarak istatistiki verilere Bakanlığımız internet sitesinden (https://www.csgb.gov.tr/uigm/istatistikler/) ulaşılmaktadır.",
    },
    {
      id: 39,
      category: "basvuru",
      categoryName: "Başvuru Süreci",
      icon: <Scale className="w-5 h-5" />,
      question: "Çalışma izni başvuru reddedilen yabancının itiraz hakkı var mıdır?",
      answer:
        "Çalışma ve Sosyal Güvenlik Bakanlığınca çalışma izni verilmesi ya da uzatılması talebinin reddedilmesi ya da çalışma izninin iptal edilmesi ya da çalışma izninin sonlandırılmasına ilişkin kararını, işverenine veya yabancıya tebliğ eder. Bakanlıkça verilecek kararlara karşı ilgililer tarafından tebliğ tarihinden itibaren otuz gün içinde itiraz edilebilir. İtirazın reddedilmesi hâlinde idari yargı yoluna başvurulabilir.",
    },
    {
      id: 40,
      category: "harç-odeme",
      categoryName: "Harç ve Ödeme",
      icon: <CreditCard className="w-5 h-5" />,
      question: "Çalışma izni için harç ödenmekte midir?",
      answer:
        "02/07/1964 tarihli ve 492 sayılı Harçlar Kanunu gereğince yabancılara verilecek çalışma izni ve çalışma izni muafiyeti harca tabidir. Ayrıca 210 sayılı Değerli Kâğıtlar Kanunu uyarınca Bakanlığımızca düzenlenmekte olan çalışma izni ve çalışma izni muafiyeti belgeleri, değerli kâğıt sayılmış olup, düzenlenecek her bir belgeden değerli kâğıt bedeli alınmaktadır. Üç aydan kısa talep edilen çalışma izni muafiyeti başvuruları için harç bedeli alınmaz. Turkuaz Kart sahibi yabancı, harca tabi olmayıp düzenlenen belge için değerli kâğıt bedeli alınır. Güncel çalışma izni harç tutarlarına ve değerli kâğıt bedeli miktarlarına https://www.csgb.gov.tr/uigm adresinden ulaşılabilir.",
    },
    {
      id: 41,
      category: "harç-odeme",
      categoryName: "Harç ve Ödeme",
      icon: <CreditCard className="w-5 h-5" />,
      question: "Çalışma izni harcı ve değerli kâğıt bedeli nasıl ödenmektedir?",
      answer:
        "Çalışma izni harcı ve değerli kâğıt bedeli çevrim içi olarak Dijital Vergi Dairesi (https://ivd.gib.gov.tr/) ana sayfasında bulunan 'Referans Numarası ile Ödeme' seçeneğinden ödenebilmektedir. Çalışma izni harcı ve değerli kâğıt bedeli Ödemeler, Dijital Vergi Dairesi (https://dijital.gib.gov.tr) ana sayfasında bulunan 'Referans Numarası İle Ödeme' ekranına tıklayarak açılan ekranda kurum adını 'Uluslararası İşgücü Genel Müdürlüğü' olarak seçip '9' ile başlayan T.C. Yabancı Kimlik Numarası ve yabancıya e-posta ile iletilen İşlem (Referans ID) Numarası bilgileriyle yapılabilmektedir.",
    },
    {
      id: 42,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <Globe className="w-5 h-5" />,
      question: "e-İzin sistemi için gerekli uygulamalar nelerdir?",
      answer:
        "e-İzin sisteminin sorunsuz çalıştırılabilmesi için internet tarayıcısı olarak Google Chrome kullanılması önerilmektedir. Elektronik imza işlemlerinde sorun yaşamamak ve sistem uyarılarını görebilmek açısından internet tarayıcısı ayarlarından 'Açılır Pencerelere İzin Ver' durumuna getirilmesi (pop-up engelleyicisinin kapatılması) gerekmektedir.",
    },
    {
      id: 43,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <Users className="w-5 h-5" />,
      question: "Ev hizmetlerinde yabancı çalıştırılmasına hangi koşullarda izin verilir?",
      answer:
        "Ev hizmetlerinde; yaşlı, engelli, veya çocuk bakımı ile hasta refakati için yabancı çalıştırmak üzere Çalışma ve Sosyal Güvenlik Bakanlığı çalışma izni başvurusu yapılabilmektedir.",
    },
    {
      id: 44,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <Users className="w-5 h-5" />,
      question: "Ev hizmetlerinde birinci derece yakınlar işveren olabilir mi?",
      answer:
        "Ev hizmetlerinde yabancı çalıştıracak kişilerin yaşlı veya engelli olması ya da başvuru yapabilecek durumda olmaması halinde bu kişilerin birinci derece yakınları işveren olabilir. Bu durumda işyeri kaydı birinci derece yakın olan kişinin bilgileri ve elektronik imzası ile açıldıktan sonra, başvuru yapılırken sistemde yabancının çalışacağı adrese hasta refakati/yaşlı bakımının yapılacağı adres girilmelidir. Ayrıca yüklenecek sözleşmeye ek olarak yakınlığı gösteren belge ve bakımı yapılacak kişinin nüfus cüzdanı örneği eklenmelidir.",
    },
    {
      id: 45,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question:
        "Çalışma izni başvurusunda bulunurken işyeri SGK sicil numarasının 26 haneden oluşması gerekmektedir. SGK sicil numarasının 23 haneli olması durumunda izlenecek yol nedir?",
      answer:
        "İşyerinin ana işveren durumunda olması halinde 23 haneyi takip eden son üç hane 000 olarak girilmelidir. Alt işverenlik durumlarında ise bu numaranın ilgili Sosyal Güvenlik İl Müdürlüğünden öğrenilmesi gerekmektedir.",
    },
    {
      id: 46,
      category: "ozel-durumlar",
      categoryName: "Özel Durumlar",
      icon: <GraduationCap className="w-5 h-5" />,
      question: "Yabancı uyruklu doktor ve hemşireler çalışma izni alarak Türkiye'de çalışabilirler mi?",
      answer:
        "663 sayılı Kanun Hükmünde Kararname ile yabancı doktor ve hemşirelerin Türkiye'de çalışabilmelerine imkân sağlanmış olup, Sağlık Bakanlığından alınan ön izin belgesi ile birlikte Çalışma ve Sosyal Güvenlik Bakanlığı'na çalışma izi başvurusu yapılmakta ve başvurusu uygun bulunanlara çalışma izni düzenlenmektedir. Çalışma izni istenilen yabancının yurt dışından mezun olması halinde yabancıya ait diploma denklik belgesi ibrazı zorunludur.",
    },
    {
      id: 47,
      category: "harç-odeme",
      categoryName: "Harç ve Ödeme",
      icon: <CreditCard className="w-5 h-5" />,
      question: "Çalışma izni talep edilen yabancıya ödenecek en az ücret düzeyleri ne kadardır?",
      answer:
        "Çalışma izni talep edilen yabancılara yapacakları meslek ve görevlere uygun olarak asgari ücretin katları esas alınmak suretiyle minimum ücret seviyeleri belirlenmiştir. Söz konusu ücret seviyeleri Bakanlığımız internet sitesinde yer alan İzin Değerlendirme Kriterleri sayfasında belirtilmektedir. Çalışma izni verilen yabancılara ilişkin sosyal güvenlik prim ödemelerinin çalışma izni başvurusunda beyan edilen ücret üzerinden yatırılması gerekmektedir.",
    },
    {
      id: 48,
      category: "belgeler",
      categoryName: "Belgeler ve Başvuru",
      icon: <FileText className="w-5 h-5" />,
      question: "Çalışma izni verilirken pasaport süresi dikkate alınmakta mıdır?",
      answer:
        "Çalışma izni yabancının pasaport veya pasaport yerine geçen belgelerinin geçerlilik süresinden altmış gün daha kısa süreli olarak düzenlenir.",
    },
    {
      id: 49,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <Users className="w-5 h-5" />,
      question: "e-İzin sisteminde işyeri kaydı kim tarafından oluşturulur ve işyeri adına başvuru yapabilir mi?",
      answer:
        "e-İzin sisteminde işveren kaydı, işverenin SGK'da kayıtlı işyeri SGK e-Bildirge kullanıcısı tarafından yapılabilmektedir. İşyeri SGK e-Bildirge kullanıcısı tarafından işyeri kaydı oluşturulduktan sonra 'İşveren Yönetim Paneli'- 'Yetkilendirme İşlemleri' menüsünden girilerek yetkilendirilecek kişilerin T.C. kimlik numarası girilmek suretiyle işyeri adına başvuru yapma yetkisi verilebilmektedir. İşyeri e-Bildirge kullanıcısı tarafından işyeri kaydı açıldıktan sonra yetkilendirilen kişiler, sisteme girdiklerinde o işyeri adına başvuru yapabilmektedir.",
    },
    {
      id: 50,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <Users className="w-5 h-5" />,
      question:
        "İşyeri e-Bildirge kullanıcısı tarafından işveren kaydı açıldıktan sonra işyeri adına başvuru yapmak üzere sistemden kişi yetkilendirmesinde sınır var mı? Birden fazla kişi yetkilendirilebilir mi?",
      answer:
        "İşyeri e-Bildirge kullanıcısı tarafından işveren kaydı açıldıktan sonra işyeri adına başvuru yapmak üzere kişi yetkilendirilmesinde bir sınır bulunmamaktadır.",
    },
    {
      id: 51,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question:
        "İşveren, e-İzin sisteminde 'İşveren Yönetim Paneli' - 'İşyeri Bilgileri' kısmındaki bilgileri değiştirebilir mi?",
      answer:
        "İşyeri SGK e-Bildirge kullanıcısı; SGK'dan otomatik olan bilgiler haricinde (bu bilgiler SGK'dan güncellenebilir) diğer bilgileri güncelleme yetkisine sahiptir.",
    },
    {
      id: 52,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <Briefcase className="w-5 h-5" />,
      question: "Yabancı, işyerinde yapacağı görevi nasıl seçilir?",
      answer:
        "Yabancının yapacağı görev içinde geçen en az üç harf sisteme girildiğinde, yazılan metni içeren tüm görevler listelenmektedir. Bu listeden iş sözleşmesiyle uyumlu olacak şekilde yabancının çalışacağı ilgili görevi seçilebilmektedir.",
    },
    {
      id: 53,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question: "Başvuruda yüklenecek belgelerde sınırlama var mıdır?",
      answer: "e-İzin sistemine yüklenecek belgeler en fazla 2 MB boyutunda ve PDF formatında olmalıdır.",
    },
    {
      id: 54,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question: "Başvuruda yüklenecek fotoğraflar nasıl olmalıdır?",
      answer:
        "e-İzin sistemine yüklenecek fotoğraf JPEG, PNG, GİF veya JPG formatında olmalıdır. Yabancıya ait fotoğrafın, son 6 ay içerisinde renkli olarak çekilmiş, ön cepheden, yüzü açık, yabancının kolaylıkla tanınabileceği şekilde, arka fonu beyaz (biyometrik) olmalıdır.",
    },
    {
      id: 55,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <AlertCircle className="w-5 h-5" />,
      question:
        "Başvuru esnasında belgeleri yükledikten sonra 'Kaydet' aşamasından sonra sistem ilerlemiyorsa ne yapılmalıdır?",
      answer:
        "Başvuruda yer alan her sekmenin başlığının yanında yeşil onay (ü) işaretinin olup olmadığı kontrol edilmelidir. Onay işareti bulunmayan sekmede bir eksiklik var demektir. İlgili eksik bilgiler tamamlanarak başvuruya devam edilmelidir. Bütün sekmeler tamamlandığı halde 'Kaydet' butonuna tıklandığında e-İmza penceresi açılmıyorsa internet tarayıcısı ayarlarından 'Açılır Pencerelere İzin Ver' durumuna (pop-up engelleyicisinin kapatılması) getirilmesinden emin olunmalıdır. e-İzin sisteminin sorunsuz çalıştırılabilmesi için internet tarayıcısı olarak Google Chrome kullanılması önerilmektedir.",
    },
    {
      id: 56,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question: "Tamamlanmayan başvuru ne demektir?",
      answer:
        "e-İzin sisteminde bir başvurunun tüm sekmeleri doldurulduktan sonra e-İmza ile tamamlandığı takdirde tamamlanmış başvuru olur. Ancak bir başvuru tüm bilgileri girilmiş olsa dahi e-İmza ile imzalanmadan kaydedilirse tamamlanmayan başvurular bölümüne kaydedilir. Yapılan başvuruların takibi 'Başvuru Takip İşlemleri' menüsü altındaki sekmelerden yapılabilmektedir.",
    },
    {
      id: 57,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question: "Başvuru tamamlandıktan sonra çıktı alınmalı mıdır?",
      answer:
        "e-İzin sisteminde tüm işlemler çevrim içi olarak yapılmakta olup e-İmza ile tamamlanan çalışma izni başvurularıyla ilgili olarak ayrıca Bakanlığımıza kağıt ortamında bilgi veya belge gönderilmesi gerekmemektedir.",
    },
    {
      id: 58,
      category: "sistem-teknik",
      categoryName: "Sistem ve Teknik",
      icon: <FileText className="w-5 h-5" />,
      question:
        "Çalışma izni başvurusuyla ilgili eksik evrak tespit edildiği bildirimi alan işveren belgeyi nasıl yükleyebilir?",
      answer:
        "Talep edilen eksik belgenin PDF formatında hazırladıktan sonra, 'Başvuru Takip İşlemleri'- 'Değerlendirme Aşamasındaki Başvurular' alanındaki ilgili başvuruya ait işlem menüsünden yüklenmesi gerekmektedir. Belgeyi yükledikten sonra işlem, elektronik imza ile tamamlanmalıdır.",
    },
    {
      id: 59,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <AlertCircle className="w-5 h-5" />,
      question:
        "Çalışma izni düzenlenmesi sonrasında yabancının işe başlamaması veya işten ayrılması durumlarında çalışma izni iptal/sonlandırma işlemleri nasıl yapılmaktadır?",
      answer:
        "Bakanlıkça verilmiş bulunan çalışma izinlerinin iptal edilmesine ilişkin olarak işveren tarafından e-İzin sistemi üzerinden 'İzin Sonrası İşlemler'-'İzin Sonlandırma Talebi' sekmeleri takip edilerek elektronik imza ile işlemin tamamlanması gerekmektedir.",
    },
    {
      id: 60,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Shield className="w-5 h-5" />,
      question:
        "Yabancı, çalışma izni ile bir işte çalışmakta iken hastalanırsa veya iş kazası geçirirse hakları nelerdir?",
      answer:
        "Çalışma izni sahibi olan bir yabancının hastalanması ya da iş kazası geçirmesi durumunda ilgili mevzuat hükümleri uygulanır.",
    },
    {
      id: 61,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <AlertCircle className="w-5 h-5" />,
      question: "Bildirim yükümlülüğü nedir?",
      answer:
        "Yabancı çalıştıran işverenler ile bir işverene bağlı olmaksızın düzenlenen çalışma izinlerinde adına çalışma izni düzenlenen yabancılar, çalışma izninin veya çalışma izni muafiyeti kapsamında çalışmanın başlamasını ve sona ermesini, çalışma izni veya çalışma izni muafiyetinin iptalini gerektirecek hâlleri on beş gün içinde Bakanlığa bildirmekle yükümlüdür.",
    },
    {
      id: 62,
      category: "yasal-gereklilikler",
      categoryName: "Yasal Gereklilikler",
      icon: <Users className="w-5 h-5" />,
      question: "Türkiye'de çalışma izni ile çalışan yabancılar sendika üyesi olabilir mi?",
      answer: "Türkiye'de çalışan yabancı işçilerin sendika üyesi olmalarında herhangi bir engel bulunmamaktadır.",
    },
    {
      id: 63,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Shield className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti nedir?",
      answer:
        "Bakanlığımızca resmî bir belge şeklinde düzenlenen ve geçerlilik süresi içinde yabancıya Türkiye'de çalışma izni almaksızın çalışma ve ikamet hakkı veren muafiyeti ifade eder.",
    },
    {
      id: 64,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Scale className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti konusunda geçerli mevzuat nedir?",
      answer: "6735 Uluslararası İşgücü Kanunu ve Uluslararası İşgücü Kanunu Uygulama Yönetmeliği'dir.",
    },
    {
      id: 65,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Info className="w-5 h-5" />,
      question: "Çalışma izni muafiyetinin mahiyeti nedir?",
      answer:
        "Bakanlığımızca düzenlenen çalışma izni muafiyeti, geçerli olduğu sürece, ikamet izni yerine geçer. Çalışma izni muafiyetiyle geçirilen süreler, kanuni çalışma izni veya ikamet izni sürelerinin hesabında dikkate alınmaz. Çalışma izni muafiyetinin herhangi bir nedenle geçersiz hale gelmesi halinde buna bağlı olan ikamet hakkı sona erer. Çalışma izni muafiyeti dışında bir nedenle Türkiye'de geçerli bir ikamet izni olan yabancıya verilen çalışma izni muafiyetinin geçerliliğinin herhangi bir nedenle sona ermesi durumunda yabancının sahip olduğu diğer ikamet izni geçersiz hale gelmez.",
    },
    {
      id: 66,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <AlertCircle className="w-5 h-5" />,
      question: "Birden fazla çalışma izni muafiyeti başvurusu yapabilir miyim?",
      answer:
        "Yabancının muafiyet başvurusu değerlendirme sürecindeyken ve sonuçlanmadan aynı anda farklı bir başvuru yapılamamaktadır. Ayrıca 48 inci maddenin birinci fıkrasının (b) ve (c) bentleri kapsamında çalışma izni muafiyeti verilen yabancılar için çalışma izni muafiyetinin düzenlendiği tarihten itibaren altı aylık, diğer çalışma izni muafiyetlerinde ise on iki aylık süre geçmedikçe aynı muafiyet kapsamında yeni başvuru yapılamaz.",
    },
    {
      id: 67,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Users className="w-5 h-5" />,
      question: "Çalışma izni muafiyetine başvuru hakkı olan yabancılar kimlerdir ve muafiyet süreleri ne kadardır?",
      answer:
        "Çalışma izni muafiyeti süreçleri hakkında daha detaylı bilgiye https://emuafiyet.csgb.gov.tr adresinde yer alan Sık Sorulan Sorular bölümü ile başvuru kılavuzlarından ulaşabilirsiniz.",
    },
    {
      id: 68,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Users className="w-5 h-5" />,
      question: "Çalışma izni muafiyet başvurusu kim tarafından yapılır?",
      answer: "Çalışma izni muafiyeti başvuruları yabancının kendisi tarafından yapılır.",
    },
    {
      id: 69,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Globe className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti başvurusu nasıl yapılır?",
      answer:
        "Çalışma izni muafiyeti başvuruları yurt içinden veya yurt dışından çevrimiçi olarak yapılmaktadır. Eğer yabancı Türkiye içerisinde bulunuyorsa; kendisine tahsis edilen '9' ile başlayan Yabancı Kimlik Numarası varsa E-devlet üzerinden, yoksa pasaport bilgileriyle emuafiyet.csgb.gov.tr adresi üzerinden sisteme giriş yapabilir. Eğer yabancı Türkiye dışında bulunuyorsa; bulunduğu ülkenin Türk dış temsilciliğine başvuru yaparak referans numarası alması gerekmektedir.",
    },
    {
      id: 70,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Building className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti başvurusunu Dışişleri Bakanlığına yapması gereken yabancılar kimlerdir?",
      answer:
        "Yabancı ülkelerin Türkiye'deki diplomatik ve konsüler temsilciliklerinin bağlı birimi olarak faaliyet gösteren okullarda, kültür kurumlarında ve din kurumlarında görevli yabancılar ile yabancı ülkelerin Türkiye'deki diplomatik ve konsüler temsilciliklerinde diplomatik kadro üyesi, konsolosluk memuru, idari ve teknik kadro üyesi ve konsolosluk hizmetlisi, Türkiye'deki uluslararası kuruluşlarda uluslararası memur ve idari ve teknik personel olarak görev yapan kişilerin özel hizmetinde çalışanı, yabancıların çalışma izni muafiyeti başvuruları Dışişleri Bakanlığına yapılır.",
    },
    {
      id: 71,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <FileText className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti başvurusu için istenen belgeler nelerdir?",
      answer:
        "Başvuru esnasında yabancıya ait biyometrik fotoğraf, geçerli pasaport veya pasaport yerine geçen belge, eğitim ve varsa işyeri bilgileri ile bunlara ilişkin kanıtlayıcı belgelerin yüklenmesi gerekmektedir. Ayrıca, yabancının başvurduğu muafiyet türüne göre durumu kanıtlayıcı belgelerin de yüklenmesi zorunludur.",
    },
    {
      id: 72,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <FileText className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti verilirken pasaport süresi dikkate alınmakta mıdır?",
      answer:
        "Çalışma izni muafiyeti, yabancının pasaport veya pasaport yerine geçen belgelerinin geçerlilik süresinden altmış gün daha kısa süreli olacak şekilde dikkate alınır.",
    },
    {
      id: 73,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Clock className="w-5 h-5" />,
      question: "Çalışma izni muafiyetinde süre uzatma başvurusu yapılabilir mi?",
      answer: "Çalışma izni muafiyetinde süre uzatma başvurusu yapılamaz.",
    },
    {
      id: 74,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Users className="w-5 h-5" />,
      question: "Çalışma izin muafiyeti kısmi süreli çalışmak üzere düzenlenebilir mi?",
      answer:
        "Çalışma izni muafiyeti kısmi süreli çalışmak üzere düzenlenebilir. Kısmi süreli çalışmanın yapılabileceği sektör, iş ve meslekler Genel Müdürlüğümüzce belirlenerek resmi internet sayfasında yayımlanır.",
    },
    {
      id: 75,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Clock className="w-5 h-5" />,
      question: "Yurt içinden yapılacak çalışma izni muafiyeti başvurularının değerlendirme süreci nasıldır?",
      answer:
        "Yurt içinden Bakanlığımıza yapılacak çalışma izni muafiyeti başvuruları, vize veya vize muafiyeti süresinin aşılmaması kaydıyla yabancının Türkiye'ye giriş tarihinden itibaren en geç otuz gün içinde yapılması gerekmektedir. Başvuruya dair bilgi ve belgelerin tam olması ve yabancının muafiyet kapsamında olduğunun tespit edilmesi kaydıyla başvuru sonuçlandırılır.",
    },
    {
      id: 76,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Globe className="w-5 h-5" />,
      question: "Yurt dışından yapılacak çalışma izni muafiyeti başvurularının değerlendirme süreci nasıldır?",
      answer:
        "Yurt dışından çalışma izni muafiyet başvuruları yabancının vatandaşı olduğu veya yasal olarak bulunduğu ülkedeki Türk dış temsilciliğine yapılır. Türk dış temsilciliğine yapılan başvurular sistem üzerinden Bakanlığımıza iletilmektedir. Başvurusu olumlu değerlendirilen yabancılara çalışma izni muafiyeti belgesi düzenlenmektedir.",
    },
    {
      id: 77,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Mail className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti başvuru sonuçları nasıl bildirilir?",
      answer:
        "Sistemde yer alan ve doğrulanmış kayıtlı e-posta ve iletişim kanalları üzerinden bildirimler yapılacaktır.",
    },
    {
      id: 78,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <CreditCard className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti için herhangi bir ücret ödenmekte midir?",
      answer:
        "2/7/1964 tarihli ve 492 sayılı Harçlar Kanunu uyarınca çalışma izni muafiyeti harca tabidir. 21/2/1963 tarihli ve 210 sayılı Değerli Kâğıtlar Kanunu uyarınca yabancılara düzenlenen çalışma izni muafiyeti belgesinden değerli kâğıt bedeli alınır. Muafiyet geçerlilik süresi üç aydan kısa talep edilen çalışma izni muafiyeti başvuruları için harç bedeli alınmaz.",
    },
    {
      id: 79,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <CreditCard className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti için harç ve değerli kâğıt bedelleri nasıl ödenir?",
      answer:
        "Çalışma izni muafiyeti başvurunuz olumlu değerlendirildiğinde kayıtlı e-postanıza buna yönelik bildirim gönderilecektir. Gelen e-postada detayları yer alacağı üzere belirlenen tutarların ilgili hesaplara ödenmesi gereklidir. 30 gün içinde istenilen ödemelerin yapılmaması halinde başvurunuz olumsuz sonuçlandırılacaktır. Ödemeler Gelir İdaresi Başkanlığına ait Dijital Vergi Dairesinden kredi kartıyla doğrudan yapılabilir, ya da Türkiye içerisinde anlaşmalı bankalar üzerinden yapılabilmektedir.",
    },
    {
      id: 80,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <AlertCircle className="w-5 h-5" />,
      question: "Çalışma izni muafiyet başvurusunun ret sebepleri nelerdir?",
      answer:
        "Uluslararası işgücü politikasına uygun olmayan, Sahte veya yanıltıcı bilgi ve belgelerle yapıldığı tespit edilen, Diğer kanunlarda Türk vatandaşlarına hasredilen iş ve meslekler için yapılan, Adına çalışma izni muafiyeti başvurusu yapılan yabancının muafiyet kapsamında olmadığı anlaşılan, Türkiye'ye girmelerine izin verilmeyecek, vize verilmeyecek veya sınır dışı etme kararı alınmış yabancılardan olduğu İçişleri Bakanlığınca bildirilen yabancılara ilişkin olan başvurular reddedilir.",
    },
    {
      id: 81,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Scale className="w-5 h-5" />,
      question: "Çalışma izni muafiyet başvurusunun reddedilmesi halinde itiraz merci neresidir?",
      answer:
        "Çalışma izni muafiyeti başvurusunun reddi ve düzenlenen belgelerin iptali kararları, yabancılara 11/2/1959 tarihli ve 7201 sayılı Tebligat Kanunu hükümlerine göre tebliğ tarihinden itibaren otuz gün içinde Bakanlığımıza itiraz edilebilir. İtirazlar sistem üzerinden yapılır. İtiraza ilişkin bilgi ve belgeler başvuruya eklenir. İtirazın reddedilmesi hâlinde idari yargı yoluna başvurulabilir.",
    },
    {
      id: 82,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <CheckCircle className="w-5 h-5" />,
      question: "Çalışma izni muafiyetinin sağladığı haklar nelerdir?",
      answer:
        "İkamet izni yerine geçer. Muafiyet süreleri içerisinde ayrıca ikamet izni alınması gerekmez. Yabancıya muafiyet süreleri içerisinde ülkeye çoklu giriş çıkış imkânı sağlar. Ancak çalışma izni muafiyetiyle geçirilen süreler, kanuni çalışma izni veya ikamet izni sürelerinin hesabında dikkate alınmaz.",
    },
    {
      id: 83,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Users className="w-5 h-5" />,
      question: "Türkiye'de çalışma izni muafiyeti ile çalışanlar sendika üyesi olabilir mi?",
      answer:
        "Evet. Türkiye'de çalışma izni muafiyeti ile çalışan yabancıların sendika üyesi olmalarında herhangi bir engel bulunmamaktadır.",
    },
    {
      id: 84,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Users className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti alınması sonucunda yabancının aile bireylerine ikamet hakkı verilir mi?",
      answer:
        "Çalışma izni muafiyeti kapsamında Türkiye'de bulunan yabancının aile bireyleri, düzenlenen muafiyete istinaden doğrudan ikamet hakkı elde edemez. Bu yabancıların ayrıca ikamet izni başvurusu yapması gerekmektedir. İkamet izni başvuruları ilgili İl Göç İdaresi Müdürlüklerine yapılmaktadır.",
    },
    {
      id: 85,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Shield className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti verilen yabancıların sosyal güvenlik kaydı nasıl yapılacaktır?",
      answer:
        "Çalışma izin muafiyeti bulunan yabancılara ilişkin sosyal güvenlik yükümlülüklerinin çalışma izni muafiyeti başvurusu esnasında beyan ve taahhüt edilen ücret ve tam zamanlı çalışmaya ilişkin usul ve esaslar üzerinden yerine getirilmesi zorunludur. Çalışma izni muafiyeti alan yabancılar ile yabancı çalıştıran işverenler, sosyal güvenlik mevzuatından kaynaklanan yükümlülüklerini kanuni süresi içinde 31/5/2006 tarihli ve 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu hükümlerine göre yerine getirirler.",
    },
    {
      id: 86,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <Clock className="w-5 h-5" />,
      question:
        "Yabancının talep ettiği çalışma süresi çalışma izni muafiyeti için belirlenen süreden fazla ise ne yapılmalıdır?",
      answer:
        "Çalışma izni muafiyeti kapsamındaki çalışmanın, öngörülen muafiyet sürelerini aşacak olması durumunda Bakanlığımızdan çalışma izni alınması zorunludur. Detaylı bilgi için: http://www.calismaizni.gov.tr/",
    },
    {
      id: 87,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <AlertCircle className="w-5 h-5" />,
      question:
        "Çalışma izni muafiyeti alan yabancının işe başlamaması veya başladıktan sonra işten ayrılması halinde çalışma izni muafiyeti iptal/sonlandırma bildirimi nasıl yapılacaktır?",
      answer:
        "Çalışma izni muafiyeti kapsamında çalışmanın başlaması ve sona ermesi durumu ile çalışma izni muafiyetinin iptalini gerektirecek hâllerin on beş gün içinde Bakanlığımıza bildirilmesi gerekmektedir. Bildirimler sistem üzerinden yapılır. Çalışma izni muafiyeti verilen yabancıların işe başlayışlarına ilişkin Sosyal Güvenlik Kurumuna yapılan işe giriş bildirimleri ve çalışma izni muafiyet süresi bitiş tarihinde yapılan işten çıkış bildirimleri Bakanlığımıza yapılmış sayılır.",
    },
    {
      id: 88,
      category: "muafiyet",
      categoryName: "Çalışma İzni Muafiyeti",
      icon: <AlertCircle className="w-5 h-5" />,
      question: "Çalışma izni muafiyeti belgelerinin kaybolması halinde ne yapılır?",
      answer:
        "Çalışma izni muafiyeti belgelerinin kaybolması halinde bu durum derhal işveren veya yabancı tarafından sistem üzerinden Genel Müdürlüğümüze bildirilerek yeni belge talebi yapılır. Kaybolma nedeniyle çalışma izni muafiyeti belgesinin yenilenmesi halinde harç bedelinin yarısı ve değerli kâğıt bedelinin tamamı alınır. İdarenin kusuru nedeniyle hatalı düzenlenen çalışma izni muafiyeti belgesinin yenilenmesi durumunda harç ve değerli kâğıt bedeli alınmaz.",
    },
  ]

export    const categories = [
    { id: "all", name: "Tümü", icon: <HelpCircle className="w-4 h-4" />, count: 88 },
    {
      id: "genel",
      name: "Genel Bilgiler",
      icon: <Info className="w-4 h-4" />,
      count: 4,
    },
    {
      id: "izin-turleri",
      name: "İzin Türleri",
      icon: <Briefcase className="w-4 h-4" />,
      count: 3,
    },
    {
      id: "belgeler",
      name: "Belgeler ve Başvuru",
      icon: <FileText className="w-4 h-4" />,
      count: 5,
    },
    {
      id: "basvuru",
      name: "Başvuru Süreci",
      icon: <FileText className="w-4 h-4" />,
      count: 8,
    },
    {
      id: "uzatma",
      name: "İzin Uzatma",
      icon: <Clock className="w-4 h-4" />,
      count: 3,
    },
    {
      id: "mevzuat",
      name: "Mevzuat",
      icon: <Scale className="w-4 h-4" />,
      count: 2,
    },
    {
      id: "muafiyet",
      name: "Çalışma İzni Muafiyeti",
      icon: <Shield className="w-4 h-4" />,
      count: 26,
    },
    {
      id: "harç-odeme",
      name: "Harç ve Ödeme",
      icon: <CreditCard className="w-4 h-4" />,
      count: 4,
    },
    {
      id: "yasal-gereklilikler",
      name: "Yasal Gereklilikler",
      icon: <Scale className="w-4 h-4" />,
      count: 9,
    },
    {
      id: "ozel-durumlar",
      name: "Özel Durumlar",
      icon: <Users className="w-4 h-4" />,
      count: 8,
    },
    {
      id: "sistem-teknik",
      name: "Sistem ve Teknik",
      icon: <Globe className="w-4 h-4" />,
      count: 16,
    },
  ]