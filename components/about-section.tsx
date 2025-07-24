import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-28 items-center justify-end ">
          <div>
            <Image
              src="/turkiye-1.png"
              alt="Profesyonel ekip"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Türkiye'de Çalışmak</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
             Türkiye, dinamik ekonomisi ve stratejik konumuyla iş fırsatları sunan bir ülkedir. Gelişen sektörleri ve genç iş gücüyle yabancılar için cazip çalışma ortamları sağlar.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Geniş iş alanları ve sektör çeşitliliği
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Rekabetçi maaş ve yaşam maliyeti dengesi
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Zengin kültürel deneyim ve stratejik coğrafi konum
              </li>
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700">Daha Fazla Bilgi</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
