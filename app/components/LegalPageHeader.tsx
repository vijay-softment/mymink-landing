"use client";

import Link from "next/link";
import Image from "next/image";

interface LegalPageHeaderProps {
  title: string;
}

export default function LegalPageHeader({ title }: LegalPageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/images/icons.png"
                alt="my MINK logo"
                width={32}
                height={32}
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
                priority
              />
              <span className="text-base md:text-lg font-bold text-text-black">
                my MINK
              </span>
            </Link>
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
            <h1 className="hidden sm:block text-base md:text-lg lg:text-xl font-bold text-text-black truncate max-w-[200px] md:max-w-none">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

