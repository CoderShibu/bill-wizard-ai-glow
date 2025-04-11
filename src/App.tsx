
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ScanBill from "./pages/ScanBill";
import Templates from "./pages/Templates";
import History from "./pages/History";

const queryClient = new QueryClient();

const App = () => {
  // Initialize theme based on user preference
  useEffect(() => {
    // Check if the user has a theme preference in localStorage
    const theme = localStorage.getItem("theme");
    // If not, check if they prefer dark mode in their OS settings
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Apply the appropriate theme
    if (theme === "dark" || (!theme && prefersDarkMode)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scan" element={<ScanBill />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/history" element={<History />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
