import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecommendedPlatform from "@/components/RecommendedPlatform";
import ClientReviews from "@/components/ClientReviews";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      {/* Hero Section with webp grid and overlapping smaller tablet */}
      <Hero />

      {/* White Section: "How It Work" with green step buttons */}
      <HowItWorks />

      {/* "What We Offer" - Smart Futures Trading Automation */}
      <WhatWeOffer />

      {/* Crisp White Section: "Why Choose ProfitPlus" with Candlestick Watermark & 4 Notched Cards */}
      <WhyChooseUs />

      {/* Crisp White Section: "Our Recommended Trading Platform" with NinjaTrader & Kinetick */}
      <RecommendedPlatform />

      {/* "What Our Clients Say" with Auto-scrolling Testimonial Cards */}
      <ClientReviews />

      {/* White Section: "Frequently Asked Questions" Accordion */}
      <FAQ />

      {/* Dark Green Section: "Contact Us" with Curved Monitor & Candlestick Background */}
      <ContactUs />

      {/* Dedicated White Gap separating ContactUs from Footer exactly matching user design */}
      <div className="w-full bg-white h-24 sm:h-32 md:h-40" aria-hidden="true" />
    </>
  );
}
