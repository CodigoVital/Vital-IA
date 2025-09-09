import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Logo } from "./logo";
import { data } from "@/components/ui/config/sidebar-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-none" collapsible="icon" {...props}>
      <SidebarHeader className="mx-3 mt-3 mb-1 flex items-center flex-row ">
        <Logo />
        <h1 className="font-bold">Vital-IA</h1>
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
