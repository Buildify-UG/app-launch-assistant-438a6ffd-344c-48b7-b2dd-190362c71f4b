import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Brain, Shield, Star, Mail, Gift, Apple, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="border-b border-border bg-white sticky top-0 z-50">
    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-foreground">UNSTOPPABLE</h1>
      <nav className="flex gap-4 items-center">
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link to="/onboarding">
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </Link>
      </nav>
    </div>
  </header>
);

export default function Index() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2">
            <span className="text-sm font-semibold text-blue-700">Empowering Youth</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            UNSTOPPABLE GENERATION
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground">
            Break free from peer pressure and substance abuse. Learn to handle life's challenges and discover who you truly are.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/onboarding">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="aspect-video rounded-lg bg-blue-50 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop" 
                alt="Youth empowerment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground">Key Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tools designed to help you thrive
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Freedom from Drugs & Peer Pressure
              </h3>
              <p className="text-muted-foreground">
                Learn proven strategies to resist negative influences and make choices that align with your values. Build confidence to stand alone.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                How to Handle Life
              </h3>
              <p className="text-muted-foreground">
                Master practical skills for managing stress, emotions, and challenges. Develop resilience and emotional intelligence for real-world success.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Know Yourself
              </h3>
              <p className="text-muted-foreground">
                Discover your strengths, values, and purpose. Build self-awareness and confidence to create the life you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground">Stories of Change</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real youth, real transformations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Marcus",
                role: "17 years old",
                quote: "This app helped me say no to peer pressure. I feel confident in my choices now.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              },
              {
                name: "Aisha",
                role: "16 years old",
                quote: "I learned so much about myself. The tools helped me manage stress and anxiety.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              },
              {
                name: "Jordan",
                role: "18 years old",
                quote: "UNSTOPPABLE helped me find my purpose. I'm making better decisions every day.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-xl bg-white p-8 shadow-sm border border-border">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section with App Store Links */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground">Get the App</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Available on iOS and Android
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-black hover:bg-gray-900 text-white">
                <Apple className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Get on Google Play
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold text-foreground">Stay Updated</h2>
          <p className="mt-4 text-muted-foreground">
            Get tips, stories, and updates delivered to your inbox
          </p>
          
          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </form>
          
          {subscribed && (
            <p className="mt-4 text-sm text-green-600 font-medium">
              ✓ Thanks for subscribing!
            </p>
          )}
        </div>
      </section>

      {/* Giving Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Gift className="mx-auto h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-foreground">Make a Difference</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Support youth in your community. Your donation helps us reach more young people.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 mb-8">
            {[
              { amount: "$10", impact: "Reaches 1 youth with resources" },
              { amount: "$50", impact: "Provides mentorship for 1 month" },
              { amount: "$100", impact: "Funds full app access for 5 youth" }
            ].map((tier, idx) => (
              <div key={idx} className="rounded-xl border-2 border-green-200 bg-white p-6 text-center hover:border-green-400 transition-colors">
                <p className="text-3xl font-bold text-green-600">{tier.amount}</p>
                <p className="mt-3 text-sm text-muted-foreground">{tier.impact}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              100% of donations support youth development programs
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Take Control?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join thousands of youth making positive changes in their lives.
          </p>
          <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-blue-50">
            Download UNSTOPPABLE GENERATION
          </Button>
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
