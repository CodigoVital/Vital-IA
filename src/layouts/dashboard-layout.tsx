import { AppSidebar } from "@/components/app-sidebar";
import { CustomHeader } from "@/components/custom/custom-header";
import {
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import clsx from "clsx";
import { Outlet } from "react-router";

export const DashboardLayout = () => {
  const { open } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <main
          className={`flex flex-col gap-4 p-8 w-full h-screen bg-slate-100 ${
            isMobile ? "pl-0 pr-0 py-0 !gap-0" : ""
          }`}
        >
          {isMobile && (
            <CustomHeader>
              <SidebarTrigger className="mr-4" />
            </CustomHeader>
          )}
          <div
            className={clsx(
              "bg-sidebar h-full rounded-lg overflow-hidden flex flex-col w-full mx-auto",
              "transition-transform duration-300 ease-in-out will-change-transform",
              open ? "w-[calc(100vw-21.7rem)]" : "w-[calc(100vw-4rem)]"
            )}
            style={{
              transform: "translate3d(0, 0, 0)",
            }}
          >
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </>
  );
};
