
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
    <div className="glass-card p-6 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-accent/30">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{formattedValue}</h3>
          {trend && (
            <p className={`text-xs flex items-center mt-1 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <div className="p-2 rounded-full bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
