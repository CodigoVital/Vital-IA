import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const HomePage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex  bg-slate-100 flex-1 flex-col gap-4 pr-8 pl-13  py-8 w-full h-full">
          <div className="bg-sidebar w-full h-full px-5 py-3.5 rounded-lg ">
            <h1 className="text-[20px] font-bold tracking-wide font-inter">
              Asistente Vital-IA
            </h1>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
