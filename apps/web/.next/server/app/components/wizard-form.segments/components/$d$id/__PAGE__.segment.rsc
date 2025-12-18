1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T394b,"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileCheck,
  MapPin,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ============================================================================
// DATA
// ============================================================================

const STEPS = [
  { id: 1, name: "Personal Info", description: "Basic details", icon: User },
  { id: 2, name: "Address", description: "Location info", icon: MapPin },
  { id: 3, name: "Preferences", description: "Customization", icon: Settings },
  { id: 4, name: "Review", description: "Final check", icon: FileCheck },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function SidebarStep({
  step,
  currentStep,
}: {
  step: (typeof STEPS)[0];
  currentStep: number;
}) {
  const Icon = step.icon;
  const isCompleted = currentStep > step.id;
  const isCurrent = currentStep === step.id;

  return (
    <div className="relative flex items-center gap-4 py-4">
      {/* Vertical Line */}
      {step.id !== STEPS.length && (
        <div className="absolute left-6 top-10 h-full w-[2px] bg-border/30">
          <motion.div
            className="h-full w-full bg-primary"
            initial={{ height: "0%" }}
            animate={{ height: isCompleted ? "100%" : "0%" }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* Icon Bubble */}
      <motion.div
        className={cn(
          "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
          isCompleted
            ? "border-primary bg-primary text-primary-foreground"
            : isCurrent
              ? "border-primary bg-background text-primary shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"
              : "border-border/50 bg-background/50 text-muted-foreground"
        )}
        whileHover={{ scale: 1.05 }}
      >
        {isCompleted ? (
          <Check className="h-5 w-5" strokeWidth={3} />
        ) : (
          <Icon className="h-5 w-5" />
        )}
      </motion.div>

      {/* Text Info */}
      <div className="flex flex-col">
        <span
          className={cn(
            "text-sm font-semibold transition-colors duration-300",
            isCurrent || isCompleted
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {step.name}
        </span>
        <span className="text-xs text-muted-foreground/70">
          {step.description}
        </span>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        className="text-sm font-medium"
      >
        {label} <span className="text-destructive">*</span>
      </Label>
      <Input
        id={label.toLowerCase().replace(/\s/g, "-")}
        type={type}
        placeholder={placeholder}
        className="rounded-lg border-border/40 bg-background/40 backdrop-blur transition-all focus:border-primary/50 focus:bg-background/60"
      />
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/20 bg-background/40 p-3 backdrop-blur transition-colors hover:bg-background/60">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function WizardForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background p-6 lg:p-12 w-full">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Wizard Form
          </Badge>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Account Setup
          </h1>
          <p className="text-muted-foreground">
            Complete the steps below to verify your profile
          </p>
        </div>

        {/* Main Card Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-3xl border border-border/40 bg-background/40 backdrop-blur-xl"
        >
          {/* Glass Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-[320px_1fr]">
            {/* Left Sidebar - Steps */}
            <div className="border-b border-border/40 bg-background/30 p-8 lg:border-b-0 lg:border-r">
              <div className="space-y-1">
                {STEPS.map((step) => (
                  <SidebarStep
                    key={step.id}
                    step={step}
                    currentStep={currentStep}
                  />
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col p-8 lg:p-12">
              <div className="flex-1">
                <motion.div
                  key={currentStep}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {/* Step Header */}
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {STEPS[currentStep - 1].name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {STEPS[currentStep - 1].description}
                    </p>
                  </div>

                  {/* Form Content */}
                  <div className="min-h-[300px]">
                    {currentStep === 1 && (
                      <div className="grid gap-6 md:grid-cols-2">
                        <InputField label="First Name" placeholder="John" />
                        <InputField label="Last Name" placeholder="Doe" />
                        <InputField
                          label="Email"
                          placeholder="john@example.com"
                          type="email"
                        />
                        <InputField
                          label="Phone"
                          placeholder="+1 (555) 000-0000"
                          type="tel"
                        />
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <InputField
                          label="Street Address"
                          placeholder="123 Main St"
                        />
                        <div className="grid gap-6 md:grid-cols-3">
                          <InputField label="City" placeholder="New York" />
                          <InputField label="State" placeholder="NY" />
                          <InputField label="ZIP Code" placeholder="10001" />
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <Label className="text-base">
                            Notification Method
                          </Label>
                          <div className="grid gap-4 sm:grid-cols-3">
                            {["Email", "SMS", "Both"].map((option) => (
                              <label
                                key={option}
                                className="relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-border/40 bg-background/40 p-4 text-center transition-all hover:border-primary/50 hover:bg-background/60 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                              >
                                <input
                                  type="radio"
                                  name="notification"
                                  className="sr-only"
                                />
                                <span className="text-sm font-medium">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-base">Theme Preference</Label>
                          <div className="grid gap-4 sm:grid-cols-3">
                            {["Auto", "Light", "Dark"].map((option) => (
                              <label
                                key={option}
                                className="relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-border/40 bg-background/40 p-4 text-center transition-all hover:border-primary/50 hover:bg-background/60 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                              >
                                <input
                                  type="radio"
                                  name="theme"
                                  className="sr-only"
                                />
                                <span className="text-sm font-medium">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="rounded-xl border border-border/40 bg-background/20 p-6">
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Personal Information
                          </h3>
                          <div className="grid gap-3">
                            <ReviewItem label="Full Name" value="John Doe" />
                            <ReviewItem
                              label="Email Address"
                              value="john@example.com"
                            />
                            <ReviewItem
                              label="Phone Number"
                              value="+1 (555) 000-0000"
                            />
                          </div>
                        </div>

                        <div className="rounded-xl border border-border/40 bg-background/20 p-6">
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Address Details
                          </h3>
                          <div className="grid gap-3">
                            <ReviewItem label="Street" value="123 Main St" />
                            <ReviewItem
                              label="Location"
                              value="New York, NY 10001"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Footer / Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-8">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="gap-2 rounded-full bg-primary px-8 hover:bg-primary/90"
                >
                  {currentStep === STEPS.length ? (
                    <>
                      Submit
                      <Check className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Next Step
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"wizard-form"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
