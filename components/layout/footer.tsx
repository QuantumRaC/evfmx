"use client";

import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Target, // 用作 Pinterest 的占位图标
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const footerLinks = {
  products: [
    { name: "Golf Carts", href: "/products/golf-carts" },
    { name: "Sightseeing Vehicles", href: "/products/sightseeing" },
    { name: "Specialty Trucks", href: "/products/specialty" },
    { name: "Accessories", href: "/products/accessories" },
  ],
  support: [
    { name: "Dealer Portal", href: "/dealer" },
    { name: "Warranty Policy", href: "/warranty" },
    { name: "After-Sales", href: "/service" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "X" },
  { icon: <Target className="w-5 h-5" />, href: "#", label: "Pinterest" },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* --- 1. COMPANY INFO --- */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-black uppercase tracking-widest">
              Jiangsu FMX
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              Leading manufacturer of premium electric specialized vehicles, dedicated to green technology and innovative mobility solutions since 2021.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="hover:text-primary transition-colors p-2 bg-white-800 rounded-none"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* --- 2. GLOBAL CONTACT DETAILS --- */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-black uppercase tracking-widest">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>No.123 Qibei Branch Road, Yuqi Town, Wuxi, Jiangsu, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+86 13861700802</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@evfmx.com</span>
              </li>
            </ul>
          </div>

          {/* --- 3. PRODUCTS TAB --- */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-black uppercase tracking-widest">Our Fleet</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors uppercase tracking-tight font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- 4. GLOBAL OFFICES --- */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-black uppercase tracking-widest">Global Offices</h3>
            <div className="space-y-4 text-xs opacity-70">
              <div>
                <p className="font-bold text-slate-300 uppercase">Indonesia</p>
                <p>Jakarta Barat - 11620</p>
              </div>
              <div>
                <p className="font-bold text-slate-300 uppercase">Philippines</p>
                <p>Jolly Industrial Park, Bulacan</p>
              </div>
              <div>
                <p className="font-bold text-slate-300 uppercase">Brazil</p>
                <p>Higienópolis - Sao Paulo/SP</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:row items-start justify-between gap-4">
          <p className="text-xs opacity-50 uppercase tracking-widest">
            © {new Date().getFullYear()} Jiangsu FMX Electric Vehicle Co., Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-tighter opacity-70">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}