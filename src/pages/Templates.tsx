
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Plus, Search } from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold">Bill Templates</h1>
            <div className="mt-4 md:mt-0">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Template
              </button>
            </div>
          </div>
          
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select className="px-3 py-2 rounded-md border border-input bg-background">
                  <option>All Types</option>
                  <option>Utility</option>
                  <option>Subscription</option>
                  <option>Rent</option>
                  <option>Insurance</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Empty state when no templates are available */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">No Templates Found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  You haven't created any templates yet. Create your first template to get started with automated bill scanning.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create First Template
                </button>
              </div>
              
              {/* Template card for adding new template */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="border border-dashed border-border rounded-lg overflow-hidden flex items-center justify-center min-h-[200px] hover:border-primary/50 transition-colors hover:bg-accent/30 cursor-pointer">
                    <div className="text-center p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Create New Template</h3>
                      <p className="text-sm text-muted-foreground">
                        Add a custom template for your bills
                      </p>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Template Creation</h4>
                    <p className="text-sm text-muted-foreground">
                      Create custom templates to match your bill formats for quicker and more accurate scanning.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Template Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">How Templates Work</h3>
                <p className="text-muted-foreground mb-4">
                  Templates help our AI recognize and extract information from your bills more accurately. 
                  Each template contains field mappings that tell our system exactly where to find important information.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    Define custom fields for each bill type
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    Map fields to specific areas in your documents
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    Templates improve with each use
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Benefits of Templates</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    <strong>Higher Accuracy:</strong> Templates improve extraction by 35%
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    <strong>Faster Processing:</strong> Pre-mapped fields speed up extraction
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    <strong>Consistency:</strong> Ensure consistent data across all your bills
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    <strong>Custom Fields:</strong> Add fields specific to your needs
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> 
                    <strong>Bulk Processing:</strong> Apply templates to multiple bills at once
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
