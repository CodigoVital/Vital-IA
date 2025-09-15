import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import clsx from "clsx";

export const DashboardLayout = () => {
  const { open } = useSidebar();

  return (
    <>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <main className="flex flex-col gap-4 p-8 w-full h-screen bg-slate-100">
          <div
            className={clsx(
              "bg-sidebar  h-full rounded-lg overflow-hidden flex flex-col w-full transition-all duration-300 mx-auto",
              open ? "max-w-[calc(100vw-21.7rem)]" : "max-w-[calc(100vw-4rem)]"
            )}
          >
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </>
  );
};
