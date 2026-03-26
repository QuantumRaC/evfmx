"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, Zap, Battery, Gauge, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

// 1. 分类元数据 - 严格引用样册技术点
const CATEGORY_DETAILS: Record<string, { title: string; desc: string }> = {
  "All Products": {
    title: "All Products",
    desc: "Comprehensive range of electric mobility solutions across land and water terrains."
  },
  "Golf Cart": {
    title: "Electric Golf Carts",
    desc: "Featuring 48V/72V AC systems with up to 7.5KW motors. Equipped with lithium batteries, front double swingarm independent suspension, and 4-wheel hydraulic disc brakes for unrivaled safety."
  },
  "Electric Sightseeing Vehicle": {
    title: "Electric Sightseeing Vehicles",
    desc: "Zero-emission high-capacity transport (8-23 seats) designed for premium tours in urban and natural resorts."
  },
  "Electric Garbage Truck": {
    title: "Electric Garbage Trucks",
    desc: "Eco-friendly waste collection with reduced noise and automotive cathodic electrophoresis for 10-year corrosion resistance."
  },
  "Electric Fire Truck and Others": {
    title: "Special Vehicles",
    desc: "Rapid response electric fire trucks and patrol vehicles designed for community and industrial safety."
  },
  "EV Kartboat": {
    title: "EV Kartboat",
    desc: "Experience the thrill of racing on water with high-torque electric propulsion and agile hull design."
  },
  "EV Surfboard": {
    title: "EV Surfboard",
    desc: "Jet-powered electric surfboards with lightweight carbon fiber construction for maximum control."
  }
};

// 2. 产品数据 - 依据样册型号
const ALL_PRODUCTS = [
  { id: 1, name: "F4GH20JS", category: "Golf Cart", sub: "2 Seats", img: "https://placehold.co/600x450?text=F4GH20JS", specs: "48V 105Ah | 4Kw AC" },
  { id: 2, name: "F4GH40JS", category: "Golf Cart", sub: "4 Seats", img: "https://placehold.co/600x450?text=F4GH40JS", specs: "48V 105Ah | 4Kw AC" },
  { id: 3, name: "F4GH40D", category: "Golf Cart", sub: "2+2 Seats", img: "https://placehold.co/600x450?text=F4GH40D", specs: "72V 105Ah | 5Kw AC" },
  { id: 4, name: "F4GH42K5", category: "Golf Cart", sub: "4+2 Seats", img: "https://placehold.co/600x450?text=F4GH42K5", specs: "72V 105Ah | 5Kw AC" },
  { id: 5, name: "F4GH20CF", category: "Golf Cart", sub: "4WD Utility", img: "https://placehold.co/600x450?text=F4GH20CF", specs: "72V 230Ah | 10Kw AC" },
  { id: 6, name: "F4RF20B", category: "Electric Garbage Truck", sub: "Rear-Flip", img: "https://placehold.co/600x450?text=Garbage+Truck", specs: "Heavy Duty | Electric" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => activeCategory === "All Products" || p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // --- 新增：窗口监听逻辑 ---
  useEffect(() => {
    // 定义处理函数
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsCollapsed(true); // 窗口小于 1280px 自动折叠
      } else {
        setIsCollapsed(false); // 窗口足够大时自动展开
      }
    };

    // 初始化执行一次
    handleResize();

    // 监听窗口变化
    window.addEventListener("resize", handleResize);
    
    // 清理监听器防止内存泄漏
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-white relative">
      
      {/* --- SIDEBAR --- */}
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 80 : 320 }}
        className="border-r hidden lg:flex flex-col sticky top-20 h-[calc(100vh-80px)] overflow-hidden bg-slate-50 z-30 transition-all duration-300"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            {!isCollapsed && (
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                Categories
              </h3>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hover:bg-slate-200"
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </Button>
          </div>

          <nav className="flex flex-col space-y-2">
            {Object.keys(CATEGORY_DETAILS).map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={cn(
                  "text-left transition-all duration-200 flex items-center overflow-hidden",
                  isCollapsed 
                    ? "justify-center w-12 h-12 rounded-full mx-auto" 
                    : "px-4 py-3 text-[10px] font-black uppercase tracking-widest",
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                )}
                title={isCollapsed ? cat : ""}
              >
                {isCollapsed ? cat.charAt(0) : cat}
              </button>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 pb-20 overflow-hidden">
        
        {/* --- DYNAMIC HEADER --- */}
        <section className="px-8 lg:px-16 pt-20 pb-12 border-b bg-white">
          <Badge className="bg-primary mb-4 rounded-none uppercase tracking-widest text-[10px]">
            EVFMX SERIES
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">
            {CATEGORY_DETAILS[activeCategory]?.title || activeCategory}
          </h1>
          <p className="max-w-4xl text-lg text-slate-600 leading-relaxed italic border-l-4 border-primary/20 pl-8">
            {CATEGORY_DETAILS[activeCategory]?.desc}
          </p>
        </section>

        {/* --- PRODUCT GRID --- */}
        <div className="px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <Card key={item.id} className="group border-none shadow-none bg-transparent cursor-pointer">
                <div className="aspect-[4/3] relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 mb-6 transition-all group-hover:shadow-lg">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-contain p-10 transition-transform duration-500 group-hover:scale-110" 
                    unoptimized 
                  />
                </div>
                <div className="space-y-1 px-2 text-left">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900">{item.name}</h3>
                    <Badge variant="outline" className="text-[10px] border-slate-300 uppercase font-bold text-slate-500">{item.sub}</Badge>
                  </div>
                  <p className="text-slate-400 font-bold text-[10px] tracking-widest uppercase">{item.specs}</p>
                  <Button className="w-full rounded-none mt-6 bg-slate-900 hover:bg-primary text-white font-black text-xs tracking-widest transition-all">
                    SPECIFICATIONS
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* --- PAGINATION --- */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-start">
              <Pagination className="mx-0">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className="cursor-pointer rounded-none border-slate-300 uppercase text-[10px] font-bold" 
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className="cursor-pointer rounded-none font-bold text-xs"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className="cursor-pointer rounded-none border-slate-300 uppercase text-[10px] font-bold" 
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>

      {/* --- MOBILE FLOATING MENU --- */}
      <div className="lg:hidden fixed bottom-8 right-8 z-50">
        <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90">
          <Menu size={24} />
        </Button>
      </div>
    </div>
  );
}