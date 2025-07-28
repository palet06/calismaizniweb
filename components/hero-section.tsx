/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden md:px-5">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          // src="/calisma-hero.png"
          src="/hero-alternative.png"
          alt="Çalışma Hero"
          fill
          className="object-cover"
        />
        {/* <video
          src="/hero-animation-canva.mp4"
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none blur-xs grayscale-50"
        ></video> */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Hızlı Erişim */}
      <div className="relative z-10 container  px-4 md:px-8  flex items-center justify-between h-full mx-auto ">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-xl mx-auto md:mx-0">
          <Card className="bg-teal-100/95 backdrop-blur-sm border-0 shadow-lg max-w-xl max-h-[30rem] h-full w-full flex flex-col justify-between">
            <CardHeader className="pb-4 flex h-full flex-col justify-between">
              <div className="flex flex-col gap-3">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Hızlı Erişim
                </CardTitle>
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                  Türkiye'de çalışma ve yaşama seçeneklerinizi kontrol
                  edebilirsiniz.
                </p>
              </div>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed indent-3 text-justify">
                <b className="pr-3">
                  ⭢ 
                  </b> 
                  Dünyanın en büyük ve üretken ekonomilerinden birinin
                avantajlarından yararlanın ve çok çeşitli sektörlerde,
                şirketlerde ve çalışma alanlarında kariyer fırsatları yakalayın.
              </p>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed indent-3 text-justify">
                <b className="pr-3">
                  ⭢ 
                  </b>Çeşitli mesleki fırsatlar ve birinci sınıf kariyer
                seçenekleriyle dinamik bir çalışma dünyasına dalın.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-800 text-md md:text-lg font-medium mb-3">
                  Türkiye'de şunu yapmak istiyorum...
                </p>
                <Select>
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder="Lütfen seçin" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem className="text-lg" value="work">Çalışmak</SelectItem>
                    <SelectItem className="text-lg" value="study">
                      Eğitim almak / Staj yapmak
                    </SelectItem>
                    <SelectItem className="text-lg" value="tech">
                      Teknoloji girişimleri / TechVisa
                    </SelectItem>
                    <SelectItem className="text-lg" value="ability">Yetenek transferi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full text-md md:text-lg bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                Başla
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
