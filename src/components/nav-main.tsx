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
import useChatTour from "@/hooks/use-chat-tour";

export function NavMain({
  items,
}: {
  items: {
    id?: string;
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
  const { open, toggleSidebar, openMobile } = useSidebar();
  useChatTour();
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
                    id={item.id}
                    onClick={() => {
                      if (openMobile) toggleSidebar();
                    }}
                    className={cn(
                      "rounded cursor-pointer",
                      "p-[22px] flex items-center gap-[10px] font-bold font-lato text-[14px] text-[#475569]",
                      isActive &&
                        "bg-[#24B0BA]/20 text-[#24B0BA]  font-bold dark:bg-slate-800 dark:text-slate-100",
                      `hover:text-none ${
                        isActive
                          ? "hover:bg-[] active:bg-[] active:text-[]"
                          : "hover:bg-[#24B0BA]/7"
                      }`,
                      !open && "justify-center"
                    )}
                    tooltip={item.title}
                  >
                    {item.icon && (
                      <item.icon className="!w-[19.77px] !h-[19.77px] text-primary-custom-text " />
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
