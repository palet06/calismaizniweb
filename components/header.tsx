"use client";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import SearchSection from "./SearchSection";
import { kanunlar, yonetmelikler } from "@/lib/kanunlarYonetmeliklerData";

export default function Header() {
  const pathname = usePathname();
  const [activeMenuItem, setActiveMenuItem] = useState("/");
  useEffect(() => {
    const checkActiveMenuItem = () => {
      if (pathname !== activeMenuItem) {
        setActiveMenuItem("");
      } else {
        setActiveMenuItem(pathname);
      }
    };

    checkActiveMenuItem();
  }, [pathname]);

  const [activeMode, setActiveMode] = useState<"workers" | "employers">(
    "workers"
  );

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
        <div className=" border-gray-200 ">
          <div className="container mx-auto px-4 py-4 md:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className=" text-white flex items-center justify-center">
                    <Link href="/home">
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

              <SearchSection
                classNameProp="hidden md:flex items-center space-x-6"
                classNameProp2="md:flex items-center space-x-4"
              />
            </div>
          </div>
        </div>

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
                        href="/home"
                        className="hover:bg-white hover:text-black whitespace-nowrap "
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
                        href="/criteria"
                        className={` hover:bg-white hover:text-black whitespace-nowrap ${
                          activeMenuItem === "/criteria" &&
                          "bg-white text-black"
                        }`}
                        onClick={() => setActiveMenuItem("/criteria")}
                      >
                        Değerlendirme Kriterleri
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/annotations"
                        className={` hover:bg-white hover:text-black whitespace-nowrap ${
                          activeMenuItem === "/annotations" &&
                          "bg-white text-black"
                        }`}
                        onClick={() => setActiveMenuItem("/annotations")}
                      >
                        İzin Şerhleri
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/restricted-professions"
                        className={` hover:bg-white hover:text-black whitespace-nowrap ${
                          activeMenuItem === "/restricted-professions" &&
                          "bg-white text-black"
                        }`}
                        onClick={() =>
                          setActiveMenuItem("/restricted-professions")
                        }
                      >
                        Kısıtlamalar
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/statistics"
                        className={` hover:bg-white hover:text-black whitespace-nowrap ${
                          activeMenuItem === "/statistics" &&
                          "bg-white text-black"
                        }`}
                        onClick={() => setActiveMenuItem("/statistics")}
                      >
                        İstatistikler
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className={` hover:bg-white hover:text-black whitespace-nowrap ${
                          activeMenuItem === "/contact" && "bg-white text-black"
                        }`}
                        onClick={() => setActiveMenuItem("/contact")}
                      >
                        İletişim
                      </Link>
                    </NavigationMenuLink>
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
