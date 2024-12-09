import React from "react";
import { Card } from "@/components/ui/card";

export default function AnimateCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-none">
      <Card className="relative z-10 bg-transparent transition-colors shadow-none border-none duration-200">
        {children}
      </Card>
      <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-primary to-muted opacity-0 transition-all duration-500 ease-out group-hover:translate-x-[100%] group-hover:opacity-100" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary to-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
