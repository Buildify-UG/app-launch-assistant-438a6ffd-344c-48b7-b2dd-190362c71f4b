import { Button } from "@/components/ui/button";
import { Heart, Brain, Shield } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Download Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
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
