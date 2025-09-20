"use client";
import { 
  Bell, DollarSign, House, Info, Mail, Menu, 
  Settings, ShoppingBag, ShoppingCart, Users, LucideIcon 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ICONS = {
  House,
  DollarSign,
  ShoppingBag,
  ShoppingCart,
  Mail,
  Users,
  Bell,
  Info,
  Settings,
};


type IconName = keyof typeof ICONS;

interface SidebarItem {
  name: string;
  icon: IconName;  
  href: string;
}

const Sidebar: React.FC = () => {
  const [issidebaropen, setIsSidebaropen] = useState(true);
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems as SidebarItem[]));
  }, []);

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex shrink-0 ${
        issidebaropen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebaropen(!issidebaropen)}
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
        >
          <Menu size={24} />
        </button>

        {/* Sidebar Links */}
        <nav className="mt-8 flex-grow">
          {sidebarItems.map((item) => {
            const IconComponent: LucideIcon = ICONS[item.icon];

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathname === item.href
                      ? "bg-[#2f2f2f] text-gray-400"
                      : "text-gray-300"
                  }`}
                >
                  <IconComponent size={20} style={{ minWidth: "20px" }} />
                  {issidebaropen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
