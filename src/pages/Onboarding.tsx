import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    interests: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    // Save data and redirect
    console.log("Onboarding complete:", formData);
    alert("Welcome to UNSTOPPABLE GENERATION! 🎉");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    step >= num
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {num}
                </div>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8">
          {/* Step 1: Welcome */}
          {step === 1 && (
            <div className="text-center">
              <div className="mb-6 inline-block p-4 rounded-full bg-blue-100">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Welcome to UNSTOPPABLE GENERATION
              </h2>
              <p className="text-muted-foreground mb-8">
                We're excited to help you on your journey to becoming unstoppable. Let's get to know you better.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                This quick setup will personalize your experience.
              </p>
            </div>
          )}

          {/* Step 2: Personal Info */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Tell Us About You</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What's your name?
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How old are you?
                  </label>
                  <Input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    min="13"
                    max="25"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Interests */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Challenges Are You Facing?
              </h2>
              <p className="text-muted-foreground mb-6">
                Select all that apply (you can change this later)
              </p>
              <div className="space-y-3">
                {[
                  { id: "peer-pressure", label: "Peer Pressure", icon: Users },
                  { id: "substance", label: "Substance Abuse Concerns", icon: Shield },
                  { id: "identity", label: "Finding Myself", icon: Brain },
                  { id: "stress", label: "Stress & Anxiety", icon: Heart }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleInterest(item.id)}
                      className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${
                        formData.interests.includes(item.id)
                          ? "border-blue-600 bg-blue-50"
                          : "border-border hover:border-blue-300"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-foreground">{item.label}</span>
                      {formData.interests.includes(item.id) && (
                        <CheckCircle2 className="h-5 w-5 text-blue-600 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Ready */}
          {step === 4 && (
            <div className="text-center">
              <div className="mb-6 inline-block p-4 rounded-full bg-green-100">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                You're All Set!
              </h2>
              <p className="text-muted-foreground mb-8">
                Hi {formData.name || "friend"}! Your personalized experience is ready.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-3">Your Journey Includes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Personalized tools for your challenges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Daily tips and inspiration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Community support and stories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Progress tracking
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex gap-4 justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 1}
            >
              Back
            </Button>
            {step < 4 ? (
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={
                  (step === 2 && (!formData.name || !formData.age)) ||
                  (step === 3 && formData.interests.length === 0)
                }
              >
                Next
              </Button>
            ) : (
              <Link to="/">
                <Button
                  onClick={handleComplete}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Start Exploring
                </Button>
              </Link>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

// Icons for interests
function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
