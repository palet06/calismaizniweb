// components/MobileNav.tsx
"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import SearchSection from "./SearchSection";

const kanunlar: { title: string; href: string; description: string }[] = [
  {
    title: "6735 Sayılı Uluslararası İşgücü Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6735&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 13.08.2016 Resmî Gazete Sayısı: 29800",
  },
  {
    title: "6458 Sayılı Yabancılar ve Uluslararası Koruma Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6458&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 11.04.2013 Resmî Gazete Sayısı: 28615",
  },
  {
    title: "4875 Sayılı Doğrudan Yabancı Yatırımlar Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=4875&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 17.06.2003 Resmî Gazete Sayısı: 25141",
  },
  {
    title: "5901 Sayılı Türk Vatandaşlığı Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5901&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 12.06.2009 Resmî Gazete Sayısı: 27256",
  },
  {
    title: "3218 Sayılı Serbest Bölgeler Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=3218&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 15.06.1985 Resmî Gazete Sayısı: 18785",
  },
  {
    title: "5510 Sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5510&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 16.06.2006 Resmî Gazete Sayısı: 26200",
  },
  {
    title: "492 Sayılı Harçlar Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=492&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 17.07.1964 Resmî Gazete Sayısı: 11756",
  },
  {
    title: "2547 Sayılı Yükseköğretim Kanunu",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=2547&MevzuatTur=1&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 06.11.1981 Resmî Gazete Sayısı: 17506",
  },
];
const yonetmelikler: { title: string; href: string; description: string }[] = [
  {
    title:
      "Doğrudan Yabancı Yatırımlarda Yabancı Uyruklu Personel İstihdamı Hakkında Yönetmelik",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5453&MevzuatTur=7&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 29.08.2003 Resmî Gazete Sayısı: 25214",
  },
  {
    title: "Turkuaz Kart Yönetmeliği",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=23413&MevzuatTur=7&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 14.03.2017 Resmî Gazete Sayısı: 30007",
  },
  {
    title:
      "Geçici Koruma Sağlanan Yabancıların Çalışma İzinlerine Dair Yönetmelik",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20168375&MevzuatTur=3&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 15.01.2016 Resmî Gazete Sayısı: 29594",
  },
  {
    title:
      "Uluslararası Koruma Başvuru Sahibi ve Uluslararası Koruma Statü Sahibi Kişilerin Çalışmasına Dair Yönetmelik",
    href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=21517&MevzuatTur=7&MevzuatTertip=5",
    description: "Resmî Gazete Tarihi: 26.04.2016 Resmî Gazete Sayısı: 29695",
  },
  {
    title:
      "Serbest Bölgelerde Çalışacak Yabancıların Çalışma İzinlerine Dair Yönetmelik",
    href: "https://www.resmigazete.gov.tr/eskiler/2017/05/20170527-11.htm",
    description: "Resmî Gazete Tarihi: 27.05.2017 Resmî Gazete Sayısı: 30078",
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden ">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-64 p-0 bg-blue-900 border-0 shadow-teal-100/95 "
        >
          <SheetTitle>
            <div className="flex items-center px-2 py-4">
              <div className="flex items-center space-x-3">
                <div className=" text-white flex items-center justify-center">
                  <Image
                    src="csgb-logo.svg"
                    alt="CSGB Logo"
                    width={58}
                    height={58}
                    priority
                  />
                </div>
                <div className=" pl-1">
                  <div className="text-sm font-bold text-white">T.C.</div>
                  <div className="text-xs  text-white">
                    Çalışma ve Sosyal Güvenlik Bakanlığı
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">

            <SearchSection classNameProp="lg:hidden " classNameProp2="lg:hidden flex flex-row justify-center gap-2  items-center space-x-4 text-white" />
            </div>
                

            <nav className="mt-4 w-full text-white overflow-y-auto  h-[calc(100vh-150px)]">
              <ul className="flex flex-col space-y-1 px-4 gap-3">
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/home"
                    className="block py-2 text-sm font-medium"
                  >
                    Anasayfa
                  </Link>
                </li>

                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="kanunlar">
                      <AccordionTrigger className="py-2 text-sm font-medium cursor-pointer">
                        İlgili Kanunlar
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul className="space-y-1">
                          {kanunlar.map((kanun) => (
                            <li key={kanun.href} className="cursor-pointer">
                              <a
                                onClick={() => setOpen(false)}
                                href={kanun.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-1 text-sm text-gray-300 hover:text-gray-200 "
                                title={kanun.description}
                              >
                                {kanun.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="yonetmelikler">
                      <AccordionTrigger className="py-2 text-sm font-medium cursor-pointer hover:no-underline ">
                        İlgili Yönetmelikler
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul className="space-y-1">
                          {yonetmelikler.map((yonetmelik) => (
                            <li key={yonetmelik.href} className="cursor-pointer">
                              <a
                                onClick={() => setOpen(false)}
                                href={yonetmelik.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-1 text-sm  text-gray-300 hover:text-gray-200 "
                                title={yonetmelik.description}
                              >
                                {yonetmelik.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>

                
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/criteria"
                    className="block py-2 text-sm font-medium"
                  >
                    Değerlendirme Kriterleri
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/annotations"
                    className="block py-2 text-sm font-medium"
                  >
                    İzin Şerhleri
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/restricted-professions"
                    className="block py-2 text-sm font-medium"
                  >
                    Kısıtlamalar
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/statistics"
                    className="block py-2 text-sm font-medium"
                  >
                    İstatistikler
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/contact"
                    className="block py-2 text-sm font-medium"
                  >
                    İletişim 
                  </Link>
                </li>
              </ul>
            </nav>
            

            
            
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
}
