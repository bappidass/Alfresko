import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DailyCruisesPage from "./pages/DailyCruisesPage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivateChartersPage from "./pages/PrivateChartersPage";
import MainLayout from "./components/Layout/MainLayout";
import SecondLayout from "./components/Layout/SecondLayout";
import BookingFlow from "./pages/BookingFlowPage";
import CruiseDetailPage from "./pages/CruiseDetailPage";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Layout routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Second Layout routes */}
          <Route element={<SecondLayout />}>
            <Route path="/booking-flow" element={<BookingFlow />} />
            <Route path="/daily-cruises" element={<DailyCruisesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/private-charters" element={<PrivateChartersPage />} />
            <Route path="/cruise-detail" element={<CruiseDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
