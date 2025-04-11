
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard = ({ title, value, icon: Icon, trend }: StatsCardProps) => {
  // Format value as rupees if it's a number
  const formattedValue = typeof value === 'number' 
    ? `₹${value.toLocaleString('en-IN')}` 
    : value;

  return (
    <div className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:bg-accent/40 group">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground/80 transition-colors duration-300">{title}</p>
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{formattedValue}</h3>
          {trend && (
            <p className={`text-xs flex items-center mt-1 ${trend.isPositive ? 'text-green-500' : 'text-red-500'} group-hover:scale-110 transition-transform duration-300`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
