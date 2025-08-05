/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Users,
  Globe,
  GraduationCap,
  MapPin,
  Calendar,
  FileText,
  Download,
  BarChart3,
  PieChartIcon,
} from "lucide-react";

export default function WorkPermitStatistics() {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Statistical data based on the PDF
  const statisticsData = {
    "2024": {
      total: 300852,
      byDocumentType: [
        { type: "Çalışma İzni", count: 300852, percentage: 69.4 },
        { type: "Serbest Bölge", count: 435, percentage: 0.1 },
        { type: "Muafiyet", count: 11912, percentage: 2.7 },
        { type: "Muafiyet Bilgi Formu", count: 120284, percentage: 27.7 },
      ],
      byGender: [
        { gender: "Erkek", count: 213491, percentage: 71.0 },
        { gender: "Kadın", count: 87361, percentage: 29.0 },
      ],
      byEducation: [
        { level: "İlkokul", count: 58554 },
        { level: "Ortaokul", count: 55176 },
        { level: "Lise ve Dengi", count: 117563 },
        { level: "Ön Lisans", count: 9301 },
        { level: "Lisans", count: 49257 },
        { level: "Yüksek Lisans", count: 8696 },
        { level: "Doktora", count: 2305 },
      ],
      topNationalities: [
        { country: "Suriye", count: 117334 },
        { country: "Türkmenistan", count: 32276 },
        { country: "Rusya", count: 17267 },
        { country: "Özbekistan", count: 15644 },
        { country: "Kırgızistan", count: 10869 },
        { country: "İran", count: 10466 },
        { country: "Endonezya", count: 8930 },
        { country: "Kazakistan", count: 8597 },
        { country: "Afganistan", count: 8335 },
        { country: "Azerbaycan", count: 7560 },
      ],
      topProvinces: [
        { province: "İstanbul", count: 103025 },
        { province: "Antalya", count: 35953 },
        { province: "Mersin", count: 30079 },
        { province: "Bursa", count: 18296 },
        { province: "Ankara", count: 15121 },
        { province: "Gaziantep", count: 14879 },
        { province: "İzmir", count: 8733 },
        { province: "Kocaeli", count: 8250 },
        { province: "Konya", count: 6881 },
        { province: "Muğla", count: 6635 },
      ],
      monthlyData: [
        { month: "Ocak", count: 18777 },
        { month: "Şubat", count: 20784 },
        { month: "Mart", count: 25931 },
        { month: "Nisan", count: 22089 },
        { month: "Mayıs", count: 28557 },
        { month: "Haziran", count: 20235 },
        { month: "Temmuz", count: 25293 },
        { month: "Ağustos", count: 22633 },
        { month: "Eylül", count: 24672 },
        { month: "Ekim", count: 33048 },
        { month: "Kasım", count: 30059 },
        { month: "Aralık", count: 28774 },
      ],
    },
    "2023": {
      total: 239835,
      byGender: [
        { gender: "Erkek", count: 173536, percentage: 72.4 },
        { gender: "Kadın", count: 66299, percentage: 27.6 },
      ],
    },
    "2022": {
      total: 212682,
      byGender: [
        { gender: "Erkek", count: 154853, percentage: 72.8 },
        { gender: "Kadın", count: 57829, percentage: 27.2 },
      ],
    },
  };

  const currentData =
    statisticsData[selectedYear as keyof typeof statisticsData];

  const COLORS = [
    "#3B82F6",
    "#EF4444",
    "#10B981",
    "#F59E0B",
    "#8B5CF6",
    "#EC4899",
    "#06B6D4",
    "#84CC16",
  ];

  const definitions = [
    {
      term: "Yabancı",
      definition:
        "Türkiye Cumhuriyeti Devleti ile vatandaşlık bağı bulunmayan kişi.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      term: "Çalışma İzni",
      definition:
        "Çalışma ve Sosyal Güvenlik Bakanlığınca resmi bir belge şeklinde düzenlenen ve geçerlilik süresi içinde yabancıya Türkiye'de çalışma ve ikamet hakkı veren izin.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      term: "Çalışma İzni Muafiyeti",
      definition:
        "Çalışma ve Sosyal Güvenlik Bakanlığınca resmi bir belge şeklinde düzenlenen ve geçerlilik süresi içinde yabancıya Türkiye'de çalışma izni almaksızın çalışma ve ikamet hakkı veren muafiyet.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <BarChart3 className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Çalışma İzni İstatistikleri
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Türkiye'de yabancı çalışanlar için detaylı istatistiksel veriler
              ve analizler
            </p>
          </div>
        </div>
      </section>

      {/* Year Selection */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Yıl Seçimi
                      </h3>
                      <p className="text-sm text-gray-600">
                        İstatistikleri görüntülemek istediğiniz yılı seçin
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-0  sm:flex-row sm:items-center space-x-0 sm:space-x-4">
                    <Select
                      value={selectedYear}
                      onValueChange={setSelectedYear}
                    >
                      <SelectTrigger className="w-38">
                        <SelectValue placeholder="Yıl seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-0 sm:mr-2" />
                      İndir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Temel Tanımlar
              </h2>
              <p className="text-gray-600">
                İstatistiklerde kullanılan temel kavramlar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {definitions.map((def, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row text-center lg:text-left items-center lg:items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                        {def.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {def.term}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {def.definition}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedYear} Yılı Genel Görünüm
              </h2>
              <p className="text-gray-600">
                Toplam çalışma izni sayıları ve dağılımı
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {currentData?.total.toLocaleString()}
                  </div>
                  <p className="text-gray-600">Toplam Çalışma İzni</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedYear === "2024"
                      ? "+25.4%"
                      : selectedYear === "2023"
                      ? "+12.8%"
                      : "+26.4%"}
                  </div>
                  <p className="text-gray-600">Önceki Yıla Göre Artış</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    80+
                  </div>
                  <p className="text-gray-600">Farklı Ülke</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    81
                  </div>
                  <p className="text-gray-600">İl Genelinde</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Document Type Distribution */}
      {selectedYear === "2024" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <PieChartIcon className="w-5 h-5" />
                      <span>Belge Türüne Göre Dağılım</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={currentData.byDocumentType}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ type, percentage }) =>
                            `${type}: %${percentage}`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
                        >
                          {currentData.byDocumentType.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: any) => [
                            value.toLocaleString(),
                            "Sayı",
                          ]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Belge Türü Detayları</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentData.byDocumentType.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            ></div>
                            <span className="font-medium text-gray-900">
                              {item.type}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-900">
                              {item.count.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">
                              %{item.percentage}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gender Distribution */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cinsiyete Göre Dağılım
              </h2>
              <p className="text-gray-600">
                {selectedYear} yılı cinsiyet bazlı istatistikler
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Cinsiyet Dağılımı</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={currentData?.byGender}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="gender" />
                      <YAxis />
                      <Tooltip
                        formatter={(value: any) => [
                          value.toLocaleString(),
                          "Sayı",
                        ]}
                      />
                      <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cinsiyet İstatistikleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentData?.byGender.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">
                            {item.gender}
                          </span>
                          <span className="text-sm text-gray-600">
                            {item.count.toLocaleString()} (%{item.percentage})
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              index === 0 ? "bg-blue-600" : "bg-pink-500"
                            }`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Level Distribution */}

      {selectedYear === "2024" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Eğitim Düzeyine Göre Dağılım</h2>
                <p className="text-gray-600">Çalışma izni sahiplerinin eğitim durumu</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>Eğitim Düzeyi İstatistikleri</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={currentData.byEducation} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="level" type="category" width={120} />
                      <Tooltip formatter={(value: any) => [value.toLocaleString(), "Sayı"]} />
                      <Bar dataKey="count" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Top Nationalities */}
      {selectedYear === "2024" && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto ">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  En Çok Çalışma İzni Alan Ülkeler
                </h2>
                <p className="text-gray-600">2024 yılı ülke bazlı sıralama</p>
              </div>

              <Card className="p-0 ">
                <CardContent className="p-0 ">
                  <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
                    <table className="w-full">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Sıra
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Ülke
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold">
                            Çalışma İzni Sayısı
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold">
                            Oran (%)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* {currentData.topNationalities.map((item, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {item.country}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                              {item.count.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 text-right">
                              {((item.count / currentData.total) * 100).toFixed(
                                1
                              )}
                              %
                            </td>
                          </tr>
                        ))} */}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Monthly Distribution */}
      {selectedYear === "2024" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Aylık Dağılım
                </h2>
                <p className="text-gray-600">
                  2024 yılı boyunca aylık çalışma izni sayıları
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Aylık Çalışma İzni Sayıları</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={currentData.monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value: any) => [
                          value.toLocaleString(),
                          "Çalışma İzni",
                        ]}
                      />
                      <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#3B82F6"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Top Provinces */}
      {selectedYear === "2024" && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  En Çok Çalışma İzni Verilen İller
                </h2>
                <p className="text-gray-600">2024 yılı il bazlı sıralama</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>İl Bazlı Dağılım</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={currentData.topProvinces.slice(0, 8)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="province"
                          angle={-45}
                          textAnchor="end"
                          height={100}
                        />
                        <YAxis />
                        <Tooltip
                          formatter={(value: any) => [
                            value.toLocaleString(),
                            "Çalışma İzni",
                          ]}
                        />
                        <Bar dataKey="count" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>İl Sıralaması</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {currentData.topProvinces
                        .slice(0, 10)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                {index + 1}
                              </div>
                              <span className="font-medium text-gray-900">
                                {item.province}
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">
                                {item.count.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-600">
                                %
                                {(
                                  (item.count / currentData.total) *
                                  100
                                ).toFixed(1)}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Detaylı İstatistikler</h2>
            <p className="text-xl text-blue-100 mb-8">
              Daha detaylı istatistiksel veriler ve analizler için raporlarımızı
              inceleyebilirsiniz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent w-[180px]"
              >
                <Download className="w-5 h-5 mr-2" />
                Rapor İndir
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent w-[180px]"
              >
                İstatistik Arşivi
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
