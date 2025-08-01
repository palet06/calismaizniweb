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

export function DownloadDropdown() {
  const [selection, setSelection] = React.useState("");
  const handleValueChange = (value: string) => {
    setSelection(value);
    let fileToDownload: string | undefined;
    switch (value) {
      case "belirli":
        fileToDownload = "belirli-sureli-sozlesme-isyeri.doc";
        break;
      case "belirli-ev":
        fileToDownload = "belirli-sureli-sozlesme-ev-hizmetleri.doc";
        break;
      case "belirli-gk":
        fileToDownload = "belirli-sureli-sozlesme-gecici-koruma.doc";
        break;
      case "belirli-uk":
        fileToDownload = "belirli-sureli-sozlesme-isyeri.doc";
        break;

      default:
        break;
    }

    if (!fileToDownload) return;

    const link = document.createElement("a");
    link.href = fileToDownload; // public klasörü kök URL'den erişilebilir
    link.download = fileToDownload; // İndirilecek dosyanın adı
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
        <DropdownMenuLabel>Sözleşmeler</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selection}
          onValueChange={handleValueChange}
        >
          <DropdownMenuRadioItem value="belirli" className="cursor-pointer">
            Belirli Süreli İş Sözleşmesi
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="belirli-ev" className="cursor-pointer">
            Belirli Süreli İş Sözleşmesi (Ev Hizmetleri)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="belirli-gk" className="cursor-pointer">
            Belirli Süreli İş Sözleşmesi (Geçici Koruma Sağlanan Yabancılar -
            Türkçe Arapça
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="belirli-uk" className="cursor-pointer">
            Belirli Süreli İş Sözleşmesi (Uluslararası Koruma Sağlananlar İçin
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
