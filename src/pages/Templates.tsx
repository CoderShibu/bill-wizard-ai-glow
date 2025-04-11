
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, FileText, Plus, Search, Settings } from "lucide-react";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Template data - would come from API in real implementation
  const templates = [
    { id: 1, name: "Electric Bill", provider: "Energy Provider Inc.", fields: 12, lastUsed: "2025-04-02" },
    { id: 2, name: "Water Bill", provider: "City Water Dept", fields: 10, lastUsed: "2025-03-15" },
    { id: 3, name: "Gas Bill", provider: "National Gas Co", fields: 9, lastUsed: "2025-03-28" },
    { id: 4, name: "Internet Bill", provider: "Fast Internet Inc", fields: 8, lastUsed: "2025-04-01" },
    { id: 5, name: "Phone Bill", provider: "Mobile Carrier", fields: 11, lastUsed: "2025-03-10" },
    { id: 6, name: "Rent", provider: "Property Management LLC", fields: 7, lastUsed: "2025-03-01" },
  ];
  
  const filteredTemplates = templates.filter(template => 
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
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
                <button className="p-2 rounded-md border border-input bg-background text-foreground hover:bg-muted transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">{template.name}</h3>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-3">
                      <p className="text-sm text-muted-foreground">Provider</p>
                      <p>{template.provider}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">Fields: </span>
                        <span>{template.fields}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Last used: </span>
                        <span>{template.lastUsed}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-3 flex justify-between">
                    <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                      Use Template
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Template card for adding new template */}
              <div className="border border-dashed border-border rounded-lg overflow-hidden flex items-center justify-center min-h-[200px] hover:border-primary/50 transition-colors">
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
