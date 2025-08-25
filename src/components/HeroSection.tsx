import { BookOpen, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-books.jpg";

const stats = [
  {
    icon: BookOpen,
    label: "Books Available",
    value: "10,000+",
    color: "text-blue-600"
  },
  {
    icon: Users,
    label: "Active Students",
    value: "25,000+",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "95%",
    color: "text-purple-600"
  },
  {
    icon: Award,
    label: "Study Hours",
    value: "1M+",
    color: "text-amber-600"
  },
];

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero rounded-xl p-8 mb-8">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Academic books floating in space" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4 animate-fade-in">
            Welcome to <span className="text-accent">Sturdy Zone</span>
          </h1>
          <p className="text-xl text-white/90 mb-6 animate-slide-up">
            Your partner to success. Access thousands of academic resources, 
            study materials, and educational content to excel in your studies.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-glow">
              Explore Library
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm">
              Start Reading
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}