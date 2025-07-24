import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="tech" className="py-16 bg-blue-50 scroll-mt-40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Türkiye - <span className="text-[#ff2d5f]">TECH</span>
              <span className="text-[#507df0]">VISA</span>{" "}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Eşsiz tarihi, zengin kültürü ve muhteşem doğasıyla Modern yaşamın
              tüm imkanlarıyla Batının doğuya, doğunun batıya açıldığı kapı
              Türkiye Yaşamın her alanında benzersiz fırsatlar sunuyor.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Türkiye Tech Visa’ya özel 3 yıllık çalışma izni</h4>
                  
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Ailelerin kolay oturma izni süreçleri

                  </h4>
                  
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Teknoloji geliştirme bölgelerinde gelir vergisi ve kurumlar vergisi muafiyetleri</h4>
                  
                </div>
              </div>
            </div>
            <Link href="https://www.turkiyetechvisa.gov.tr" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Hemen Başvur
            </Button>
            </Link>
          </div>
          <div className="flex flex-row justify-end items-center">
            <Image
              src="/tech-visa.png"
              alt="TECH Visa"
              width={550}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
