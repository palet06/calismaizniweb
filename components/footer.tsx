import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Kurumsal Portal</h3>
                <p className="text-blue-200 text-sm">Dijital Hizmet Platformu</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Vatandaşlarımıza en iyi dijital hizmeti sunmak için çalışıyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Başvurular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Duyurular
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Destek</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Geri Bildirim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-blue-200 text-sm">Güncel haberler ve duyurular için sosyal medyada bizi takip edin.</p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">© 2024 Kurumsal Portal. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Erişilebilirlik
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
