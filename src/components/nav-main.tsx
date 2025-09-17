import type { LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = useLocation().pathname;
  const { open } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <Link to={item.url} className="w-full">
                  <SidebarMenuButton
                    className={cn(
                      "",
                      "p-[22px] flex items-center gap-[10px] font-medium text-[14px] text-[#475569]",
                      isActive &&
                        "bg-[#24B0BA]/20 text-[#24B0BA]  font-bold dark:bg-slate-800 dark:text-slate-100",
                      `hover:text-none ${
                        isActive
                          ? "hover:bg-[] active:bg-[] active:text-[]"
                          : ""
                      }`,
                      !open && "justify-center"
                    )}
                    tooltip={item.title}
                  >
                    {item.icon && (
                      <item.icon className="!w-[19.77px] !h-[19.77px] text-[#2E4A70]" />
                    )}
                    <span
                      className={cn("hover:text-inherit", !open && "hidden")}
                    >
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
