"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Zap, Factory, Droplets, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

const coreValues = [
  {
    icon: <Zap className="w-8 h-8 text-base" />,
    title: "Innovation First",
    desc: "Advancing green mobility through cutting-edge new energy systems and sustainable engineering."
  },
  {
    icon: <Factory className="w-8 h-8 text-base" />,
    title: "Engineered Excellence",
    desc: "Precision manufacturing ensured by 120,000-watt laser cutting and robotic welding technologies."
  },
  {
    icon: <Mountain className="w-8 h-8 text-base" />,
    title: "Land Mobility",
    desc: "Premium electric golf carts and UTVs designed for high-end performance and leisure."
  },
  {
    icon: <Droplets className="w-8 h-8 text-base" />,
    title: "Water Mobility",
    desc: "Redefining low-speed aquatic transport with electric recreational boats and surfboards."
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        {/* --- HERO SECTION: Bird-view Factory Image --- */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0 opacity-60">
            <Image 
              src="/about-images/factory-birdview.jpg" 
              alt="Jiangsu FMX Manufacturing Facility Birdview"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 px-4 text-center text-white space-y-6">
            <Badge className="bg-primary hover:bg-primary text-white rounded-none uppercase tracking-widest text-[10px] px-4 py-1">
              Established 2021
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              ABOUT OUR <br />
              <span className="italic">TECHNOLOGY</span>
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-base opacity-90 uppercase tracking-[0.3em] font-bold">
              Powering the Future of Electric Mobility
            </p>
          </div>
        </section>

        {/* --- MISSION SECTION --- */}
        <section className="py-28 bg-white">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="space-y-8 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight leading-none">
                Innovation & Excellence
              </h2>
              <div className="mt-16 text-muted-foreground leading-relaxed text-lg border-l-4 border-primary/20 pl-6 italic">
                <p>
                  Jiangsu FMX Electric Vehicle Co., Ltd. is based in Yixing, Wuxi, along the scenic Taihu Lake, and is dedicated to advancing green mobility through innovation, engineering, and manufacturing excellence.
                </p>
                <p className="font-bold text-slate-800 not-italic">
                  <br />
                  We specialize in a diverse portfolio of electric mobility solutions, including premium electric golf carts, UTVs, recreational boats, and surfboards—designed for performance and sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MANUFACTURING EXCELLENCE: Inside Factory Image --- */}
        <section className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src="/about-images/factory-inside.png" 
              alt="Inside FMX Factory Process"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 px-4 mx-auto space-y-20">
            <div className="text-left space-y-4 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                Premium Quality. <br />
                <span className=" italic">Engineered for Excellence.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Driven by a “quality-first” philosophy, we are committed to setting new benchmarks. Our facility features 120,000-watt laser cutting, robotic welding, and modern chassis assembly lines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, i) => (
                <div key={i} className="bg-slate-10 backdrop-blur-sm p-10 space-y-6 border border-slate-800 transition-all hover:border-primary group">
                  <div className="flex justify-start">{value.icon}</div>
                  <h4 className="text-xl font-black uppercase text-white tracking-tight">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRODUCTS SECTION: 3 Golf Cart Images --- */}
        <section className="py-28 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-primary border-primary rounded-none uppercase tracking-widest">Terrain Versatility</Badge>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight leading-none">
                    Built for Land & Water
                  </h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-primary/20 pl-8">
                  From land to water, our solutions redefine low-speed electric mobility for leisure, utility, and commercial applications—empowering a smarter and more sustainable way to move.
                </p>
                <Button className="bg-slate-900 text-white rounded-none h-14 px-10 font-black uppercase tracking-widest hover:bg-primary transition-colors">
                  Explore Products
                </Button>
              </div>

              {/* Grid for 3 usable product images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] col-span-1 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/about-images/product-golf-1.jpg" alt="FMX Golf Cart 1" fill className="object-cover" />
                </div>
                <div className="grid grid-rows-2 gap-4 col-span-1">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/about-images/product-golf-2.jpg" alt="FMX Golf Cart 2" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/about-images/product-golf-3.jpg" alt="FMX Golf Cart 3" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}