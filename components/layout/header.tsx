"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-20 items-center mx-auto px-4">
        
        {/* --- 1. LOGO: Strictly Centered --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full py-3">
          <Link href="/" className="flex items-center h-full">
            <Image 
              src="/EVFMX-transparent.jpg" 
              alt="EVFMX Logo"
              width={160} 
              height={50} 
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* --- 2. RIGHT ALIGNED CONTENT --- */}
        <div className="flex flex-1 items-center justify-end space-x-1">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {/* Products Link (Simplified to a direct tab) */}
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "bg-transparent hover:bg-accent/50 text-xs font-black uppercase tracking-widest h-10 px-4"
                  )}>
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "bg-transparent hover:bg-accent/50 text-xs font-black uppercase tracking-widest h-10 px-4"
                  )}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex items-center ml-4 space-x-2">
            {/* Dealer Portal: Marked Black */}
            <Button 
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-widest h-10 px-6 rounded-none transition-colors"
            >
              Dealer Portal
            </Button>
            
            {/* Contact: Transparent/Ghost Style */}
            <Button 
              variant="ghost" 
              className="text-xs font-black uppercase tracking-widest h-10 px-4 hover:bg-primary/10 text-primary border border-slate-200 rounded-none"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}