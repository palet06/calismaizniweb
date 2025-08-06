"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download } from "lucide-react";

export function DownloadGuides() {
  const [selection, setSelection] = React.useState("");
  const handleValueChange = (value: string) => {
    setSelection(value);
    let fileToDownload: string | undefined;
    switch (value) {
      case "eizin":
        fileToDownload = "kilavuz.pdf";
        break;
      case "gk-uygulama":
        fileToDownload = "gkss-uygulama.pdf";
        break;
      case "akademisyen":
        fileToDownload = "akademisyen.pdf";
        break;
      case "hayvancilik":
        fileToDownload = "hayvancilik.pdf";
        break;

      default:
        break;
    }

    if (!fileToDownload) return;

    const link = document.createElement("a");
    link.href = fileToDownload;
    link.download = fileToDownload;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSelection("");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <Download className="w-4 h-4 mr-2" />
          İndir
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel>Kılavuzlar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selection}
          onValueChange={handleValueChange}
        >
          <DropdownMenuRadioItem value="eizin" className="cursor-pointer">
            e-İzin Yabancıların Çalışma İzinleri Başvuru Kılavuzu
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="gk-uygulama" className="cursor-pointer">
            Geçici Koruma Sağlanan Yabancıların Çalışma İzinlerine Dair Uygulama
            Rehberi
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="akademisyen" className="cursor-pointer">
            Yabancı Akademisyenlerin Çalışma İzni Başvuru Kılavuzu
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="hayvancilik" className="cursor-pointer">
            Hayvancılık İşletmelerinde İstihdam Edilecek Çoban ve Hayvan
            Bakıcıları İçin Çalışma İzni Başvuru Süreçleri
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
