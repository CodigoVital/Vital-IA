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
import { data } from "@/components/ui/config/sidebar-data";
import { cn } from "@/lib/utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar className="border-none" collapsible="icon" {...props}>
      <SidebarHeader
        className={cn(
          `${open ? " justify-between" : "justify-center"}`,
          "mx-3 mt-3 mb-1 flex flex-row items-center"
        )}
      >
        {open && (
          <div className="flex flex-row items-center gap-2">
            <Logo bgColor="#73C7E3" strokeColor="black" />
            <h1 className="font-bold">Vital-IA</h1>
          </div>
        )}
        <SidebarTrigger />
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
