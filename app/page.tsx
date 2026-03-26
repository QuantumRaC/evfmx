"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Battery, Zap, Gauge, Settings } from "lucide-react";

export default function HomePage() {
  // 1. 原有的 Hero 逻辑与图片
  const heroImages = [
    "/home-images/hero-1.jpg",
    "/home-images/hero-2.jpg",
    "/home-images/hero-3.jpg",
    "/home-images/hero-4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // 5. 新增: 产品展示区的轮播图 (基于样册)
  const bestProducts = [
    "/placeholder/cart-side-1.png", "/placeholder/F4GH40JS-transparent.png",
    "/placeholder/F4GH42K5.png", "/placeholder/F4GH20CF(4WD).png",
    "/placeholder/F4GH20K-F01.png", "/placeholder/F4GH20K5.png",
    "/placeholder/F4GH20K5.png", "/placeholder/F4GH22K.png",
    "/placeholder/F4GH40D.png", "/placeholder/F4GH42K-TC.png",
    // "/products/p1.png", "/products/p2.png", "/products/p3.png", "/products/p4.png",
    // "/products/p5.png", "/products/p6.png", "/products/p7.png", "/products/p8.png",
    // "/products/p9.png", "/products/p10.png"
  ];
  const duplicatedProducts = [...bestProducts, ...bestProducts];

  // 2. 保持原有的三个产品描述
  const productTypes = [
    {
      title: "Electric Sightseeing Vehicles",
      desc: "Zero-emission, clean transportation providing a comfortable sightseeing experience for urban and natural environments.",
      img: "/placeholder/sightseeing.jpg",
    },
    {
      title: "Electric Golf Carts",
      desc: "Quiet, emission-free transportation designed for golf courses, enhancing the enjoyment of the game while staying eco-friendly.",
      img: "/placeholder/golf-cart.jpg",
    },
    {
      title: "Electric Garbage Trucks",
      desc: "An eco-friendly solution for urban waste collection, reducing noise pollution while enhancing operational efficiency.",
      img: "/placeholder/garbage-truck.jpg",
    },
  ];

  // 3. 底部技术特性的深度细节描述 (基于样册)
  const detailedFeatures = [
    {
      label: "4-Wheel Disc Brake",
      icon: <Gauge className="w-8 h-8" />,
      detail: "Equipped with 4-wheel hydraulic disc brakes and EM regenerative braking for maximum safety. "
    },
    {
      label: "Independent Suspension",
      icon: <Settings className="w-8 h-8" />,
      detail: "Front double swingarm independent suspension paired with thick seat cushions for an unrivaled ride. "
    },
    {
      label: "AC System 7.5KW",
      icon: <Zap className="w-8 h-8" />,
      detail: "High-output 72V AC systems provide faster acceleration and superior power on slopes or full loads. "
    },
    {
      label: "Maintenance Free",
      icon: <Battery className="w-8 h-8" />,
      detail: "Advanced LiFePO4 lithium batteries with BMS, offering 5x the life cycles of lead-acid with zero maintenance. "
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* --- 1. 原封不动的 HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/45 z-10" />
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image src={src} alt="Hero" fill priority={index === 0} className="object-cover" />
            </div>
          ))}
        </div>

        <div className="container relative z-20 px-4 text-center text-white">
          <Badge className="mb-6 bg-primary hover:bg-primary/90 text-primary-foreground border-none px-4 py-1.5 text-sm tracking-widest uppercase shadow-lg">
            Jiangsu FMX Electric Vehicle
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none [text-shadow:0_0_20px_var(--color-primary)]">
            LOW-SPEED <br />
            <span className="italic">ELECTRIC</span> MOBILITY
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-200 mb-12 font-light drop-shadow-md">
            Advanced manufacturing meets sustainable mobility. Premium electric vehicles
            designed for tourism, sports, and urban sanitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-2xl transition-transform hover:scale-105">
              Explore Our Fleet
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-2 hover:bg-white/10 text-white backdrop-blur-sm">
              Contact Manufacturer
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 flex gap-3 z-30">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1.5 transition-all rounded-full ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* --- 2. 保持原有的三个产品展示 --- */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 space-y-2">
            <Badge variant="outline" className="text-primary border-primary px-4 py-1 tracking-widest">
              TERRAIN: LAND
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
              Specialized Land Mobility
            </h2>
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
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* 修改点：移除条件判断，直接渲染完整的 title 字符串 */}
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white uppercase tracking-tight">
                    {type.title}
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

      {/* --- WATER MOBILITY SECTION (Large Side-by-Side Layout) --- */}
<section className="py-24 bg-slate-50">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-16 space-y-2">
      <Badge variant="outline" className="text-primary border-primary px-4 py-1 tracking-widest">
        TERRAIN: WATER
      </Badge>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
        Cross-Scene Water Mobility
      </h2>
      <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
    </div>

    {/* 保持 2 列布局，但通过 max-w-7xl 允许更大的展开空间 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
      {[
        {
          title: "Go-Kart Style E-Boat",
          desc: "Experience the thrill of racing on water. High-torque electric propulsion meets agile hull design for ultimate recreational performance.",
          img: "https://placehold.co/800x600?text=Go-Kart+E-Boat",
        },
        {
          title: "Electric Surfboard",
          desc: "Master the waves with zero-emission jet technology. Lightweight carbon fiber construction for maximum speed and control.",
          img: "https://placehold.co/800x600?text=E-Surfboard",
        },
      ].map((item, index) => (
        <Card key={index} className="flex flex-col xl:flex-row items-stretch overflow-hidden border border-border group rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white min-h-[320px]">
          
          {/* 左侧图片：占比 45%，使用比之前更大的固定高度或比例 */}
          <div className="relative w-full xl:w-[45%] aspect-[4/3] xl:aspect-auto overflow-hidden shrink-0">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
          </div>

          {/* 右侧文字：增加内边距和字号以增强比重 */}
          <CardContent className="flex flex-col justify-center flex-1 p-8 lg:p-10 space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
              {item.title}
            </h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed italic border-l-4 border-primary/20 pl-6">
              {item.desc}
            </p>
            <div className="pt-2">
               <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Explore →</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* --- OUR BEST PRODUCTS (Infinite Auto-scroll) --- */}
      <section className="py-20 bg-white overflow-hidden border-b">
        <div className="container px-4 mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Our Best Products
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4" />
        </div>

        {/* 动画容器 */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex flex-nowrap"
            animate={{
              x: ["-50%", "0%"], // 匀速向左移动一半的距离
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // 调整数值改变滚动速度（越大越慢）
                ease: "linear", // 关键：确保匀速运动
              },
            }}
          >
            {duplicatedProducts.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[250px] px-8 py-4 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-square relative bg-white flex items-center justify-center rounded-xl">
                  {/* 目前使用占位图，你之后导入图片后替换 src */}
                  <Image
                    src={src}
                    alt={`Best Product ${index}`}
                    width={200}
                    height={200}
                    className="object-contain"
                    unoptimized // 暂时防止本地找不到文件报错
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. 新增: HELIOS 风格的 UPGRADE YOUR TRANSPORTATION --- */}
      <section className="py-20 bg-slate-50 border-y relative overflow-hidden">
        {/* 背景轻微纹理感 */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8">
            UPGRADE YOUR TRANSPORTATION
          </h2>

          {/* --- 4. 增强版: 技术细节描述板块 --- */}
          <section className="py-28">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {detailedFeatures.map((f, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                      {f.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tight text-slate-900">
                      {f.label}
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-sm px-4">
                      {f.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="max-w-3xl mx-auto h-1 bg-primary/20 mb-8" />
          <Button size="lg" className="rounded-none h-14 px-12 bg-primary text-white font-bold hover:translate-y-[-2px] transition-all">
            READ MORE
          </Button>
        </div>
      </section>

    </div>
  );
}