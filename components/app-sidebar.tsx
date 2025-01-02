"use client";

import { Apple, Book, Code2, Gamepad2, Home, Languages } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },

  {
    title: "JS Mastery",
    url: "/js-mastery",
    icon: Code2,
  },
  {
    title: "Food Prep",
    url: "/food-prep",
    icon: Apple,
  },
  {
    title: "Finnish Study",
    url: "/finnish-study",
    icon: Languages,
  },
  {
    title: "Book Corner",
    url: "/book-corner",
    icon: Book,
  },
  {
    title: "Super Satur Daddy Day",
    url: "/super-satur-daddy-day",
    icon: Gamepad2,
  },
];

export function AppSidebar() {
  const currentPath = usePathname();
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible="icon" className="border-none">
      <SidebarContent className=" bg-black  rounded-2xl">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">2025</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="text-white" key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPath === item.url}
                  >
                    <Link href={item.url} onClick={() => setOpenMobile(false)}>
                      <item.icon className="w-10 h-10" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
