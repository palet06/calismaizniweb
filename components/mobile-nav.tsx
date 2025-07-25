// components/MobileNav.tsx
"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <nav className="mt-4 w-full">
            <ul className="flex flex-col space-y-1 px-4">
              <li>
                <Link href="/" className="block py-2 text-sm font-medium">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="menu1">
                    <AccordionTrigger className="py-2 text-sm font-medium">
                      Hizmetler
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <ul className="space-y-1">
                        <li>
                          <Link href="/hizmet1" className="block py-1 text-sm">
                            Hizmet 1
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmet2" className="block py-1 text-sm">
                            Hizmet 2
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="menu2">
                    <AccordionTrigger className="py-2 text-sm font-medium">
                      Hakkımızda
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <ul className="space-y-1">
                        <li>
                          <Link href="/ekip" className="block py-1 text-sm">
                            Ekibimiz
                          </Link>
                        </li>
                        <li>
                          <Link href="/vizyon" className="block py-1 text-sm">
                            Vizyonumuz
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="block py-2 text-sm font-medium"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
