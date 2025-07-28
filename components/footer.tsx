import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center">
                <Link href="/" >
                <Image
                  src="csgb-logo.svg"
                  alt="CSGB Logo"
                  width={64}
                  height={64}
                  priority
                />
                </Link>
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
                <Link href="/#tech" className="hover:text-white transition-colors">
                  TECHVISA
                </Link>
              </li>
              <li>
                <a href="/criteria" className="hover:text-white transition-colors">
                  Değerlendirme Kriterleri
                </a>
              </li>
              <li>
                <a href="annotations" className="hover:text-white transition-colors">
                  İzin Şerhleri
                </a>
              </li>
              <li>
                <a href="/restricted-professions" className="hover:text-white transition-colors">
                  Kısıtlamalar
                </a>
              </li>
              <li>
                <a href="/statistics" className="hover:text-white transition-colors">
                  İstatistikler
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Destek</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="https://www.alo170.gov.tr" target="_blank" className="hover:text-white transition-colors">
                  Yardım Merkezi - ALO 170
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
              
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/csgb.uigm"
                target="_blank"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/csgb_uigm"
                target="_blank"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/csgb_uigm"
                target="_blank"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjG12ECuhvrQwIIBYJshRwA"
                target="_blank"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://tr.linkedin.com/in/csgbuigm"
                target="_blank"
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
              © 2025 Çalışma ve Sosyal Güvenlik Bakanlığı. Tüm hakları saklıdır.
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
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
