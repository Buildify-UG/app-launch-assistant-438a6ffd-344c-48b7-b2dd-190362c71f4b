import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">UNSTOPPABLE GENERATION</h1>
          <Link to="/">
            <Button variant="outline">Back Home</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Our Mission
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Empowering young people to break free from peer pressure, substance abuse, and self-doubt. We believe every youth has unlimited potential.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Why We Started
              </h3>
              <p className="text-muted-foreground mb-4">
                Too many young people struggle silently with peer pressure, substance abuse, and identity issues. They lack tools, mentorship, and safe spaces to learn about themselves.
              </p>
              <p className="text-muted-foreground mb-4">
                UNSTOPPABLE GENERATION was born from a simple belief: every youth deserves access to resources that help them make better choices and discover their true potential.
              </p>
              <p className="text-muted-foreground">
                We created an app that meets young people where they are—on their phones—with practical tools, inspiring stories, and a community that believes in them.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop" 
                alt="Youth empowerment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We meet every youth with empathy, understanding their struggles without judgment."
              },
              {
                icon: Target,
                title: "Empowerment",
                description: "We provide tools and knowledge to help young people take control of their lives."
              },
              {
                icon: Users,
                title: "Community",
                description: "We build a supportive network where youth feel they belong and are valued."
              },
              {
                icon: Lightbulb,
                title: "Growth",
                description: "We believe in continuous learning and personal development for every individual."
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="rounded-xl bg-white p-8 border border-border">
                  <Icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Impact
          </h3>
          
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { stat: "50K+", label: "Youth Reached" },
              { stat: "10M+", label: "Resources Shared" },
              { stat: "95%", label: "User Satisfaction" }
            ].map((item, idx) => (
              <div key={idx}>
                <p className="text-5xl font-bold text-blue-600">{item.stat}</p>
                <p className="mt-2 text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Join the Movement
          </h3>
          <p className="mt-4 text-lg text-blue-100">
            Be part of a community changing young lives.
          </p>
          <Link to="/">
            <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-blue-50">
              Download the App
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2026 UNSTOPPABLE GENERATION. Empowering youth to reach their potential.</p>
        </div>
      </footer>
    </div>
  );
}
