"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState("")

  const handleStart = () => {
    if (selectedOption === "work") {
      router.push("/work-permit")
    }
    // Add other navigation logic for different options if needed
  }
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
      <div className="relative z-10 container  px-4 md:px-8  flex items-center h-full mx-auto">
        <div className="w-full max-w-md mx-auto md:mx-0">
          <Card className="bg-teal-100/95 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Hızlı Erişim
              </CardTitle>
              <p className="text-gray-700 text-sm leading-relaxed">
                Türkiye'de çalışma ve yaşama seçeneklerinizi kontrol
                edebilirsiniz.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-800 font-medium mb-3">
                  Türkiye'de şunu yapmak istiyorum...
                </p>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder="Lütfen seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="work">Çalışmak</SelectItem>
                    <SelectItem value="study">
                      Eğitim almak / Staj yapmak
                    </SelectItem>
                    <SelectItem value="tech">
                      Teknoloji girişimleri / TechVisa
                    </SelectItem>
                    <SelectItem value="ability">Yetenek transferi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleStart} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                Başla
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
