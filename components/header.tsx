"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Home,
} from "lucide-react";

import { Search, Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

export default function Header() {
  const [activeMode, setActiveMode] = useState<"workers" | "employers">(
    "workers"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  const yonetmelikler: { title: string; href: string; description: string }[] =
    [
      {
        title:
          "Doğrudan Yabancı Yatırımlarda Yabancı Uyruklu Personel İstihdamı Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5453&MevzuatTur=7&MevzuatTertip=5",
        description:
          "Resmî Gazete Tarihi: 29.08.2003 Resmî Gazete Sayısı: 25214",
      },
      {
        title: "Turkuaz Kart Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=23413&MevzuatTur=7&MevzuatTertip=5",
        description:
          "Resmî Gazete Tarihi: 14.03.2017 Resmî Gazete Sayısı: 30007",
      },
      {
        title:
          "Geçici Koruma Sağlanan Yabancıların Çalışma İzinlerine Dair Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20168375&MevzuatTur=3&MevzuatTertip=5",
        description:
          "Resmî Gazete Tarihi: 15.01.2016 Resmî Gazete Sayısı: 29594",
      },
      {
        title:
          "Uluslararası Koruma Başvuru Sahibi ve Uluslararası Koruma Statü Sahibi Kişilerin Çalışmasına Dair Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=21517&MevzuatTur=7&MevzuatTertip=5",
        description:
          "Resmî Gazete Tarihi: 26.04.2016 Resmî Gazete Sayısı: 29695",
      },
      {
        title:
          "Serbest Bölgelerde Çalışacak Yabancıların Çalışma İzinlerine Dair Yönetmelik",
        href: "https://www.resmigazete.gov.tr/eskiler/2017/05/20170527-11.htm",
        description:
          "Resmî Gazete Tarihi: 27.05.2017 Resmî Gazete Sayısı: 30078",
      },
    ];

  return (
    <>
      <div className="bg-blue-900 py-2 border-b-[1px] border-b-slate-600">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-1">
            <Button
              variant={activeMode === "workers" ? "default" : "ghost"}
              className={`px-6 py-2 text-sm font-medium text-black hover:bg-teal-200 ${
                activeMode === "workers"
                  ? "bg-teal-100/95 hover:bg-teal-200"
                  : "text-slate-400"
              }`}
              onClick={() => setActiveMode("workers")}
            >
              Nitelikli Çalışanlar İçin
            </Button>
            <Button
              variant={activeMode === "employers" ? "default" : "ghost"}
              className={`px-6 py-2 text-sm font-medium text-black  hover:bg-teal-200 ${
                activeMode === "employers"
                  ? "bg-teal-100/95 hover:bg-teal-200"
                  : "text-slate-400"
              }`}
              onClick={() => setActiveMode("employers")}
            >
              İşverenler İçin
            </Button>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50  border-b border-blue-800 bg-blue-900 text-white">
        {/* Top toggle buttons */}

        {/* Main header */}
        <div className=" border-gray-200 ">
          <div className="container mx-auto px-4 py-4 md:px-8">
            <div className="flex items-center justify-between">
              {/* Logo section */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className=" text-white flex items-center justify-center">
                    <Link href="/">
                      <Image
                        src="csgb-logo.svg"
                        alt="CSGB Logo"
                        width={64}
                        height={64}
                        priority
                      />
                    </Link>
                  </div>
                  <div className="border-l-4 border-slate-600 pl-3">
                    <div className="text-sm lg:text-xl font-bold text-white">
                      T.C.
                    </div>
                    <div className="text-xs lg:text-lg text-white">
                      Çalışma ve Sosyal Güvenlik Bakanlığı
                    </div>
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center space-x-6">
                {/* Contact icons */}
                <div className="hidden md:flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 text-white  hover:text-blue-800"
                  >
                    <Mail className="w-5 h-5 " />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2t text-white  hover:text-blue-800"
                  >
                    <Phone className="w-5 h-5 " />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-blue-800"
                  >
                    SSS
                  </Button>
                </div>

                <div className="hidden md:flex items-center">
                  <div className="relative">
                    <Input
                      placeholder="Konu ara..."
                      className="w-64 pr-12 border-slate-400"
                    />
                    <Button
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 bg-transparent hover:bg-blue-600"
                    >
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-2 text-sm">
                  <span className="font-bold text-white/75 border-b-2 border-white/75 pb-1">
                    TR
                  </span>
                  <span className="text-gray-500 hover:text-blue-600 cursor-pointer">
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-blue-900  border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 md:px-8">
            <div className="py-3 ">
              <NavigationMenu
                viewport={false}
                className="hidden lg:flex font-[400] text-3xl  w-full  "
              >
                <NavigationMenuList className="flex gap-5 md:gap-10 w-full items-end ">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className=" hover:bg-white hover:text-black"
                      >
                        <Home className="size-5 hover:text-black " />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer bg-blue-900 font-[400] whitespace-nowrap">
                      İlgili Kanunlar
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-20">
                      <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {kanunlar.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer bg-blue-900 font-[400] whitespace-nowrap">
                      İlgili Yönetmelikler
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-20">
                      <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {yonetmelikler.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/#tech"
                        className=" hover:bg-white hover:text-black whitespace-nowrap"
                      >
                        TECHVISA
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/criteria"
                        className=" hover:bg-white hover:text-black whitespace-nowrap"
                      >
                        Değerlendirme Kriterleri
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/annotations"
                        className=" hover:bg-white hover:text-black whitespace-nowrap"
                      >
                        İzin Şerhleri
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#">Components</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="#">Documentation</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="#">Blocks</Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/restricted-professions"
                        className=" hover:bg-white hover:text-black whitespace-nowrap"
                      >
                        Kısıtlamalar
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="flex-row items-center gap-2"
                            >
                              <CircleHelpIcon />
                              Backlog
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="flex-row items-center gap-2"
                            >
                              <CircleIcon />
                              To Do
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="flex-row items-center gap-2"
                            >
                              <CircleCheckIcon />
                              Done
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <MobileNav />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} target="_blank">
          <div className="text-sm font-semibold tracking-wide">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
