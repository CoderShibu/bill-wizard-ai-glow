
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 animate-fade-in transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:bg-accent/40 group">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-all duration-300">{title}</h3>
      <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
