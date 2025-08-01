"use client";

import type React from "react";

import { faqData } from "@/lib/faqdata";
import { categories } from "@/lib/faqdata";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  X,
  HelpCircle,
  Globe,
  Mail,
  Phone,
  AlertCircle,
  Send,
  Download,
} from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message (you could use a toast notification)
    alert(
      "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız."
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <HelpCircle className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Sıkça Sorulan Sorular</h1>
            <p className="text-xl text-blue-100 mb-8">
              Çalışma izni ile ilgili en çok merak edilen konular ve detaylı
              cevapları
            </p>
         
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Search Input */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Aramak istediğiniz soru veya konu..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-10"
                    />
                    {searchTerm && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategory === category.id
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex items-center space-x-2"
                      >
                        {category.icon}
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="ml-1">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>

                  {/* Active Filters */}
                  {(searchTerm || selectedCategory !== "all") && (
                    <div className="flex items-center space-x-2 pt-2 border-t">
                      <span className="text-sm text-gray-600">
                        Aktif filtreler:
                      </span>
                      {searchTerm && (
                        <Badge
                          variant="secondary"
                          className="flex items-center space-x-1"
                        >
                          <span>{searchTerm}</span>
                          <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => setSearchTerm("")}
                          />
                        </Badge>
                      )}
                      {selectedCategory !== "all" && (
                        <Badge
                          variant="secondary"
                          className="flex items-center space-x-1"
                        >
                          <span>
                            {
                              categories.find((c) => c.id === selectedCategory)
                                ?.name
                            }
                          </span>
                          <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => setSelectedCategory("all")}
                          />
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearSearch}
                        className="text-xs"
                      >
                        Tümünü Temizle
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <p className="text-gray-600">
                    {searchTerm && ` "${searchTerm}" için `}
                    <b>{filteredFAQs.length}</b> soru bulundu
                    {selectedCategory !== "all" &&
                      ` ${
                        categories.find((c) => c.id === selectedCategory)?.name
                      } kategorisinde`}
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={`item-${faq.id}`}
                      className="border-0"
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer">
                          <div className="flex items-start space-x-4 text-left">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
                              {faq.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                                {faq.question}
                              </h3>
                              <Badge variant="outline" className="mt-2">
                                {faq.categoryName}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="ml-14">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sonuç Bulunamadı
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Aradığınız kriterlere uygun soru bulunamadı. Lütfen farklı
                    anahtar kelimeler deneyin.
                  </p>
                  <Button onClick={clearSearch} variant="outline">
                    Filtreleri Temizle
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Aradığınız cevabı bulamadınız mı?
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Sorunuzu bize iletin, uzmanlarımız en kısa sürede size dönüş
                  yapacaktır.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Adınızı ve soyadınızı girin"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-posta Adresi *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Mesajınız *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Sorunuzu detaylı bir şekilde açıklayın..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
        <section className="py-12 bgbg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Destek ve İletişim
              </h2>
              <p className="text-gray-600">
                Sorularınız için bizimle iletişime geçin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Çağrı Merkezi
                  </h3>
                  <p className="text-gray-600 mb-2">7/24 Destek Hattı</p>
                  <p className="font-semibold text-green-600">ALO 170</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    E-posta Desteği
                  </h3>
                  <p className="text-gray-600 mb-2">Detaylı Sorular İçin</p>
                  <p className="font-semibold text-blue-600">
                    eizindestek@csgb.gov.tr
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Rehber ve Formlar
                  </h3>
                  <p className="text-gray-600 mb-2">İndirilebilir Belgeler</p>
                  <Button variant="outline" size="sm">
                    İndir
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
