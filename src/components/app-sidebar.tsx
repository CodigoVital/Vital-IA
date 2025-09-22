import type * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Logo } from "./logo";
import { data } from "@/components/config/sidebar-data";
import { cn } from "@/lib/utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar className="border-none" collapsible="icon" {...props}>
      <SidebarHeader
        className={cn(
          "mx-3 mt-3 mb-1 flex flex-row items-center transition-all duration-200",
          open ? "justify-between" : "justify-center"
        )}
      >
        {open && (
          <div className="flex flex-row items-center gap-2 transition-all duration-200 opacity-100 translate-x-0">
            <Logo bgColor="#24B0BA" strokeColor="white" />
            <h1 className="font-bold whitespace-nowrap text-primary-custom-text">
              Vital-IA
            </h1>
          </div>
        )}
        <SidebarTrigger className={cn("shrink-0 ")} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Separator className="h-px bg-[#999696] w-full " />

        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
