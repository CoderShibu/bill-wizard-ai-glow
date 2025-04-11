
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { BarChart3, Calendar, Clock, DollarSign, FileText, Plus, Receipt, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Placeholder data - would be fetched from API in real implementation
  const recentBills = [
    { id: 1, name: "Electric Bill", amount: 124.50, date: "2025-04-05", status: "Paid" },
    { id: 2, name: "Water Bill", amount: 67.25, date: "2025-04-03", status: "Pending" },
    { id: 3, name: "Internet Bill", amount: 89.99, date: "2025-03-28", status: "Paid" },
    { id: 4, name: "Phone Bill", amount: 54.30, date: "2025-03-25", status: "Paid" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/scan"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Scan New Bill
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Bills"
              value="128"
              icon={FileText}
              trend={{ value: 12, isPositive: true }}
            />
            <StatsCard
              title="Total Spent"
              value="$4,826.35"
              icon={DollarSign}
              trend={{ value: 8, isPositive: false }}
            />
            <StatsCard
              title="Time Saved"
              value="42 hours"
              icon={Clock}
              trend={{ value: 15, isPositive: true }}
            />
            <StatsCard
              title="Monthly Trend"
              value="+12%"
              icon={TrendingUp}
              trend={{ value: 12, isPositive: true }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Monthly Expenses</h2>
                <select className="bg-muted text-foreground rounded-md px-2 py-1 text-sm">
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                  <option>Last year</option>
                </select>
              </div>
              <div className="h-64 flex items-center justify-center">
                <div className="flex items-end h-full w-full space-x-2 px-4">
                  {[65, 40, 85, 60, 75, 95].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-sm" 
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs mt-2 text-muted-foreground">
                        {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Upcoming Bills</h2>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Rent</p>
                    <p className="text-sm text-muted-foreground">Due in 5 days</p>
                  </div>
                  <span className="font-semibold">$1,200.00</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Electric Bill</p>
                    <p className="text-sm text-muted-foreground">Due in 8 days</p>
                  </div>
                  <span className="font-semibold">$125.00</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Internet</p>
                    <p className="text-sm text-muted-foreground">Due in 12 days</p>
                  </div>
                  <span className="font-semibold">$89.99</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Bills</h2>
              <Link to="/history" className="text-sm text-primary">View all</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left font-medium">Bill</th>
                    <th className="py-3 px-4 text-left font-medium">Amount</th>
                    <th className="py-3 px-4 text-left font-medium">Date</th>
                    <th className="py-3 px-4 text-left font-medium">Status</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBills.map((bill) => (
                    <tr key={bill.id} className="border-b border-border">
                      <td className="py-3 px-4 flex items-center">
                        <Receipt className="h-4 w-4 mr-2 text-muted-foreground" />
                        {bill.name}
                      </td>
                      <td className="py-3 px-4">${bill.amount.toFixed(2)}</td>
                      <td className="py-3 px-4">{bill.date}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          bill.status === 'Paid' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {bill.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-foreground/70 hover:text-primary">View</button>
                          <button className="text-foreground/70 hover:text-primary">Download</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
