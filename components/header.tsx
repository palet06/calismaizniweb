"use client"

import { Search, Menu, Phone, Mail, ChevronDown, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [activeMode, setActiveMode] = useState<"workers" | "employers">("workers")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      {/* Top toggle buttons */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1">
            
            <Button
              variant={activeMode === "workers" ? "default" : "ghost"}
              className={`px-6 py-2 text-sm font-medium ${activeMode ==="workers"&&'bg-[#155DFC]/70 hover:bg-[#155DFC]'}`}
              onClick={() => setActiveMode("workers")}
            >
              Nitelikli Çalışanlar İçin
            </Button>
            <Button
              variant={activeMode === "employers" ? "default" : "ghost"}
              className={`px-6 py-2 text-sm font-medium ${activeMode ==="employers"&&'bg-[#155DFC]/70 hover:bg-[#155DFC]'}`}
              onClick={() => setActiveMode("employers")}
            >
              İşverenler İçin
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className=" text-white flex items-center justify-center">
                  <Image 
                   src="csgb-logo.svg"
                   alt="CSGB Logo"
                    width={64}
                    height={64}
                   priority
                    
                  
                  />
                </div>
                <div className="border-l-4 border-gray-200 pl-3">
                  <div className="text-sm font-bold text-gray-900">T.C.</div>
                  <div className="text-xs text-gray-800">Çalışma ve Sosyal Güvenlik Bakanlığı</div>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-6">
              {/* Contact icons */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                  SSS
                </Button>
              </div>

              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Input placeholder="Konu ara..." className="w-64 pr-12 border-gray-300" />
                  <Button size="sm" className="absolute right-0 top-0 h-full px-3 bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Language options */}
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <span className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1">TR</span>
                <span className="text-gray-500 hover:text-blue-600 cursor-pointer">EN</span>
                
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <ul className="hidden md:flex items-center space-x-8">
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Türkiye'de Çalışmak</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Eğitim ve Meslek</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Vize ve İkamet</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Türkiye'de Yaşam</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Hizmetler</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Hakkımızda</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
            </ul>

            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                    Türkiye'de Çalışmak
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                    Eğitim ve Meslek
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                    Vize ve İkamet
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                    Türkiye'de Yaşam
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                    Hizmetler
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                    Hakkımızda
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
