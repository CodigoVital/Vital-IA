import { BadgeCheck, Bell, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/use-selector";
import { setLogout } from "@/store/slices/auth/auth-slice";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { open } = useSidebar();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.authSlice.user);

  console.log("Current User:", currentUser);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className={cn(
                !open && "flex justify-center",
                "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              )}
            >
              <Avatar
                className={cn(
                  "h-[34px] w-[34px] rounded-full border-1 border-[#CBD5E1] flex items-center justify-center bg-muted",
                  open ? "" : "mx-auto"
                )}
              >
                <AvatarImage
                  src={currentUser?.user_metadata.avatar_url}
                  alt={currentUser?.user_metadata.name}
                />
                <AvatarFallback className="text-sm font-light ">
                  {currentUser?.user_metadata.display_name
                    ? currentUser.user_metadata.display_name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                    : "NN"}
                </AvatarFallback>
              </Avatar>

              {open && (
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium h-[17px]">
                    {currentUser?.user_metadata.display_name ||
                      "Nombre no disponible"}
                  </span>
                  <span className="truncate text-xs">
                    {currentUser?.email || "Email no disponible"}
                  </span>
                </div>
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={currentUser?.user_metadata.avatar_url}
                    alt={currentUser?.user_metadata.display_name || "NN"}
                  />
                  <AvatarFallback className="rounded-lg">
                    {currentUser?.user_metadata.display_name
                      ? currentUser.user_metadata.display_name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")
                      : "NN"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {currentUser?.user_metadata.displayName ||
                      "Nombre no disponible"}
                  </span>
                  <span className="truncate text-xs">
                    {currentUser?.user_metadata.email || "Email no disponible"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Cuenta
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notificaciones
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => dispatch(setLogout())}>
              <LogOut />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
