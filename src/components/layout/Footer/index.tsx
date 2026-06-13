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
    url: "#",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/luxbae.in?igsh=cTU1NDhhdGt2eWQ5",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    url: "https://wa.me/917306203782",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-brand/10">
      <div className="pt-8 md:pt-[50px] bg-brand-light px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <div className="mb-6">
                <img
                  src="/images/logo.svg"
                  alt="Luxbay Logo"
                  width="160"
                  height="56"
                  className="object-contain h-10 lg:h-14 w-auto"
                />
              </div>
              <p className="text-foreground/70 text-sm mb-4">
                Luxbay brings together premium fragrances, air fresheners, car fresheners, and everyday essentials designed to elevate your lifestyle. We are committed to offering quality products that combine luxury, freshness, and value.
              </p>
              <p className="text-foreground/70 text-sm font-medium mb-9">
                <a href="mailto:hello@luxbay.in">hello@luxbay.in</a>
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white text-black transition-all mr-3 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center p-2 hover:bg-brand hover:text-white"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            {/* LinksSection removed per request */}
          </nav>
          <hr className="h-[1px] border-t-brand/20 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-xs md:text-sm font-medium">
              Luxbay © 2024-2026. All Rights Reserved.
            </p>
            <p className="text-foreground/60 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
              Own the Moment
            </p>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;