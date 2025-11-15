import Hero from "@/components/Hero";
import RetentionSection from "@/components/RetentionSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="bg-background text-foreground">

      {/* HERO */}
      <Hero />

      {/* RETENTION */}
      <RetentionSection />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* VIDEO */}
      <VideoSection />

      {/* PRICING */}
      <PricingSection />

      {/* FAQ */}
      <FAQSection />

      {/* FOOTER */}
      <Footer />
      
    </main>
  );
}
