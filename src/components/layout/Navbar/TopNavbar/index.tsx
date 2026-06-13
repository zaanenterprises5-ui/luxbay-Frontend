import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React, { Suspense } from "react";
import CartBtn from "./CartBtn";
import SearchInput from "../SearchInput";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-background z-20 shadow-sm border-b border-brand/5">
      <div className="flex flex-wrap relative max-w-frame mx-auto items-center justify-between gap-3 md:justify-start py-2 px-4 xl:px-0">
        <div className="flex items-center shrink-0 order-1">
          <Link
            href="/"
            className="flex items-center mr-3 lg:mr-10"
          >
          <img
            src="/images/logo.svg"
            alt="Luxbae Logo"
            width="140"
            height="48"
            className="object-contain h-12 md:h-16 w-auto"
          />
          </Link>
        </div>
        <Suspense fallback={<div className="flex-1 min-w-0 w-full md:mr-3 lg:mr-10 h-10 bg-brand-light rounded-full animate-pulse" />}>
          <div className="relative flex-1 min-w-0 w-full order-3 md:order-2 md:w-auto md:mr-3 lg:mr-10">
            <SearchInput />
          </div>
        </Suspense>
        <div className="flex items-center shrink-0 order-2 md:order-3">
          <Suspense fallback={<div className="w-6 h-6 mr-[14px]" />}>
            <CartBtn />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
