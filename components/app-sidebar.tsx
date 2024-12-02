"use client";

import { Apple, Book, Code2, Dumbbell, Home, Languages } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
    title: "Exercise",
    url: "/exercise",
    icon: Dumbbell,
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
];

export function AppSidebar() {
  const currentPath = usePathname();
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPath === item.url}
                  >
                    <Link href={item.url}>
                      <item.icon />
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
