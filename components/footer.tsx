import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center">
                <Image
                  src="csgb-logo.svg"
                  alt="CSGB Logo"
                  width={64}
                  height={64}
                  priority
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">T.C.</h3>
                <p className="text-blue-200 text-sm">
                  Çalışma ve Sosyal Güvenlik Bakanlığı
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İlgili Yönetmelikler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İlgili Kanunlar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TECHVISA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Değerlendirme Kriterleri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İzin Şerhleri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kısıtlamalar
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
            <p className="text-blue-200 text-sm">
              Güncel haberler ve duyurular için sosyal medyada bizi takip edin.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Çalışma ve Sosyal Güvenlik Bakanlığı. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Kullanım Şartları
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Erişilebilirlik
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
