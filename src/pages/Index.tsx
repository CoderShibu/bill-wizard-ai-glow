
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import Footer from "@/components/Footer";
import { BarChart3, Clock, Receipt } from "lucide-react";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 gradient-bg">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our AI Can Do</h2>
              <p className="text-muted-foreground">
                Powered by advanced Gemini AI to make bill processing effortless
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-2xl">
              <StatsCard
                title="Average Time Savings"
                value="85%"
                icon={Clock}
                trend={{ value: 12, isPositive: true }}
              />
              <StatsCard
                title="Accuracy Rate"
                value="99.2%"
                icon={Receipt}
                trend={{ value: 3, isPositive: true }}
              />
            </div>
          </div>
        </section>
        
        <WorkflowSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
