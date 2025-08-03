"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Mail, Search, TvMinimalPlay } from "lucide-react";
import { Input } from "./ui/input";

const SearchSection = ({
  classNameProp,
  classNameProp2,
}: {
  classNameProp: string;
  classNameProp2: string;
}) => {
  return (
    <div className={classNameProp}>
      {/* Contact icons */}
      <div className={classNameProp2}>
        {/* <Button
          variant="ghost"
          size="sm"
          className="p-2 text-white  hover:text-blue-800"
        >
          <Mail className="w-5 h-5 " />
        </Button> */}
        <Link href="/videos">
          <Button
            variant="ghost"
            size="sm"
            className="p-2t text-white  hover:text-blue-800"
          >
            <TvMinimalPlay className="w-5 h-5 " />
          </Button>
        </Link>
        <Link href="/faq">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-blue-800"
          >
            SSS
          </Button>
        </Link>
      </div>

      <div className={classNameProp2}>
        <div className="relative">
          <Input
            placeholder="Konu ara..."
            className="w-60 pr-12 border-slate-400"
          />
          <Button
            size="sm"
            className="absolute right-0 top-0 h-full px-3 bg-transparent hover:bg-blue-600"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className={classNameProp2}>
        <span className="font-bold text-white/75 border-b-2 border-white/75 pb-1">
          TR
        </span>
        <span className="text-gray-500 hover:text-blue-600 cursor-pointer">
          EN
        </span>
      </div>
    </div>
  );
};

export default SearchSection;
