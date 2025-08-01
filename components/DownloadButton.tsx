"use client";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

type ButtonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const DownloadButton = ({
  path,
  fileName,
  btnVariant,
  btnSize,
  btnClassName,
}: {
  path: string;
  fileName: string;
  btnVariant?: ButtonVariant;
  btnSize?: ButtonSize;
  btnClassName?: string;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = path ? path : ""; // public klasörü kök URL'den erişilebilir
    link.download = fileName; // İndirilecek dosyanın adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button
      variant={btnVariant ? btnVariant : "outline"}
      size={btnSize ? btnSize : "sm"}
      className={btnClassName ? btnClassName : "flex flex-row gap-3 w-full bg-transparent"}
      onClick={handleDownload}
    >
        <Download className="w-4 h-4 text-black" />
      İndir
    </Button>
  );
};

export default DownloadButton;
