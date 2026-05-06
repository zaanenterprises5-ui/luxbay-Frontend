import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { SocialNetworks } from "./footer.types";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/share/1E1PGmPonR/?mibextid=wwXIfr",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/creamxemirates_official_?igsh=NXk1djh2bjdvYW0=",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    url: "https://wa.me/918075721347",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-brand/10">
      <div className="pt-8 md:pt-[50px] bg-brand-light px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1
                className={cn([
                  integralCF.className,
                  "text-[28px] lg:text-[32px] mb-6 text-black leading-tight",
                ])}
              >
                CREAM X EMIRATES
              </h1>
              <p className="text-black/70 text-sm mb-9">
                At Cream X Emirates, we bring the finest luxury and wellness products
                from nature to your table. Experience the purest flavors and
                premium quality, just as nature intended.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-black/5 hover:bg-brand hover:text-white text-black/70 transition-all mr-3 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center p-2"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <LinksSection />
            </div>
          </nav>
          <hr className="h-[1px] border-t-brand/20 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/50 text-xs md:text-sm font-medium">
              Cream X Emirates © 2024-2026. All Rights Reserved.
            </p>
            <p className="text-black/40 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
              Grace in every taste
            </p>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;