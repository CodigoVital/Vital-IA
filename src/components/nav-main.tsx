import { type LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";

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
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible "
          >
            <SidebarMenuItem>
              <NavLink to={item.url} className="w-full">
                <SidebarMenuButton
                  className="p-[22px] flex items-center gap-[10px] font-medium text-[14px] text-[#475569]"
                  tooltip={item.title}
                >
                  {item.icon && <item.icon className="!w-6 !h-6 " />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </NavLink>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
