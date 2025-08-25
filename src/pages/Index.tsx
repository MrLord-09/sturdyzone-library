import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BookGrid } from "@/components/BookGrid";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 space-y-6">
            <HeroSection />
            <BookGrid />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
