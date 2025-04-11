
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 animate-fade-in transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl hover:bg-accent/60 group relative overflow-hidden">
      {/* Animated border gradient effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 transition-opacity duration-700 -z-10"></div>
      
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5 group-hover:bg-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-7 w-7 text-primary group-hover:text-primary transition-all duration-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-500">{title}</h3>
      <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500">{description}</p>
      
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1500 ease-in-out -z-10"></div>
    </div>
  );
};

export default FeatureCard;
