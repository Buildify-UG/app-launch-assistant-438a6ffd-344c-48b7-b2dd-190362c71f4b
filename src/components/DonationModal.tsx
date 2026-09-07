import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: string;
}

export default function DonationModal({ isOpen, onClose, amount: initialAmount }: DonationModalProps) {
  const [step, setStep] = useState<"amount" | "method" | "details">("amount");
  const [amount, setAmount] = useState(initialAmount || "");
  const [method, setMethod] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const paymentMethods = [
    { id: "card", label: "Card (5321...4380)", details: "CVV: 833 • Expires 08/27" },
    { id: "ecocash", label: "Ecocash", details: "(+263) 771053972 • Amkela Moyo" },
    { id: "mukuru", label: "Mukuru", details: "(+263) 771053972 • Amkela Moyo" }
  ];

  const handleDonate = async () => {
    if (!amount || !method || !donorName || !donorEmail) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donor_name: donorName,
          donor_email: donorEmail,
          amount: parseFloat(amount),
          payment_method: method
        })
      });

      if (response.ok) {
        alert("Thank you for your donation! We'll process it shortly.");
        onClose();
        setStep("amount");
        setAmount("");
        setMethod("");
        setDonorName("");
        setDonorEmail("");
      } else {
        alert("Error processing donation. Please try again.");
      }
    } catch (error) {
      console.error("Donation error:", error);
      alert("Error processing donation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
          <DialogDescription>
            Support UNSTOPPABLE GENERATION and help youth reach their potential
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {step === "amount" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Donation Amount (USD)</label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-2"
                  min="1"
                />
              </div>
              <Button
                onClick={() => setStep("method")}
                disabled={!amount || parseFloat(amount) < 1}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          )}

          {step === "method" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-3 block">Payment Method</label>
                <Select value={method} onValueChange={setMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethods.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {method && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {paymentMethods.find((m) => m.id === method)?.details}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setStep("amount")}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep("details")}
                  disabled={!method}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === "details" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  placeholder="Your name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="rounded-lg bg-blue-50 p-4 text-sm">
                <p className="font-medium text-foreground">Donation Summary</p>
                <p className="mt-2 text-muted-foreground">Amount: <span className="font-semibold text-foreground">${amount}</span></p>
                <p className="text-muted-foreground">Method: <span className="font-semibold text-foreground">{paymentMethods.find((m) => m.id === method)?.label}</span></p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setStep("method")}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleDonate}
                  disabled={isSubmitting}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? "Processing..." : "Donate Now"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
