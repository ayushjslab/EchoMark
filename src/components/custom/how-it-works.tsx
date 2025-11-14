/* eslint-disable @next/next/no-img-element */
'use client';

export function HowItWorks() {
  const steps = [
  {
    number: "01",
    title: "Add Your Website",
    description:
      "Enter your website name and URL to register it on the platform.",
    image: "/images/add-your-website.png",
  },
  {
    number: "02",
    title: "Get Your Script",
    description:
      "Copy your unique widget script generated automatically for your website.",
    image: "/images/get-your-script.png",
  },
  {
    number: "03",
    title: "Embed the Script",
    description:
      "Paste the script into your website’s HTML to activate the feedback button.",
    image: "/images/checkout-your-profile.png",
  },
  {
    number: "04",
    title: "Receive Feedback",
    description:
      "Visitors on your website can now submit feedback instantly using the feedback widget.",
    image: "/images/select-your-website.png",
  },
  {
    number: "05",
    title: "Feedback Analysis",
    description:
      "Monitor and analyze all feedback in your dashboard with ratings, charts, and insights.",
    image: "/images/feedback-analysis.png",
  },
  {
    number: "06",
    title: "View Customer Data",
    description:
      "Export or review customer details and feedback data to understand your audience better.",
    image: "/images/get-customer-data.png",
  },
];


  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 rounded-full">
              <span className="text-sm font-semibold text-primary">Discover Our Process</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              How <span className="text-primary">EchoMark</span> Works
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Experience a seamless workflow designed to transform your ideas into reality. Six simple steps to success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                        <span className="text-2xl font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-xl group">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
