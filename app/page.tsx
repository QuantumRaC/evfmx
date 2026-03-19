"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  // 1. Hero 轮播图片配置
  const heroImages = [
    "/home-images/hero-1.jpg",
    "/home-images/hero-2.jpg",
    "/home-images/hero-3.jpg",
    "/home-images/hero-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播逻辑 (5秒切换)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // 2. 产品类型数据
  const productTypes = [
    {
      title: "Electric Sightseeing Vehicles",
      desc: "Zero-emission, clean transportation providing a comfortable sightseeing experience for urban and natural environments.",
      img: "/public/placeholder/cart-1.jpg",
    },
    {
      title: "Electric Golf Carts",
      desc: "Quiet, emission-free transportation designed for golf courses, enhancing the enjoyment of the game while staying eco-friendly.",
      img: "/public/placeholder/cart-1.jpg",
    },
    {
      title: "Electric Garbage Trucks",
      desc: "An eco-friendly solution for urban waste collection, reducing noise pollution while enhancing operational efficiency.",
      img: "/api/placeholder/600/400",
    },
  ];

  // 3. 核心优势气泡数据
  const valueProps = [
    { title: "Strong Strength", desc: "Innovation and tailor-made service." },
    { title: "Reliable Quality", desc: "Rigorous quality management." },
    { title: "Fast Response", desc: "7*24h online attending to your needs." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- HERO SECTION (Auto-sliding Visual) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-white/25 mix-blend-luminosity z-10" />
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`EVFMX Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="container relative z-20 px-4 text-center text-white">
          <Badge className="mb-6 bg-primary hover:bg-primary/90 text-primary-foreground border-none px-4 py-1.5 text-sm tracking-widest uppercase shadow-lg">
            Jiangsu FMX Electric Vehicle
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none drop-shadow-md">
            DRIVING THE <br />
            <span className="text-primary italic">GREEN TECH</span> REVOLUTION
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-200 mb-12 font-light drop-shadow-md">
            Advanced manufacturing meets sustainable mobility. Premium electric vehicles 
            designed for tourism, sports, and urban sanitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95">
              Explore Our Fleet
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-2 hover:bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-105 active:scale-95">
              Contact Manufacturer
            </Button>
          </div>
        </div>

        {/* 轮播指示器 */}
        <div className="absolute bottom-12 flex gap-3 z-30">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* --- PRODUCT TYPES SECTION --- */}
      <section className="py-32 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary uppercase">Specialized Electric Fleet</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {productTypes.map((type, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl shadow-xl border border-border">
                  <Image 
                    src={type.img} 
                    alt={type.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white uppercase tracking-tight">
                    {type.title.split(' ').map((word, i) => i === 0 ? <span key={i} className="text-primary">{word} </span> : word + ' ')}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary/20 pl-6 italic">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT US / BUBBLES SECTION --- */}
      <section className="py-32 bg-secondary/15">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="text-primary border-primary px-4 py-1 tracking-widest">ABOUT OUR COMPANY</Badge>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                Crafting Excellence in <br />
                <span className="text-primary">Green Technology</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jiangsu FMX Electric Vehicle Co., Ltd, situated in Wuxi, is dedicated to the research, development, and manufacturing of premium specialized vehicles. 
                </p>
                <p>
                  Our 3,800m² facility features advanced 120,000-watt laser cutting, robotic welding, and cathodic electrophoresis, ensuring 5-10 years of corrosion resistance.
                </p>
              </div>
              
              {/* Value Props as "Bubbles" */}
              <div className="flex flex-wrap gap-4 pt-4">
                {valueProps.map((prop, i) => (
                  <div key={i} className="bg-background border-2 border-primary/5 rounded-full px-8 py-5 shadow-sm hover:border-primary transition-all cursor-default group">
                    <span className="font-bold text-primary block text-xs uppercase tracking-widest mb-1 group-hover:scale-105 transition-transform">{prop.title}</span>
                    <span className="text-sm text-muted-foreground">{prop.desc}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 rounded-full px-12 h-14 text-md font-bold shadow-lg">Read Our Full Story</Button>
            </div>

            <div className="relative">
              <Card className="border-none shadow-2xl overflow-hidden rounded-[2.5rem]">
                <CardContent className="p-0">
                  <div className="aspect-square bg-[url('/api/placeholder/800/800')] bg-cover bg-center" />
                </CardContent>
              </Card>
              {/* 装饰性浮动框 */}
              <div className="absolute -bottom-10 -left-10 bg-primary text-primary-foreground p-10 rounded-3xl hidden xl:block shadow-2xl max-w-xs border-4 border-background">
                <p className="text-4xl font-black mb-2 tracking-tighter">10+ YEARS</p>
                <p className="text-xs font-bold opacity-90 uppercase tracking-widest leading-relaxed">
                  Corrosion Resistance Guarantee with Automotive Cathodic Electrophoresis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INNOVATION & TECH BUBBLES --- */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Customization", desc: "Wide range of colors, seating configurations, and accessories to meet unique preferences." },
              { title: "Innovation", desc: "Cutting-edge GPS navigation, electronic fuel injection, and smartphone connectivity." },
              { title: "Warranty", desc: "Extensive warranties and 7*24h expert assistance for absolute peace of mind." }
            ].map((item, i) => (
              <div key={i} className="p-12 rounded-[3.5rem] bg-secondary/5 border-2 border-transparent hover:border-primary/20 hover:bg-background transition-all group">
                <div className="w-12 h-1 text-primary bg-primary mb-8 group-hover:w-20 transition-all" />
                <h4 className="text-2xl font-bold mb-4 text-foreground uppercase tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}