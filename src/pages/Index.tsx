
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import Footer from "@/components/Footer";
import { ArrowRightCircle, BarChart3, Clock, Receipt, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
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
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <StatsCard
                title="Active Users"
                value="10,000+"
                icon={UserCheck}
              />
              <StatsCard
                title="Bills Processed"
                value="1.2M+"
                icon={BarChart3}
                trend={{ value: 24, isPositive: true }}
              />
            </div>
          </div>
        </section>
        
        <WorkflowSection />
        
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your bill processing?</h2>
                  <p className="text-muted-foreground mb-6">
                    Join thousands of users who are saving time and reducing errors with our AI-powered solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/scan" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2">
                      Try It Now
                      <ArrowRightCircle className="h-4 w-4" />
                    </Link>
                    <Link to="/dashboard" className="bg-muted hover:bg-muted/80 text-foreground font-medium px-6 py-3 rounded-md transition-colors">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-white max-w-md">
                    <div className="text-4xl font-bold mb-4">85%</div>
                    <div className="text-xl mb-2">Time Saved</div>
                    <p className="opacity-80">
                      Our customers report saving an average of 85% of the time previously spent on manual bill processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
