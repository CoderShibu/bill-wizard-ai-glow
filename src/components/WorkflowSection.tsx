
import { ArrowRight, FileText, FileUp, Search, FileCheck } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      title: "Upload Bill",
      description: "Upload or scan your bill using our intuitive interface",
      icon: FileUp,
    },
    {
      title: "AI Analysis",
      description: "Our AI extracts all relevant information automatically",
      icon: Search,
    },
    {
      title: "Review & Confirm",
      description: "Verify the extracted data and make any necessary adjustments",
      icon: FileText,
    },
    {
      title: "Process & Store",
      description: "Save to your history and export to your preferred format",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Our streamlined process makes bill processing faster and more accurate than ever before
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                    <step.icon className="h-7 w-7" />
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2 text-primary/30 h-8 w-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
